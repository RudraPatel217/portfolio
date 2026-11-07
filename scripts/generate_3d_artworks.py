import os

output_dir = r"d:\Hackathons project\portfolio\assets\images\projects"
os.makedirs(output_dir, exist_ok=True)

# 1. Concentric Cyan/Mint Ripple Rings (inspired by frame_02_168.jpg)
# For: Domain Intelligence & SEO Auditor
svg_domain_3d = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgArt1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111520"/>
      <stop offset="100%" stop-color="#181d2c"/>
    </linearGradient>
    <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#66e3d2"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0f2b48"/>
    </linearGradient>
    <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2dd4bf"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#66e3d2" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <rect width="600" height="500" rx="20" fill="url(#bgArt1)"/>

  <!-- Subtle Ambient Glow -->
  <circle cx="300" cy="250" r="180" fill="url(#centerGlow)"/>

  <!-- 3D Concentric Layered Rings Tunnel -->
  <g transform="translate(300, 250)" filter="url(#shadow1)">
    <!-- Ring 1 (Outer) -->
    <ellipse cx="0" cy="0" rx="190" ry="175" fill="none" stroke="#162e45" stroke-width="22"/>
    <ellipse cx="0" cy="0" rx="190" ry="175" fill="none" stroke="url(#ringGrad1)" stroke-width="12" stroke-linecap="round"/>

    <!-- Ring 2 -->
    <ellipse cx="8" cy="-6" rx="160" ry="148" fill="none" stroke="#11273d" stroke-width="20"/>
    <ellipse cx="8" cy="-6" rx="160" ry="148" fill="none" stroke="url(#ringGrad2)" stroke-width="14"/>

    <!-- Ring 3 -->
    <ellipse cx="16" cy="-12" rx="130" ry="120" fill="none" stroke="#0e2236" stroke-width="22"/>
    <ellipse cx="16" cy="-12" rx="130" ry="120" fill="none" stroke="url(#ringGrad1)" stroke-width="15"/>

    <!-- Ring 4 -->
    <ellipse cx="24" cy="-18" rx="100" ry="92" fill="none" stroke="#0c1d2e" stroke-width="24"/>
    <ellipse cx="24" cy="-18" rx="100" ry="92" fill="none" stroke="url(#ringGrad2)" stroke-width="18"/>

    <!-- Ring 5 -->
    <ellipse cx="32" cy="-24" rx="72" ry="66" fill="none" stroke="#091827" stroke-width="26"/>
    <ellipse cx="32" cy="-24" rx="72" ry="66" fill="none" stroke="url(#ringGrad1)" stroke-width="20"/>

    <!-- Central 3D Core Lens -->
    <ellipse cx="38" cy="-28" rx="46" ry="42" fill="url(#ringGrad2)"/>
    <ellipse cx="40" cy="-30" rx="36" ry="32" fill="#66e3d2"/>
    <ellipse cx="42" cy="-32" rx="22" ry="18" fill="#ffffff" fill-opacity="0.85"/>
  </g>
