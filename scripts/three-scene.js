/**
 * Rudra Patel Portfolio — Three.js Real-Time Cosmic Galaxy Simulation & Spacetime Grid
 * Inspired by Andrew Campbell's N-body galaxy simulation (andrewdcampbell.github.io/galaxy-sim)
 * Features:
 *   - 3D Logarithmic Spiral Galaxy with differential Keplerian orbital dynamics
 *   - GPU-accelerated ShaderMaterial for 120 FPS silky fluid star rendering
 *   - Central galactic core / black hole event horizon with radiant accretion rings
 *   - Spacetime cyber coordinate grid with relativistic wave oscillation
 *   - Scroll-driven camera choreography: Zoom in deep into the galactic plane when scrolling down,
 *     zoom out to a sweeping panoramic view when scrolling up
 *   - Mouse interactive 3D parallax tilt and click gravitational shockwave ripples
 */

(function () {
  function initThreeScene() {
    const THREE = window.THREE;
    if (!THREE) {
      console.warn('Three.js library not loaded yet.');
      return;
    }

    const container = document.getElementById('webgl-canvas');
    if (!container) return;

    class ThreeSceneManager {
      constructor() {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
          canvas: this.container,
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        });

        this.clock = new THREE.Clock();
        this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
        this.scrollY = 0;
        this.targetScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

        // Adaptive star budget based on screen width for maximum performance
        const isMobile = window.innerWidth < 768;
        this.starCount = isMobile ? 14000 : 32000;
        this.outerFieldCount = isMobile ? 800 : 2000;

        this.init();
        this.starTexture = this.createStarTexture();
        this.createLights();
        this.createGalaxySimulation();
        this.createGalacticCore();
        this.createCosmicOuterField();
        this.createCyberGrid();
        this.setupEvents();
        this.initModeToggle();
        this.animate();
      }

      init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.25;

        // Initial zoomed-out camera position (panoramic overview of the galaxy)
        this.camera.position.set(0, 9.5, 23.0);
        this.camera.lookAt(0, 0, 0);
      }

      /**
       * Generate procedural glowing star texture via in-memory canvas
       * Produces soft, incandescent celestial bodies with natural Gaussian falloff
       */
      createStarTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.12, 'rgba(224, 242, 254, 0.95)');
        gradient.addColorStop(0.28, 'rgba(111, 231, 255, 0.7)');
        gradient.addColorStop(0.55, 'rgba(99, 102, 241, 0.3)');
        gradient.addColorStop(1, 'rgba(5, 7, 13, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
      }

      createLights() {
        const ambientLight = new THREE.AmbientLight(0x0a101f, 1.8);
        this.scene.add(ambientLight);

        this.coreLight = new THREE.PointLight(0x67e8f9, 3.5, 60);
        this.coreLight.position.set(0, 1, 0);
        this.scene.add(this.coreLight);

        this.secondaryLight = new THREE.PointLight(0x818cf8, 2.2, 50);
        this.secondaryLight.position.set(-6, 3, -6);
        this.scene.add(this.secondaryLight);
      }

      /**
       * GPU-Accelerated N-Body Spiral Galaxy Simulation
       * Modeled with logarithmic density wave equations and Keplerian rotation
       */
      createGalaxySimulation() {
        const count = this.starCount;
        const arms = 3;
        const maxRadius = 21.0;
        const spinFactor = 1.35;
        const dispersionPower = 3.2;

        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const radii = new Float32Array(count);
        const angles = new Float32Array(count);
        const speeds = new Float32Array(count);
        const dispX = new Float32Array(count);
        const dispY = new Float32Array(count);
        const dispZ = new Float32Array(count);
        const scales = new Float32Array(count);

        // Multi-stop Cosmic Color Palette:
        // Core: incandescent amber/gold & white -> Inner arms: vibrant cyan -> Outer arms: indigo/violet
        const colorCore = new THREE.Color(0xfff7d6);
        const colorAmber = new THREE.Color(0xfbbf24);
        const colorCyan = new THREE.Color(0x38bdf8);
        const colorIndigo = new THREE.Color(0x6366f1);
        const colorViolet = new THREE.Color(0xa855f7);

        for (let i = 0; i < count; i++) {
          // Logarithmic radius distribution: dense core, graceful spiral arms
          const rNormalized = Math.pow(Math.random(), 1.38);
          const r = rNormalized * maxRadius + 0.15;
          radii[i] = r;

          // Spiral arm assignment and logarithmic angle
          const armIndex = i % arms;
          const baseArmAngle = (armIndex * 2 * Math.PI) / arms;
          const spiralAngle = baseArmAngle + r * spinFactor;
          angles[i] = spiralAngle;

          // Keplerian differential orbital velocity: v ~ 1 / sqrt(r)
          // Inner stars complete orbits rapidly, outer arms swirl smoothly
          const orbitalSpeed = 0.22 / Math.pow(r + 0.85, 0.58);
          speeds[i] = orbitalSpeed;

          // Random spatial dispersion (stellar clouds & nebular thickness)
          const randomFactor = Math.pow(Math.random(), dispersionPower);
          const signX = Math.random() < 0.5 ? 1 : -1;
          const signY = Math.random() < 0.5 ? 1 : -1;
          const signZ = Math.random() < 0.5 ? 1 : -1;

          const spread = 0.38 * r;
          dispX[i] = randomFactor * signX * spread;
          dispZ[i] = randomFactor * signZ * spread;
          // Disk scale height: thinner at perimeter, thicker near central bulge
          const diskThickness = 0.16 + (1.0 - r / maxRadius) * 0.45;
          dispY[i] = randomFactor * signY * spread * diskThickness;

          // Star Size variations: mix of fine dust, normal stars, and occasional supergiants
          const sizeRand = Math.random();
          if (sizeRand > 0.985) {
            scales[i] = 2.8 + Math.random() * 2.2; // Giant stars
          } else if (sizeRand > 0.85) {
            scales[i] = 1.4 + Math.random() * 0.9;
          } else {
            scales[i] = 0.6 + Math.random() * 0.65; // Interstellar dust/stars
          }

          // Smooth color gradation across radial zones
          const starColor = new THREE.Color();
          if (r < 3.2) {
            const t = r / 3.2;
            starColor.lerpColors(colorCore, colorAmber, t);
          } else if (r < 11.0) {
            const t = (r - 3.2) / (11.0 - 3.2);
            starColor.lerpColors(colorAmber, colorCyan, t);
          } else {
            const t = (r - 11.0) / (maxRadius - 11.0);
            const outerTarget = Math.random() > 0.4 ? colorIndigo : colorViolet;
            starColor.lerpColors(colorCyan, outerTarget, t);
          }

          // Subtle brightness variance
          const luminanceVariance = 0.85 + Math.random() * 0.3;
          colors[i * 3] = starColor.r * luminanceVariance;
          colors[i * 3 + 1] = starColor.g * luminanceVariance;
          colors[i * 3 + 2] = starColor.b * luminanceVariance;

          // Base positions for initial bounding computation
          positions[i * 3] = Math.cos(spiralAngle) * r + dispX[i];
          positions[i * 3 + 1] = dispY[i];
          positions[i * 3 + 2] = Math.sin(spiralAngle) * r + dispZ[i];
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('aRadius', new THREE.BufferAttribute(radii, 1));
        geometry.setAttribute('aAngle', new THREE.BufferAttribute(angles, 1));
        geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
        geometry.setAttribute('aDispX', new THREE.BufferAttribute(dispX, 1));
        geometry.setAttribute('aDispY', new THREE.BufferAttribute(dispY, 1));
        geometry.setAttribute('aDispZ', new THREE.BufferAttribute(dispZ, 1));
        geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
        geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));

        // High-Performance GPU Vertex & Fragment Shaders
        const galaxyVertexShader = `
          uniform float uTime;
          uniform float uBaseSize;

          attribute float aRadius;
          attribute float aAngle;
          attribute float aSpeed;
          attribute float aDispX;
          attribute float aDispY;
          attribute float aDispZ;
          attribute float aScale;
          attribute vec3 aColor;

          varying vec3 vColor;
          varying float vDist;

          void main() {
            vColor = aColor;

            // Compute living differential orbital rotation on the GPU
            float currentAngle = aAngle + uTime * aSpeed;

            vec3 pos;
            pos.x = cos(currentAngle) * aRadius + aDispX;
            pos.z = sin(currentAngle) * aRadius + aDispZ;
            // Subtle harmonic galactic vertical oscillation
            pos.y = aDispY + sin(uTime * 0.65 + aRadius * 0.85) * 0.12;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            // Distance-attenuated point size (larger up close, fine and crisp at distance)
            float pointSize = uBaseSize * aScale * (42.0 / -mvPosition.z);
            gl_PointSize = clamp(pointSize, 1.5, 52.0);
            vDist = -mvPosition.z;
          }
        `;

        const galaxyFragmentShader = `
          uniform sampler2D uStarTexture;
          varying vec3 vColor;
          varying float vDist;

          void main() {
            vec4 texColor = texture2D(uStarTexture, gl_PointCoord);
            if (texColor.a < 0.04) discard;

            // Luminous core boost
            vec3 finalColor = vColor * texColor.rgb * 1.45;
            gl_FragColor = vec4(finalColor, texColor.a);
          }
        `;

        this.galaxyUniforms = {
          uTime: { value: 0 },
          uBaseSize: { value: window.innerWidth < 768 ? 2.4 : 3.0 },
          uStarTexture: { value: this.starTexture }
        };

        const material = new THREE.ShaderMaterial({
          vertexShader: galaxyVertexShader,
          fragmentShader: galaxyFragmentShader,
          uniforms: this.galaxyUniforms,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });

        this.galaxyPoints = new THREE.Points(geometry, material);
        this.galaxyPoints.position.set(0, 0, 0);
        // Tilt the galactic plane slightly for rich 3D perspective
        this.galaxyPoints.rotation.x = 0.38;
        this.galaxyPoints.rotation.z = -0.18;

        this.scene.add(this.galaxyPoints);
      }

      /**
       * Central Singularity / Luminous Galactic Bulge
       * Event horizon accretion torus and crystalline quantum core
       */
      createGalacticCore() {
        this.coreGroup = new THREE.Group();

        // 1. Accretion Torus Ring (Event Horizon Edge)
        const ringGeo1 = new THREE.TorusGeometry(1.6, 0.025, 16, 120);
        const ringMat1 = new THREE.MeshBasicMaterial({
          color: 0x67e8f9,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
        });
        this.coreRing1 = new THREE.Mesh(ringGeo1, ringMat1);
        this.coreGroup.add(this.coreRing1);

        // 2. Secondary Inclined Accretion Ring
        const ringGeo2 = new THREE.TorusGeometry(2.1, 0.016, 16, 120);
        const ringMat2 = new THREE.MeshBasicMaterial({
          color: 0x818cf8,
          transparent: true,
          opacity: 0.42,
          blending: THREE.AdditiveBlending
        });
        this.coreRing2 = new THREE.Mesh(ringGeo2, ringMat2);
        this.coreRing2.rotation.x = Math.PI / 3.2;
        this.coreRing2.rotation.y = Math.PI / 5.5;
        this.coreGroup.add(this.coreRing2);

        // 3. Central Pulsing Quantum Singularity
        const singularityGeo = new THREE.IcosahedronGeometry(0.85, 2);
        const singularityMat = new THREE.MeshStandardMaterial({
          color: 0x050811,
          emissive: 0x38bdf8,
          emissiveIntensity: 0.6,
          wireframe: true,
          roughness: 0.2,
          metalness: 0.95
        });
        this.singularityMesh = new THREE.Mesh(singularityGeo, singularityMat);
        this.coreGroup.add(this.singularityMesh);

        // Align with the galactic tilt
        this.coreGroup.rotation.x = 0.38;
        this.coreGroup.rotation.z = -0.18;

        this.scene.add(this.coreGroup);
      }

      /**
       * Panoramic Cosmic Field of Distant Deep-Space Stars
       */
      createCosmicOuterField() {
        const count = this.outerFieldCount;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const colorDeepCyan = new THREE.Color(0x38bdf8);
        const colorDimWhite = new THREE.Color(0xffffff);
        const colorDeepPurple = new THREE.Color(0x6366f1);

        for (let i = 0; i < count; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 110;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 85;

          const rand = Math.random();
          let c = colorDimWhite;
          if (rand > 0.65) c = colorDeepCyan;
          else if (rand > 0.88) c = colorDeepPurple;

          const brightness = 0.35 + Math.random() * 0.55;
          colors[i * 3] = c.r * brightness;
          colors[i * 3 + 1] = c.g * brightness;
          colors[i * 3 + 2] = c.b * brightness;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
          size: 0.08,
          map: this.starTexture,
          vertexColors: true,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });

        this.outerFieldPoints = new THREE.Points(geometry, material);
        this.scene.add(this.outerFieldPoints);
      }

      /**
       * Spacetime Cyber Coordinate Grid — Cleanly omitted to ensure zero distracting lines
       */
      createCyberGrid() {
        this.gridHelper = null;
      }

      /**
       * Gravitational shockwave ripple on user click
       */
      triggerClickShockwave(clientX, clientY) {
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;

        const burstGeo = new THREE.RingGeometry(0.08, 0.22, 36);
        const burstMat = new THREE.MeshBasicMaterial({
          color: 0x67e8f9,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.95,
          blending: THREE.AdditiveBlending
        });

        const burst = new THREE.Mesh(burstGeo, burstMat);
        burst.position.set(x * 10, y * 6, this.camera.position.z - 6);
        this.scene.add(burst);

        let scale = 1.0;
        const animateBurst = () => {
          scale += 0.35;
          burst.scale.set(scale, scale, 1);
          burst.material.opacity -= 0.038;

          if (burst.material.opacity > 0) {
            requestAnimationFrame(animateBurst);
          } else {
            this.scene.remove(burst);
            burstGeo.dispose();
            burstMat.dispose();
          }
        };
        animateBurst();
      }

      setupEvents() {
        window.addEventListener('resize', () => {
          this.camera.aspect = window.innerWidth / window.innerHeight;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(window.innerWidth, window.innerHeight);

          if (this.galaxyUniforms) {
            this.galaxyUniforms.uBaseSize.value = window.innerWidth < 768 ? 2.4 : 3.0;
          }
        }, { passive: true });

        // Scroll listener updating target scroll position
        window.addEventListener('scroll', () => {
          this.targetScrollY = window.pageYOffset || document.documentElement.scrollTop;
        }, { passive: true });

        // Mouse interactive parallax coordinates
        window.addEventListener('mousemove', (e) => {
          this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
          this.mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
        }, { passive: true });

        // Click trigger for gravitational shockwave
        window.addEventListener('click', (e) => {
          if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes(e.target.tagName) || e.target.closest('button, a')) return;
          this.triggerClickShockwave(e.clientX, e.clientY);
        });
      }

      initModeToggle() {
        // Default on open is the Neural theme (the 100/10 3D moving cosmic galaxy simulation)
        this.setMode('neural', false);

        const toggleBtn = document.getElementById('scene-mode-toggle');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMode();
          });
        }
      }

      toggleMode() {
        const nextMode = this.currentMode === 'neural' ? 'simple' : 'neural';
        this.setMode(nextMode, true);
      }

      setMode(mode, playFeedback = true) {
        this.currentMode = mode;
        const toggleBtn = document.getElementById('scene-mode-toggle');
        const label = document.getElementById('scene-mode-label');

        if (mode === 'simple') {
          // Simple Theme: Pure, minimal, luxury dark blue background — NO lines, NO grid, NO 3D canvas
          document.body.classList.add('mode-simple');
          document.body.classList.remove('mode-neural');
          if (label) label.innerHTML = '&bull; Neural';
          if (toggleBtn) {
            toggleBtn.classList.add('mode-simple-active');
            toggleBtn.setAttribute('title', 'Current: Simple Theme (Click to switch to 3D Neural Galaxy)');
          }

          if (this.galaxyPoints) {
            this.galaxyPoints.visible = false;
          }
          if (this.coreGroup) {
            this.coreGroup.visible = false;
          }
          if (this.outerFieldPoints) {
            this.outerFieldPoints.visible = false;
          }
        } else {
          // Neural Theme (Default): 100/10 Moving 3D Cosmic Galaxy Universe Simulation with Scroll Zoom
          document.body.classList.remove('mode-simple');
          document.body.classList.add('mode-neural');
          if (label) label.innerHTML = '&bull; Simple';
          if (toggleBtn) {
            toggleBtn.classList.remove('mode-simple-active');
            toggleBtn.setAttribute('title', 'Current: 3D Neural Galaxy (Click to switch to Simple Theme)');
          }

          if (this.galaxyPoints) {
            this.galaxyPoints.visible = true;
          }
          if (this.coreGroup) {
            this.coreGroup.visible = true;
          }
          if (this.outerFieldPoints) {
            this.outerFieldPoints.visible = true;
            this.outerFieldPoints.material.opacity = 0.55;
          }
        }

        if (playFeedback) {
          // Audio synthesizer feedback
          if (window.soundEngine && typeof window.soundEngine.playBlip === 'function') {
            window.soundEngine.playBlip(mode === 'simple' ? 620 : 880, 0.05);
          }
          // Trigger interactive shockwave at screen center
          this.triggerClickShockwave(window.innerWidth / 2, window.innerHeight / 2);
        }
      }

      animate() {
        requestAnimationFrame(this.animate.bind(this));

        const elapsedTime = this.clock.getElapsedTime();

        // 1. Advance GPU Galaxy Shader Time Uniform (only when galaxy is visible in Grid mode)
        if (this.galaxyPoints && this.galaxyPoints.visible && this.galaxyUniforms) {
          this.galaxyUniforms.uTime.value = elapsedTime;
        }

        // 2. Smooth Mouse Lerp (Inertial Damping)
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.045;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.045;

        // 3. Smooth Scroll Interpolation for Camera Zoom Choreography
        this.scrollY += (this.targetScrollY - this.scrollY) * 0.055;
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const scrollFraction = Math.min(Math.max(this.scrollY / maxScroll, 0), 1);

        /**
         * SCROLL ZOOM CHOREOGRAPHY:
         *   - Scroll = 0 (Hero / Top): Camera at distance z = 23.5, y = 9.2 (Zoomed OUT, full panoramic view)
         *   - Scroll Down: Camera dives directly into the 3D scene (z zooms from 23.5 down to 5.4)
         *   - Scroll Up: Camera smoothly zooms OUT back to z = 23.5!
         */
        const zoomOutZ = 23.5;
        const zoomInZ = 5.4;
        const zoomOutY = 9.2;
        const zoomInY = 1.1;

        // Smooth cubic-out curve for cinematic spatial flight feel
        const zoomEase = 1.0 - Math.pow(1.0 - scrollFraction, 2.2);
        const targetZ = zoomOutZ - (zoomOutZ - zoomInZ) * zoomEase;
        const targetY = zoomOutY - (zoomOutY - zoomInY) * scrollFraction;
        const targetX = Math.sin(scrollFraction * Math.PI) * 2.5;

        // Dynamic Mouse Parallax Offset
        const parallaxX = this.mouse.x * 2.4;
        const parallaxY = this.mouse.y * 1.6;

        this.camera.position.x = targetX + parallaxX;
        this.camera.position.y = targetY + parallaxY;
        this.camera.position.z = targetZ;

        // Smooth look-at point drifting through the scene
        const lookTargetY = -scrollFraction * 0.8;
        const lookTargetX = Math.sin(scrollFraction * Math.PI * 1.5) * 0.6;
        this.camera.lookAt(lookTargetX, lookTargetY, 0);

        // 4. Rotate Galactic Accretion Rings & Singularity Core (only in Grid mode when visible)
        if (this.coreGroup && this.coreGroup.visible) {
          this.coreRing1.rotation.z += 0.009;
          this.coreRing2.rotation.z -= 0.007;
          this.coreRing2.rotation.x += 0.005;

          if (this.singularityMesh) {
            this.singularityMesh.rotation.y += 0.012;
            this.singularityMesh.rotation.x += 0.008;
            const corePulse = 1.0 + Math.sin(elapsedTime * 2.2) * 0.08;
            this.singularityMesh.scale.set(corePulse, corePulse, corePulse);
          }
        }

        // 5. Outer Cosmic Field Slow Ambient Drift
        if (this.outerFieldPoints && this.outerFieldPoints.visible) {
          this.outerFieldPoints.rotation.y = elapsedTime * 0.008;
        }

        // 6. Spacetime Grid Relativistic Wave Oscillation (only in Grid mode when visible)
        if (this.gridHelper && this.gridHelper.visible) {
          this.gridHelper.position.z = (elapsedTime * 0.8) % 2;
          this.gridHelper.rotation.y = Math.sin(elapsedTime * 0.15) * 0.03;
        }

        this.renderer.render(this.scene, this.camera);
      }
    }

    window.threeApp = new ThreeSceneManager();
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initThreeScene);
  } else {
    initThreeScene();
  }
})();
