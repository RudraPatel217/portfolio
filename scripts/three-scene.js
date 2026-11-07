/**
 * Rudra Patel Portfolio - Three.js 3D Interactive Canvas
 * Elevated to Micheel / Gr8r Studio Luxury Editorial Aesthetic
 * Supports both standalone UMD and ES Module environments.
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
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
          canvas: this.container,
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        });

        this.clock = new THREE.Clock();
        this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
        this.scrollY = 0;
        this.targetScrollY = window.pageYOffset || 0;
        this.currentMode = 'neural'; // 'neural', 'galaxy', 'matrix'
        this.particleCount = window.innerWidth < 768 ? 800 : 1800;

        this.init();
        this.createLights();
        this.createNeuralCore();
        this.createParticleStarfield();
        this.createCyberGrid();
        this.setupEvents();
        this.animate();
      }

      init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.camera.position.z = 8;
      }

      createLights() {
        const ambientLight = new THREE.AmbientLight(0x0f172a, 1.6);
        this.scene.add(ambientLight);

        this.pointLightCyan = new THREE.PointLight(0x38bdf8, 3, 50);
        this.pointLightCyan.position.set(5, 5, 5);
        this.scene.add(this.pointLightCyan);

        this.pointLightBlue = new THREE.PointLight(0x1d4ed8, 2.5, 50);
        this.pointLightBlue.position.set(-5, -5, 3);
        this.scene.add(this.pointLightBlue);
      }

      createNeuralCore() {
        this.coreGroup = new THREE.Group();

        // 1. Inner Geometric Wireframe
        const innerGeo = new THREE.IcosahedronGeometry(2.1, 2);
        const innerMat = new THREE.MeshStandardMaterial({
          color: 0x0f172a,
          wireframe: true,
          emissive: 0x0284c7,
          emissiveIntensity: 0.35,
          roughness: 0.2,
          metalness: 0.8
        });
        this.innerCore = new THREE.Mesh(innerGeo, innerMat);
        this.coreGroup.add(this.innerCore);

        // 2. Outer Holographic Rings (Gimbal Effect)
        const ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
        const ringMat1 = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.55
        });
        this.ring1 = new THREE.Mesh(ringGeo1, ringMat1);
        this.coreGroup.add(this.ring1);

        const ringGeo2 = new THREE.TorusGeometry(3.1, 0.015, 16, 100);
        const ringMat2 = new THREE.MeshBasicMaterial({
          color: 0x60a5fa,
          transparent: true,
          opacity: 0.35
        });
        this.ring2 = new THREE.Mesh(ringGeo2, ringMat2);
        this.ring2.rotation.x = Math.PI / 3;
        this.coreGroup.add(this.ring2);

        // 3. Spherical Particle Halo
        const haloCount = 600;
        const haloGeo = new THREE.BufferGeometry();
        const haloPos = new Float32Array(haloCount * 3);
        const haloColors = new Float32Array(haloCount * 3);

        const color1 = new THREE.Color(0x38bdf8);
        const color2 = new THREE.Color(0x1e3a8a);

        for (let i = 0; i < haloCount; i++) {
          const u = Math.random();
          const v = Math.random();
          const theta = u * 2.0 * Math.PI;
          const phi = Math.acos(2.0 * v - 1.0);
          const r = 2.4 + Math.random() * 0.9;

          const x = r * Math.sin(phi) * Math.cos(theta);
          const y = r * Math.sin(phi) * Math.sin(theta);
          const z = r * Math.cos(phi);

          haloPos[i * 3] = x;
          haloPos[i * 3 + 1] = y;
          haloPos[i * 3 + 2] = z;

          const mixed = color1.clone().lerp(color2, Math.random());
          haloColors[i * 3] = mixed.r;
          haloColors[i * 3 + 1] = mixed.g;
          haloColors[i * 3 + 2] = mixed.b;
        }

        haloGeo.setAttribute('position', new THREE.BufferAttribute(haloPos, 3));
        haloGeo.setAttribute('color', new THREE.BufferAttribute(haloColors, 3));

        const haloMat = new THREE.PointsMaterial({
          size: 0.045,
          vertexColors: true,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending
        });

        this.haloParticles = new THREE.Points(haloGeo, haloMat);
        this.coreGroup.add(this.haloParticles);

        if (window.innerWidth > 992) {
          this.coreGroup.position.set(2.6, 0, 0);
        } else {
          this.coreGroup.position.set(0, 0.4, -2.5);
        }

        this.scene.add(this.coreGroup);
      }

      createParticleStarfield() {
        const starGeo = new THREE.BufferGeometry();
        const starPos = new Float32Array(this.particleCount * 3);
        const starColors = new Float32Array(this.particleCount * 3);

        const colorCyan = new THREE.Color(0x38bdf8);
        const colorDark = new THREE.Color(0x1e293b);
        const colorWhite = new THREE.Color(0xffffff);

        for (let i = 0; i < this.particleCount; i++) {
          starPos[i * 3] = (Math.random() - 0.5) * 42;
          starPos[i * 3 + 1] = (Math.random() - 0.5) * 42;
          starPos[i * 3 + 2] = (Math.random() - 0.5) * 36;

          const rand = Math.random();
          let c = colorDark;
          if (rand > 0.7) c = colorCyan;
          else if (rand > 0.9) c = colorWhite;

          starColors[i * 3] = c.r;
          starColors[i * 3 + 1] = c.g;
          starColors[i * 3 + 2] = c.b;
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

        const starMat = new THREE.PointsMaterial({
          size: 0.05,
          vertexColors: true,
          transparent: true,
          opacity: 0.65,
          blending: THREE.AdditiveBlending
        });

        this.starfield = new THREE.Points(starGeo, starMat);
        this.scene.add(this.starfield);
      }

      createCyberGrid() {
        this.gridHelper = new THREE.GridHelper(50, 50, 0x38bdf8, 0x0f172a);
        this.gridHelper.position.y = -6;
        this.gridHelper.material.transparent = true;
        this.gridHelper.material.opacity = 0.2;
        this.scene.add(this.gridHelper);
      }

      triggerClickShockwave(clientX, clientY) {
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;

        const burstGeo = new THREE.RingGeometry(0.1, 0.2, 32);
        const burstMat = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending
        });

        const burst = new THREE.Mesh(burstGeo, burstMat);
        burst.position.set(x * 6, y * 4, 2);
        this.scene.add(burst);

        let scale = 1;
        const animateBurst = () => {
          scale += 0.25;
          burst.scale.set(scale, scale, 1);
          burst.material.opacity -= 0.035;

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

          if (window.innerWidth > 992) {
            this.coreGroup.position.set(2.6, 0, 0);
          } else {
            this.coreGroup.position.set(0, 0.4, -2.5);
          }
        });

        window.addEventListener('scroll', () => {
          this.targetScrollY = window.pageYOffset;
        });

        window.addEventListener('mousemove', (e) => {
          this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
          this.mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        window.addEventListener('click', (e) => {
          if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes(e.target.tagName)) return;
          this.triggerClickShockwave(e.clientX, e.clientY);
        });

        const modeButtons = document.querySelectorAll('.scene-pill');
        modeButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.switchMode(btn.dataset.mode);
          });
        });
      }

      switchMode(mode) {
        this.currentMode = mode;
        if (mode === 'neural') {
          this.coreGroup.visible = true;
          this.gridHelper.visible = true;
          this.gridHelper.material.opacity = 0.12;
          this.starfield.visible = true;
          if (this.innerCore) {
            this.innerCore.material.color.setHex(0x38bdf8);
            this.innerCore.material.wireframe = true;
          }
        } else if (mode === 'galaxy') {
          this.coreGroup.visible = false;
          this.gridHelper.visible = false;
          this.starfield.visible = true;
        } else if (mode === 'cyber' || mode === 'matrix') {
          this.coreGroup.visible = true;
          this.gridHelper.visible = true;
          this.gridHelper.material.opacity = 0.45;
          this.starfield.visible = true;
          if (this.innerCore) {
            this.innerCore.material.color.setHex(0x00f5ff);
            this.innerCore.material.wireframe = true;
          }
          this.triggerClickShockwave(window.innerWidth / 2, window.innerHeight / 2);
        }
      }

      animate() {
        requestAnimationFrame(this.animate.bind(this));

        const delta = this.clock.getDelta();
        const elapsedTime = this.clock.getElapsedTime();

        // Smooth Mouse Lerp
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

        // Smooth Scroll Interpolation for Camera Choreography
        this.scrollY += (this.targetScrollY - this.scrollY) * 0.05;
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const scrollProgress = Math.min(Math.max(this.scrollY / maxScroll, 0), 1);

        this.camera.position.z = 8 + Math.sin(scrollProgress * Math.PI) * 2;
        this.camera.position.y = -scrollProgress * 3;
        this.camera.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.04;

        // Rotate Neural Core
        if (this.coreGroup && this.coreGroup.visible) {
          this.innerCore.rotation.x += 0.005;
          this.innerCore.rotation.y += 0.008;

          this.ring1.rotation.x += 0.01;
          this.ring1.rotation.y += 0.015;

          this.ring2.rotation.y -= 0.012;
          this.ring2.rotation.z += 0.008;

          this.haloParticles.rotation.y -= 0.003;

          this.coreGroup.position.y += Math.sin(elapsedTime * 1.5) * 0.002;

          this.coreGroup.rotation.y = this.mouse.x * 0.35;
          this.coreGroup.rotation.x = -this.mouse.y * 0.35;
        }

        // Starfield drift
        if (this.starfield) {
          this.starfield.rotation.y = elapsedTime * 0.018 + this.mouse.x * 0.08;
          this.starfield.rotation.x = this.mouse.y * 0.04;
        }

        // Grid velocity movement
        if (this.gridHelper && this.gridHelper.visible) {
          this.gridHelper.position.z = (elapsedTime * 1.2) % 2;
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