</svg>"""

with open(os.path.join(output_dir, "domain-3d.svg"), "w", encoding="utf-8") as f:
    f.write(svg_domain_3d)

# 2. Faceted Origami 3D Crystal Cluster (inspired by frame_01_84.jpg right)
# For: ThreatVision
svg_threatvision_3d = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgArt2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#12101b"/>
      <stop offset="100%" stop-color="#1b172a"/>
    </linearGradient>
    <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c084fc" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#12101b" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.75"/>
    </filter>
  </defs>

  <rect width="600" height="500" rx="20" fill="url(#bgArt2)"/>
  <circle cx="300" cy="250" r="190" fill="url(#purpleGlow)"/>

  <!-- 3D Faceted Origami Crystal Cluster -->
  <g transform="translate(300, 240)" filter="url(#shadow2)">
    <!-- Back/Dark Facets -->
    <polygon points="-80,-140 40,-160 -20,-70" fill="#1e1832"/>
    <polygon points="40,-160 120,-90 50,-50" fill="#2d224d"/>
    <polygon points="120,-90 170,-20 80,10" fill="#1b152d"/>
    <polygon points="170,-20 160,80 60,70" fill="#261c3e"/>
    <polygon points="160,80 80,150 20,80" fill="#1a1429"/>
    <polygon points="80,150 -40,160 -10,70" fill="#271b40"/>
    <polygon points="-40,160 -130,90 -50,40" fill="#1f1633"/>
    <polygon points="-130,90 -160,0 -70,-20" fill="#2c1e48"/>
    <polygon points="-160,0 -120,-80 -60,-50" fill="#211837"/>

    <!-- Mid Facets (Electric Slate & Violet Shading) -->
    <polygon points="-20,-70 50,-50 0,0" fill="#4c327e"/>
    <polygon points="50,-50 80,10 10,20" fill="#6b46b3"/>
    <polygon points="80,10 60,70 0,40" fill="#583995"/>
    <polygon points="60,70 20,80 -20,50" fill="#3f276c"/>
    <polygon points="20,80 -10,70 -30,20" fill="#5b379d"/>
    <polygon points="-10,70 -50,40 -40,0" fill="#4a2c82"/>
    <polygon points="-50,40 -70,-20 -20,-10" fill="#633ba8"/>
    <polygon points="-70,-20 -60,-50 0,-30" fill="#784cc9"/>

    <!-- Top Highlighted Shards (Cyan & Amber Metallic Reflection) -->
    <polygon points="-40,-110 30,-90 -10,-30" fill="#38bdf8"/>
    <polygon points="30,-90 100,-40 30,10" fill="#60a5fa"/>
    <polygon points="100,-40 130,40 50,30" fill="#818cf8"/>
    <polygon points="30,10 70,90 0,60" fill="#c084fc"/>
    <polygon points="0,60 -70,100 -30,30" fill="#f43f5e"/>
    <polygon points="-30,30 -110,50 -50,-10" fill="#fb7185"/>
    <polygon points="-50,-10 -90,-60 -20,-40" fill="#38bdf8"/>
    <polygon points="-20,-40 10,-30 0,20" fill="#ffffff" fill-opacity="0.9"/>

    <!-- Gold Accent Plates (like the warm gold reflection in the template) -->
    <polygon points="10,-30 60,-10 30,10" fill="#f59e0b"/>
    <polygon points="60,-10 90,30 50,30" fill="#fbbf24"/>
    <polygon points="30,10 50,30 20,40" fill="#d97706"/>
  </g>
</svg>"""

with open(os.path.join(output_dir, "threatvision-3d.svg"), "w", encoding="utf-8") as f:
    f.write(svg_threatvision_3d)

# 3. Dual-Tone Spiky Metallic Sphere (inspired by frame_01_84.jpg left)
# For: DevRescue AI
svg_devrescue_3d = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgArt3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b131e"/>
      <stop offset="100%" stop-color="#132235"/>
    </linearGradient>
    <radialGradient id="spikeGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0b131e" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow3" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="22" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <rect width="600" height="500" rx="20" fill="url(#bgArt3)"/>
  <circle cx="300" cy="250" r="190" fill="url(#spikeGlow)"/>

  <!-- 3D Spiky Metallic Hemisphere (Blue Left / Gold Right) -->
  <g transform="translate(300, 245) rotate(-15)" filter="url(#shadow3)">
    <!-- Base Core Sphere -->
    <circle cx="0" cy="0" r="130" fill="#0f263e"/>

    <!-- Left Spikes: Cyan & Deep Blue Metallic -->
    <!-- Row 1 -->
    <polygon points="-120,-80 -160,-110 -100,-100" fill="#0284c7"/>
    <polygon points="-100,-100 -160,-110 -130,-70" fill="#38bdf8"/>

    <polygon points="-140,-30 -185,-40 -135,-10" fill="#0369a1"/>
    <polygon points="-135,-10 -185,-40 -125,0" fill="#38bdf8"/>

    <polygon points="-140,30 -185,45 -130,50" fill="#0284c7"/>
    <polygon points="-130,50 -185,45 -110,65" fill="#7dd3fc"/>

    <polygon points="-110,80 -150,115 -90,105" fill="#075985"/>
    <polygon points="-90,105 -150,115 -80,95" fill="#38bdf8"/>

    <!-- Left Mid Spikes -->
    <polygon points="-80,-60 -115,-80 -60,-80" fill="#0284c7"/>
    <polygon points="-60,-80 -115,-80 -70,-50" fill="#bae6fd"/>

    <polygon points="-90,-10 -130,-15 -85,15" fill="#0369a1"/>
    <polygon points="-85,15 -130,-15 -75,20" fill="#38bdf8"/>

    <polygon points="-80,45 -115,65 -65,65" fill="#0284c7"/>
    <polygon points="-65,65 -115,65 -55,50" fill="#7dd3fc"/>

    <!-- Inner Blue Pyramid Clusters -->
    <polygon points="-40,-40 -65,-55 -30,-60" fill="#0369a1"/>
    <polygon points="-30,-60 -65,-55 -35,-30" fill="#38bdf8"/>
    <polygon points="-45,0 -70,0 -40,20" fill="#0284c7"/>
    <polygon points="-40,20 -70,0 -30,15" fill="#7dd3fc"/>
    <polygon points="-35,35 -55,50 -25,45" fill="#0369a1"/>
    <polygon points="-25,45 -55,50 -20,30" fill="#38bdf8"/>

    <!-- Equator Dividing Ridge -->
    <polygon points="-10,-140 0,-170 15,-135" fill="#0284c7"/>
    <polygon points="15,-135 0,-170 20,-130" fill="#fbbf24"/>

    <polygon points="-10,-80 0,-100 15,-75" fill="#38bdf8"/>
    <polygon points="15,-75 0,-100 20,-70" fill="#f59e0b"/>

    <polygon points="-5,-20 0,-35 15,-15" fill="#7dd3fc"/>
    <polygon points="15,-15 0,-35 20,-10" fill="#fde047"/>

    <polygon points="-5,35 0,55 15,40" fill="#38bdf8"/>
    <polygon points="15,40 0,55 20,45" fill="#f59e0b"/>

    <polygon points="-10,95 0,125 15,100" fill="#0284c7"/>
    <polygon points="15,100 0,125 20,105" fill="#d97706"/>

    <!-- Right Spikes: Rich Gold & Amber Metallic -->
    <polygon points="40,-40 65,-55 30,-60" fill="#b45309"/>
    <polygon points="30,-60 65,-55 35,-30" fill="#fbbf24"/>
    <polygon points="45,0 70,0 40,20" fill="#d97706"/>
    <polygon points="40,20 70,0 30,15" fill="#fde047"/>
    <polygon points="35,35 55,50 25,45" fill="#b45309"/>
    <polygon points="25,45 55,50 20,30" fill="#f59e0b"/>

    <!-- Right Mid Spikes -->
    <polygon points="80,-60 115,-80 60,-80" fill="#d97706"/>
    <polygon points="60,-80 115,-80 70,-50" fill="#fde047"/>

    <polygon points="90,-10 130,-15 85,15" fill="#b45309"/>
    <polygon points="85,15 130,-15 75,20" fill="#fbbf24"/>

    <polygon points="80,45 115,65 65,65" fill="#d97706"/>
    <polygon points="65,65 115,65 55,50" fill="#fde047"/>

    <!-- Right Outer Spikes -->
    <polygon points="120,-80 160,-110 100,-100" fill="#b45309"/>
    <polygon points="100,-100 160,-110 130,-70" fill="#fbbf24"/>

    <polygon points="140,-30 185,-40 135,-10" fill="#d97706"/>
    <polygon points="135,-10 185,-40 125,0" fill="#fde047"/>

    <polygon points="140,30 185,45 130,50" fill="#b45309"/>
    <polygon points="130,50 185,45 110,65" fill="#fbbf24"/>

    <polygon points="110,80 150,115 90,105" fill="#92400e"/>
    <polygon points="90,105 150,115 80,95" fill="#f59e0b"/>
  </g>
</svg>"""

with open(os.path.join(output_dir, "devrescue-3d.svg"), "w", encoding="utf-8") as f:
    f.write(svg_devrescue_3d)

# 4. Geodesic Polyhedral Orb with Connected Node Vertices (inspired by frame_02_168.jpg right)
# For: AssetFlow
svg_assetflow_3d = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgArt4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10131a"/>
      <stop offset="100%" stop-color="#181e28"/>
    </linearGradient>
    <radialGradient id="polyGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.2"/>
      <stop offset="60%" stop-color="#38bdf8" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#10131a" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow4" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.75"/>
    </filter>
  </defs>

  <rect width="600" height="500" rx="20" fill="url(#bgArt4)"/>
  <circle cx="300" cy="250" r="180" fill="url(#polyGlow)"/>

  <!-- 3D Geodesic Polyhedral Sphere with Shaded Triangular Facets -->
  <g transform="translate(300, 245)" filter="url(#shadow4)">
    <!-- Shaded Triangular Faces -->
    <!-- Top Cap -->
    <polygon points="0,-150 -70,-110 0,-70" fill="#334155"/>
    <polygon points="0,-150 0,-70 70,-110" fill="#64748b"/>
    <polygon points="70,-110 0,-70 100,-40" fill="#94a3b8"/>
    <polygon points="-70,-110 -100,-40 0,-70" fill="#1e293b"/>

    <!-- Mid Tier Upper -->
    <polygon points="-100,-40 0,-70 -40,0" fill="#334155"/>
    <polygon points="0,-70 100,-40 40,0" fill="#cbd5e1"/>
    <polygon points="-100,-40 -140,20 -40,0" fill="#1e293b"/>
    <polygon points="100,-40 40,0 140,20" fill="#94a3b8"/>
    <polygon points="-40,0 0,-70 40,0" fill="#f8fafc"/>

    <!-- Equator Tier -->
    <polygon points="-40,0 40,0 0,60" fill="#e2e8f0"/>
    <polygon points="-140,20 -40,0 -80,70" fill="#334155"/>
    <polygon points="40,0 140,20 80,70" fill="#64748b"/>
    <polygon points="-40,0 0,60 -80,70" fill="#475569"/>
    <polygon points="40,0 80,70 0,60" fill="#94a3b8"/>

    <!-- Lower Tier -->
    <polygon points="-80,70 0,60 -50,120" fill="#1e293b"/>
    <polygon points="0,60 80,70 50,120" fill="#475569"/>
    <polygon points="0,60 -50,120 0,140" fill="#334155"/>
    <polygon points="0,60 0,140 50,120" fill="#64748b"/>

    <!-- Structural Wireframe Edges (High Precision) -->
    <g stroke="#0f172a" stroke-width="2.5">
      <line x1="0" y1="-150" x2="-70" y2="-110"/>
      <line x1="0" y1="-150" x2="0" y2="-70"/>
      <line x1="0" y1="-150" x2="70" y2="-110"/>
      <line x1="-70" y1="-110" x2="0" y2="-70"/>
      <line x1="0" y1="-70" x2="70" y2="-110"/>
      <line x1="-70" y1="-110" x2="-100" y2="-40"/>
      <line x1="70" y1="-110" x2="100" y2="-40"/>
      <line x1="0" y1="-70" x2="-40" y2="0"/>
      <line x1="0" y1="-70" x2="40" y2="0"/>
      <line x1="-100" y1="-40" x2="-40" y2="0"/>
      <line x1="100" y1="-40" x2="40" y2="0"/>
      <line x1="-40" y1="0" x2="40" y2="0"/>
      <line x1="-40" y1="0" x2="0" y2="60"/>
      <line x1="40" y1="0" x2="0" y2="60"/>
      <line x1="-140" y1="20" x2="-40" y2="0"/>
      <line x1="140" y1="20" x2="40" y2="0"/>
      <line x1="-140" y1="20" x2="-80" y2="70"/>
      <line x1="140" y1="20" x2="80" y2="70"/>
      <line x1="-80" y1="70" x2="0" y2="60"/>
      <line x1="80" y1="70" x2="0" y2="60"/>
      <line x1="-80" y1="70" x2="-50" y2="120"/>
      <line x1="80" y1="70" x2="50" y2="120"/>
      <line x1="0" y1="60" x2="-50" y2="120"/>
      <line x1="0" y1="60" x2="50" y2="120"/>
      <line x1="-50" y1="120" x2="0" y2="140"/>
      <line x1="50" y1="120" x2="0" y2="140"/>
    </g>

    <!-- Vertex Connection Nodes (Spherical Balls at joints, like the template!) -->
    <circle cx="0" cy="-150" r="5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="-70" cy="-110" r="5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="70" cy="-110" r="5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="0" cy="-70" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="-100" cy="-40" r="5" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="100" cy="-40" r="5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="-40" cy="0" r="6.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="40" cy="0" r="6.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="-140" cy="20" r="5" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="140" cy="20" r="5" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="0" cy="60" r="6.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="-80" cy="70" r="5" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="80" cy="70" r="5" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="-50" cy="120" r="5" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="50" cy="120" r="5" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="0" cy="140" r="5" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5"/>
  </g>
</svg>"""

with open(os.path.join(output_dir, "assetflow-3d.svg"), "w", encoding="utf-8") as f:
    f.write(svg_assetflow_3d)

# 5. 3D Isometric Topographic Wireframe Relief
# For: BhuSetu
svg_bhusetu_3d = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgArt5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#091411"/>
      <stop offset="100%" stop-color="#12251f"/>
    </linearGradient>
    <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#059669" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#091411" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow5" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.75"/>
    </filter>
  </defs>

  <rect width="600" height="500" rx="20" fill="url(#bgArt5)"/>
  <circle cx="300" cy="250" r="180" fill="url(#greenGlow)"/>

  <!-- 3D Isometric Topographical Elevation Ribbon Cluster -->
  <g transform="translate(300, 240)" filter="url(#shadow5)">
    <!-- Base Ribbon 1 -->
    <path d="M -160,80 Q -80,20 0,60 T 160,20 L 170,50 Q 80,90 0,90 T -160,110 Z" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>

    <!-- Ribbon 2 -->
    <path d="M -150,40 Q -70,-20 10,20 T 150,-20 L 160,10 Q 70,50 10,50 T -150,70 Z" fill="#047857" stroke="#34d399" stroke-width="1.5"/>

    <!-- Ribbon 3 -->
    <path d="M -140,0 Q -60,-60 20,-20 T 140,-60 L 150,-30 Q 60,10 20,10 T -140,30 Z" fill="#059669" stroke="#6ee7b7" stroke-width="2"/>

    <!-- Central Cadastral Mesh (3D Elevation Peak) -->
    <polygon points="-80,-40 0,-110 80,-40 0,30" fill="#10b981" fill-opacity="0.4" stroke="#34d399" stroke-width="2"/>
    <polygon points="0,-110 90,-150 160,-80 80,-40" fill="#047857" fill-opacity="0.6" stroke="#6ee7b7" stroke-width="2"/>
    <polygon points="-80,-40 0,-110 -70,-150 -150,-80" fill="#065f46" fill-opacity="0.5" stroke="#34d399" stroke-width="2"/>

    <!-- Isometric Vector Nodes -->
    <circle cx="0" cy="-110" r="5" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
    <circle cx="90" cy="-150" r="4.5" fill="#a7f3d0" stroke="#064e3b" stroke-width="1.5"/>
    <circle cx="-70" cy="-150" r="4.5" fill="#a7f3d0" stroke="#064e3b" stroke-width="1.5"/>
    <circle cx="80" cy="-40" r="4.5" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
    <circle cx="-80" cy="-40" r="4.5" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
    <circle cx="0" cy="30" r="5" fill="#34d399" stroke="#064e3b" stroke-width="1.5"/>

    <!-- Floating Cadastral Boundary HUD -->
    <ellipse cx="0" cy="-40" rx="90" ry="35" fill="none" stroke="#34d399" stroke-width="1" stroke-dasharray="4"/>
  </g>
</svg>"""

with open(os.path.join(output_dir, "bhusetu-3d.svg"), "w", encoding="utf-8") as f:
    f.write(svg_bhusetu_3d)

# 6. Pulsating 3D Concentric Radar Sphere
# For: SafeSphere
svg_safesphere_3d = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgArt6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#170c10"/>
      <stop offset="100%" stop-color="#261017"/>
    </linearGradient>
    <radialGradient id="roseGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.4"/>
      <stop offset="60%" stop-color="#e11d48" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#170c10" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow6" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <rect width="600" height="500" rx="20" fill="url(#bgArt6)"/>
  <circle cx="300" cy="250" r="180" fill="url(#roseGlow)"/>

  <!-- 3D Acoustic Ripple Sphere & SOS Beacon -->
  <g transform="translate(300, 245)" filter="url(#shadow6)">
    <!-- Concentric 3D Spherical Latitude Rings -->
    <circle cx="0" cy="0" r="140" fill="none" stroke="#4c0519" stroke-width="1.5" stroke-dasharray="4"/>
    <ellipse cx="0" cy="0" rx="140" ry="40" fill="none" stroke="#881337" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="140" ry="85" fill="none" stroke="#be123c" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="140" ry="120" fill="none" stroke="#e11d48" stroke-width="2"/>

    <!-- Concentric Longitude Rings -->
    <ellipse cx="0" cy="0" rx="40" ry="140" fill="none" stroke="#881337" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="85" ry="140" fill="none" stroke="#be123c" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="120" ry="140" fill="none" stroke="#e11d48" stroke-width="2"/>

    <!-- Outer Acoustic Waveforms radiating outward -->
    <circle cx="0" cy="0" r="165" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6"/>
    <circle cx="0" cy="0" r="190" fill="none" stroke="#fb7185" stroke-width="1" stroke-dasharray="8"/>

    <!-- Glowing SOS Focal Core -->
    <circle cx="0" cy="0" r="30" fill="#f43f5e"/>
    <circle cx="0" cy="0" r="18" fill="#fda4af"/>
    <circle cx="0" cy="0" r="8" fill="#ffffff"/>
  </g>
</svg>"""

with open(os.path.join(output_dir, "safesphere-3d.svg"), "w", encoding="utf-8") as f:
    f.write(svg_safesphere_3d)

# 7. Dynamic Fluid 3D Atmospheric Vortex
# For: Air Pollution & AQI Intelligence
svg_aqi_3d = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgArt7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a131c"/>
      <stop offset="100%" stop-color="#112232"/>
    </linearGradient>
    <radialGradient id="skyGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#0284c7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0a131c" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow7" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.75"/>
    </filter>
  </defs>

  <rect width="600" height="500" rx="20" fill="url(#bgArt7)"/>
  <circle cx="300" cy="250" r="180" fill="url(#skyGlow)"/>

  <!-- 3D Atmospheric Torus / Particle Vortex Rings -->
  <g transform="translate(300, 245)" filter="url(#shadow7)">
    <!-- Swirling Ribbon 1 -->
    <ellipse cx="0" cy="0" rx="145" ry="50" fill="none" stroke="#075985" stroke-width="18" transform="rotate(-30)"/>
    <ellipse cx="0" cy="0" rx="145" ry="50" fill="none" stroke="#0284c7" stroke-width="10" transform="rotate(-30)"/>
    <ellipse cx="0" cy="0" rx="145" ry="50" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="20" transform="rotate(-30)"/>

    <!-- Swirling Ribbon 2 -->
    <ellipse cx="0" cy="0" rx="145" ry="50" fill="none" stroke="#0c4a6e" stroke-width="18" transform="rotate(35)"/>
    <ellipse cx="0" cy="0" rx="145" ry="50" fill="none" stroke="#0369a1" stroke-width="10" transform="rotate(35)"/>
    <ellipse cx="0" cy="0" rx="145" ry="50" fill="none" stroke="#67e8f9" stroke-width="4" stroke-dasharray="16" transform="rotate(35)"/>

    <!-- Swirling Ribbon 3 (Equatorial) -->
    <ellipse cx="0" cy="0" rx="130" ry="70" fill="none" stroke="#0284c7" stroke-width="14" transform="rotate(80)"/>
    <ellipse cx="0" cy="0" rx="130" ry="70" fill="none" stroke="#38bdf8" stroke-width="6" transform="rotate(80)"/>

    <!-- Central Telemetry Particle Sphere -->
    <circle cx="0" cy="0" r="45" fill="#082f49"/>
    <circle cx="0" cy="0" r="28" fill="#0284c7"/>
    <circle cx="0" cy="0" r="12" fill="#bae6fd"/>
  </g>
</svg>"""

with open(os.path.join(output_dir, "aqi-3d.svg"), "w", encoding="utf-8") as f:
    f.write(svg_aqi_3d)

print("Successfully generated all 7 luxury 3D artworks in", output_dir)
