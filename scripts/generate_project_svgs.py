import os

output_dir = r"d:\Hackathons project\portfolio\assets\images\projects"
os.makedirs(output_dir, exist_ok=True)

# 1. Website Analyzer / Domain Intelligence & SEO Auditor
svg_website_analyzer = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0c10"/>
      <stop offset="100%" stop-color="#121622"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141824"/>
      <stop offset="100%" stop-color="#181d2e"/>
    </linearGradient>
    <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#66e3d2"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="480" rx="16" fill="url(#bgGrad)"/>
  <rect width="800" height="480" rx="16" fill="none" stroke="#262f45" stroke-width="1.5"/>

  <!-- Window Header -->
  <rect width="800" height="44" rx="16" fill="#0d1017"/>
  <rect y="43" width="800" height="1" fill="#202738"/>
  <circle cx="28" cy="22" r="5.5" fill="#ef4444"/>
  <circle cx="46" cy="22" r="5.5" fill="#eab308"/>
  <circle cx="64" cy="22" r="5.5" fill="#22c55e"/>

  <!-- URL Bar -->
  <rect x="180" y="10" width="440" height="24" rx="6" fill="#141926" stroke="#252d40" stroke-width="1"/>
  <text x="210" y="26" fill="#66e3d2" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">https://website-analyser-rudra.streamlit.app</text>
  <circle cx="198" cy="22" r="3" fill="#22c55e"/>

  <!-- App Header -->
  <g transform="translate(32, 64)">
    <text x="0" y="24" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700">Domain Intelligence &amp; SEO Auditor</text>
    <text x="0" y="44" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="12">Automated DOM Extraction, Core Web Vitals, Security Headers &amp; Heuristic Checks</text>

    <!-- Target Domain Pill -->
    <rect x="470" y="8" width="266" height="34" rx="8" fill="#151b2b" stroke="#38bdf8" stroke-width="1"/>
    <text x="486" y="30" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="12">audit: enterprise-target.io</text>
    <rect x="680" y="13" width="48" height="24" rx="5" fill="#38bdf8"/>
    <text x="692" y="29" fill="#090b0e" font-family="'Inter', sans-serif" font-size="10" font-weight="700">SCAN</text>
  </g>

  <!-- Metrics Grid -->
  <!-- Score 1: SEO Health -->
  <g transform="translate(32, 134)">
    <rect width="168" height="130" rx="10" fill="url(#cardGrad)" stroke="#222a3d" stroke-width="1"/>
    <text x="16" y="28" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">OVERALL HEALTH</text>
    <circle cx="84" cy="74" r="34" fill="none" stroke="#1e2638" stroke-width="6"/>
    <circle cx="84" cy="74" r="34" fill="none" stroke="url(#mintGrad)" stroke-width="6" stroke-dasharray="213" stroke-dashoffset="21" stroke-linecap="round"/>
    <text x="84" y="80" text-anchor="middle" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800">92%</text>
    <text x="84" y="118" text-anchor="middle" fill="#66e3d2" font-family="'Inter', sans-serif" font-size="10" font-weight="600">PASSED ALL CHECKS</text>
  </g>

  <!-- Metric 2: Core Web Vitals -->
  <g transform="translate(216, 134)">
    <rect width="180" height="130" rx="10" fill="url(#cardGrad)" stroke="#222a3d" stroke-width="1"/>
    <text x="16" y="28" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">CORE WEB VITALS</text>
    
    <text x="16" y="56" fill="#cbd5e1" font-family="'JetBrains Mono', monospace" font-size="11">LCP: <tspan fill="#22c55e" font-weight="700">1.18s (Good)</tspan></text>
    <rect x="16" y="62" width="148" height="4" rx="2" fill="#1e2638"/>
    <rect x="16" y="62" width="128" height="4" rx="2" fill="#22c55e"/>

    <text x="16" y="86" fill="#cbd5e1" font-family="'JetBrains Mono', monospace" font-size="11">FID: <tspan fill="#22c55e" font-weight="700">12ms (Good)</tspan></text>
    <rect x="16" y="92" width="148" height="4" rx="2" fill="#1e2638"/>
    <rect x="16" y="92" width="140" height="4" rx="2" fill="#22c55e"/>

    <text x="16" y="116" fill="#cbd5e1" font-family="'JetBrains Mono', monospace" font-size="11">CLS: <tspan fill="#38bdf8" font-weight="700">0.012 (Stable)</tspan></text>
  </g>

  <!-- Metric 3: Security & WAF Diagnostics -->
  <g transform="translate(412, 134)">
    <rect width="356" height="130" rx="10" fill="url(#cardGrad)" stroke="#222a3d" stroke-width="1"/>
    <text x="20" y="28" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">SECURITY &amp; HEADERS AUDIT</text>
    
    <g transform="translate(20, 44)">
      <circle cx="6" cy="10" r="4" fill="#22c55e"/>
      <text x="18" y="14" fill="#ffffff" font-family="'Inter', sans-serif" font-size="12">TLS 1.3 / Strict-Transport-Security</text>
      <text x="260" y="14" fill="#22c55e" font-family="'JetBrains Mono', monospace" font-size="11">ACTIVE</text>
    </g>

    <g transform="translate(20, 72)">
      <circle cx="6" cy="10" r="4" fill="#22c55e"/>
      <text x="18" y="14" fill="#ffffff" font-family="'Inter', sans-serif" font-size="12">Content-Security-Policy (CSP)</text>
      <text x="260" y="14" fill="#22c55e" font-family="'JetBrains Mono', monospace" font-size="11">VERIFIED</text>
    </g>

    <g transform="translate(20, 100)">
      <circle cx="6" cy="10" r="4" fill="#38bdf8"/>
      <text x="18" y="14" fill="#ffffff" font-family="'Inter', sans-serif" font-size="12">WAF Protection Heuristics</text>
      <text x="260" y="14" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11">CLOUDFLARE</text>
    </g>
  </g>

  <!-- Bottom Data Table: DOM Inspection Details -->
  <g transform="translate(32, 280)">
    <rect width="736" height="168" rx="10" fill="#0f131d" stroke="#1f2738" stroke-width="1"/>
    
    <rect width="736" height="32" rx="10" fill="#141a26"/>
    <text x="24" y="21" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">TAG AUDIT</text>
    <text x="220" y="21" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">STATUS</text>
    <text x="360" y="21" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">OBSERVED VALUE</text>
    <text x="640" y="21" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">HEURISTIC</text>

    <!-- Row 1 -->
    <text x="24" y="58" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">Canonical Tag</text>
    <rect x="220" y="46" width="60" height="18" rx="4" fill="#163828"/>
    <text x="232" y="59" fill="#22c55e" font-family="'Inter', sans-serif" font-size="10" font-weight="700">MATCH</text>
    <text x="360" y="58" fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="11">rel="canonical" self-referential</text>
    <text x="640" y="58" fill="#66e3d2" font-family="'Inter', sans-serif" font-size="11">Optimal</text>

    <!-- Row 2 -->
    <text x="24" y="88" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">OpenGraph Schema</text>
    <rect x="220" y="76" width="60" height="18" rx="4" fill="#163828"/>
    <text x="226" y="89" fill="#22c55e" font-family="'Inter', sans-serif" font-size="10" font-weight="700">8 TAGS</text>
    <text x="360" y="88" fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="11">og:title, og:image, og:description, twitter:card</text>
    <text x="640" y="88" fill="#66e3d2" font-family="'Inter', sans-serif" font-size="11">Complete</text>

    <!-- Row 3 -->
    <text x="24" y="118" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">Structured Data</text>
    <rect x="220" y="106" width="70" height="18" rx="4" fill="#182c40"/>
    <text x="226" y="119" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="10" font-weight="700">JSON-LD</text>
    <text x="360" y="118" fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="11">Schema.org/SoftwareApplication detected</text>
    <text x="640" y="118" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="11">Valid</text>

    <!-- Row 4 -->
    <text x="24" y="148" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">Report Generation</text>
    <rect x="220" y="136" width="60" height="18" rx="4" fill="#163828"/>
    <text x="227" y="149" fill="#22c55e" font-family="'Inter', sans-serif" font-size="10" font-weight="700">READY</text>
    <text x="360" y="148" fill="#cbd5e1" font-family="'JetBrains Mono', monospace" font-size="11">Forensic Excel XLSX report exported (28KB)</text>
    <text x="640" y="148" fill="#66e3d2" font-family="'Inter', sans-serif" font-size="11">1-Click DL</text>
  </g>
</svg>"""

with open(os.path.join(output_dir, "website-analyzer.svg"), "w", encoding="utf-8") as f:
    f.write(svg_website_analyzer)

# 2. ThreatVision (Explainable AI Malware Detection)
svg_threatvision = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="tvBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0c10"/>
      <stop offset="100%" stop-color="#15121e"/>
    </linearGradient>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#tvBg)"/>
  <rect width="800" height="480" rx="16" fill="none" stroke="#2c223a" stroke-width="1.5"/>

  <!-- Window Header -->
  <rect width="800" height="44" rx="16" fill="#0f0d17"/>
  <rect y="43" width="800" height="1" fill="#251c33"/>
  <circle cx="28" cy="22" r="5.5" fill="#ef4444"/>
  <circle cx="46" cy="22" r="5.5" fill="#eab308"/>
  <circle cx="64" cy="22" r="5.5" fill="#22c55e"/>

  <rect x="220" y="10" width="360" height="24" rx="6" fill="#181426" stroke="#2d2242" stroke-width="1"/>
  <text x="250" y="26" fill="#c084fc" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">ThreatVision XAI // SOC Forensics Console</text>
  <circle cx="236" cy="22" r="3" fill="#a855f7"/>

  <!-- Top Info Strip -->
  <g transform="translate(32, 64)">
    <text x="0" y="22" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="700">Explainable AI (XAI) Malware Detection</text>
    <text x="0" y="42" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="12">Static PE Header Decomposition, XGBoost Classifier &amp; Mathematical SHAP Feature Attributions</text>

    <!-- Threat Verdict Pill -->
    <rect x="520" y="4" width="216" height="42" rx="8" fill="#29111c" stroke="#f43f5e" stroke-width="1.2"/>
    <text x="536" y="24" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">VERDICT: MALICIOUS</text>
    <text x="536" y="38" fill="#fda4af" font-family="'Inter', sans-serif" font-size="10">98.4% Confidence &bull; 18.2ms</text>
  </g>

  <!-- Left: PE Metrics & Classification -->
  <g transform="translate(32, 130)">
    <rect width="320" height="318" rx="10" fill="#120f1c" stroke="#251b36" stroke-width="1"/>
    <text x="20" y="28" fill="#c084fc" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">TELEMETRY // PE ARTIFACT</text>
    
    <g transform="translate(20, 50)">
      <text x="0" y="14" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Sample Binary:</text>
      <text x="140" y="14" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">trojan_win32_drop.exe</text>

      <text x="0" y="40" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">File Size:</text>
      <text x="140" y="40" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">1,842 KB</text>

      <text x="0" y="66" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Shannon Entropy:</text>
      <text x="140" y="66" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">7.84 (Packed/Encrypted)</text>

      <text x="0" y="92" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">PE Subsystem:</text>
      <text x="140" y="92" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">IMAGE_SUBSYSTEM_WINDOWS_GUI</text>

      <text x="0" y="118" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Authenticode Cert:</text>
      <text x="140" y="118" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">UNSIGNED (Anomaly)</text>

      <text x="0" y="144" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Suspicious Imports:</text>
      <text x="140" y="144" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="11">VirtualAllocEx, WriteProcessMemory</text>
    </g>

    <line x1="20" y1="220" x2="300" y2="220" stroke="#251b36" stroke-width="1"/>
    
    <text x="20" y="244" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">XGBOOST MODEL INFERENCE</text>
    <rect x="20" y="256" width="280" height="8" rx="4" fill="#201730"/>
    <rect x="20" y="256" width="275" height="8" rx="4" fill="url(#redGrad)"/>
    <text x="20" y="284" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11">Model: 31-Feature TreeExplainer</text>
    <text x="240" y="284" fill="#a855f7" font-family="'JetBrains Mono', monospace" font-size="11">p=0.984</text>
  </g>

  <!-- Right: SHAP Waterfall Attribution Chart -->
  <g transform="translate(372, 130)">
    <rect width="396" height="318" rx="10" fill="#120f1c" stroke="#251b36" stroke-width="1"/>
    <text x="20" y="28" fill="#c084fc" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">SHAP WATERFALL ATTRIBUTION (WHY MALICIOUS?)</text>
    <text x="20" y="46" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="10">Features pushing prediction toward Malicious (Red) vs Benign (Blue)</text>

    <!-- SHAP Bar 1 -->
    <g transform="translate(20, 68)">
      <text x="0" y="14" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">section_entropy > 7.5</text>
      <rect x="180" y="2" width="140" height="18" rx="3" fill="url(#redGrad)"/>
      <text x="328" y="16" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">+0.42</text>
    </g>

    <!-- SHAP Bar 2 -->
    <g transform="translate(20, 104)">
      <text x="0" y="14" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">missing_authenticode</text>
      <rect x="180" y="2" width="105" height="18" rx="3" fill="url(#redGrad)"/>
      <text x="295" y="16" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">+0.31</text>
    </g>

    <!-- SHAP Bar 3 -->
    <g transform="translate(20, 140)">
      <text x="0" y="14" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">virtual_raw_size_diff</text>
      <rect x="180" y="2" width="85" height="18" rx="3" fill="url(#redGrad)"/>
      <text x="275" y="16" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">+0.26</text>
    </g>

    <!-- SHAP Bar 4 -->
    <g transform="translate(20, 176)">
      <text x="0" y="14" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">injection_api_calls</text>
      <rect x="180" y="2" width="65" height="18" rx="3" fill="url(#redGrad)"/>
      <text x="255" y="16" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">+0.19</text>
    </g>

    <!-- SHAP Bar 5 (Negative / Pushes benign) -->
    <g transform="translate(20, 212)">
      <text x="0" y="14" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">standard_gui_subsystem</text>
      <rect x="130" y="2" width="50" height="18" rx="3" fill="url(#cyanGrad)"/>
      <text x="75" y="16" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">-0.14</text>
    </g>

    <!-- Summary Box -->
    <rect x="20" y="254" width="356" height="46" rx="6" fill="#1b1528" stroke="#36254e" stroke-width="1"/>
    <text x="32" y="274" fill="#e9d5ff" font-family="'Inter', sans-serif" font-size="11" font-weight="600">Explainability Summary for SOC Analyst:</text>
    <text x="32" y="290" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="10">High entropy + process injection imports account for 74% of the malware signal.</text>
  </g>
</svg>"""

with open(os.path.join(output_dir, "threatvision.svg"), "w", encoding="utf-8") as f:
    f.write(svg_threatvision)

# 3. DevRescue AI (Multi-Agent Bug Triager & Repair)
svg_devrescue = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="drBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080e14"/>
      <stop offset="100%" stop-color="#0f1a26"/>
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#drBg)"/>
  <rect width="800" height="480" rx="16" fill="none" stroke="#1d3047" stroke-width="1.5"/>

  <!-- Window Header -->
  <rect width="800" height="44" rx="16" fill="#09121c"/>
  <rect y="43" width="800" height="1" fill="#1b2a3d"/>
  <circle cx="28" cy="22" r="5.5" fill="#ef4444"/>
  <circle cx="46" cy="22" r="5.5" fill="#eab308"/>
  <circle cx="64" cy="22" r="5.5" fill="#22c55e"/>

  <rect x="220" y="10" width="360" height="24" rx="6" fill="#101d2c" stroke="#223752" stroke-width="1"/>
  <text x="245" y="26" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">https://dev-rescue-ai.vercel.app [LIVE]</text>
  <circle cx="232" cy="22" r="3" fill="#22c55e"/>

  <!-- Top Info Strip -->
  <g transform="translate(32, 64)">
    <text x="0" y="22" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="700">DevRescue AI // Autonomous Bug Repair</text>
    <text x="0" y="42" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="12">Multi-Agent System &bull; NVIDIA Nemotron LLM &bull; AST Syntax Parser &bull; Automated PR Generation</text>

    <!-- Multi-Agent Badge -->
    <rect x="530" y="4" width="206" height="40" rx="8" fill="#102538" stroke="#38bdf8" stroke-width="1"/>
    <text x="548" y="24" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">AGENT STATE: IDLE</text>
    <text x="548" y="38" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="10">4 Orchestrated Micro-Agents</text>
  </g>

  <!-- Multi-Agent Pipeline Strip -->
  <g transform="translate(32, 126)">
    <rect width="736" height="54" rx="8" fill="#0c1622" stroke="#1d3047" stroke-width="1"/>
    
    <!-- Step 1 -->
    <rect x="16" y="12" width="160" height="30" rx="6" fill="#12253b"/>
    <circle cx="30" cy="27" r="4" fill="#22c55e"/>
    <text x="42" y="31" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11" font-weight="600">1. Log Ingestor</text>

    <text x="186" y="32" fill="#38bdf8" font-size="14">&rarr;</text>

    <!-- Step 2 -->
    <rect x="204" y="12" width="160" height="30" rx="6" fill="#12253b"/>
    <circle cx="218" cy="27" r="4" fill="#22c55e"/>
    <text x="230" y="31" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11" font-weight="600">2. AST Triager</text>

    <text x="374" y="32" fill="#38bdf8" font-size="14">&rarr;</text>

    <!-- Step 3 -->
    <rect x="392" y="12" width="160" height="30" rx="6" fill="#163352" stroke="#38bdf8" stroke-width="1"/>
    <circle cx="406" cy="27" r="4" fill="#38bdf8"/>
    <text x="418" y="31" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="11" font-weight="700">3. Nemotron LLM</text>

    <text x="562" y="32" fill="#38bdf8" font-size="14">&rarr;</text>

    <!-- Step 4 -->
    <rect x="580" y="12" width="140" height="30" rx="6" fill="#12253b"/>
    <circle cx="594" cy="27" r="4" fill="#22c55e"/>
    <text x="606" y="31" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11" font-weight="600">4. GitHub PR</text>
  </g>

  <!-- Code Patch Diff View -->
  <g transform="translate(32, 196)">
    <rect width="736" height="252" rx="10" fill="#09111c" stroke="#1d3047" stroke-width="1"/>
    <rect width="736" height="32" rx="10" fill="#0f1c2d"/>
    <text x="20" y="21" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">PATCH // src/controllers/auth.controller.ts (Automated Bug Repair)</text>

    <!-- Code line 1 -->
    <text x="20" y="58" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="12">42 |  export async function verifyToken(req: Request, res: Response) {</text>

    <!-- Line 2 (Vulnerable Code in Red) -->
    <rect x="14" y="68" width="708" height="26" fill="#3b111a"/>
    <text x="20" y="85" fill="#f87171" font-family="'JetBrains Mono', monospace" font-size="12">-       const token = req.headers['authorization']; // Unsanitized AST Token</text>

    <!-- Line 3 (Repaired Code in Green) -->
    <rect x="14" y="98" width="708" height="26" fill="#0f3322"/>
    <text x="20" y="115" fill="#4ade80" font-family="'JetBrains Mono', monospace" font-size="12">+       const token = sanitizeBearerToken(req.headers['authorization'] ?? '');</text>

    <!-- Line 4 -->
    <text x="20" y="145" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="12">44 |      if (!token) return res.status(401).json({ error: 'Unauthorized' });</text>
    <text x="20" y="170" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="12">45 |      const payload = await jwtService.verify(token);</text>

    <!-- Footer Bar -->
    <rect x="14" y="196" width="708" height="42" rx="6" fill="#132338"/>
    <text x="28" y="222" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11" font-weight="600">Verified by Test Suite:</text>
    <text x="170" y="222" fill="#22c55e" font-family="'JetBrains Mono', monospace" font-size="11">14 PASSING &bull; 0 REGRESSIONS</text>
    <rect x="580" y="204" width="130" height="26" rx="4" fill="#38bdf8"/>
    <text x="598" y="221" fill="#090b0e" font-family="'Inter', sans-serif" font-size="11" font-weight="700">DEPLOYED PR ↗</text>
  </g>
</svg>"""

with open(os.path.join(output_dir, "devrescue-ai.svg"), "w", encoding="utf-8") as f:
    f.write(svg_devrescue)

# 4. BhuSetu (Geospatial GIS Land Management)
svg_bhusetu = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bsBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1210"/>
      <stop offset="100%" stop-color="#10221c"/>
    </linearGradient>
    <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c1815"/>
      <stop offset="100%" stop-color="#142b22"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#bsBg)"/>
  <rect width="800" height="480" rx="16" fill="none" stroke="#234a3b" stroke-width="1.5"/>

  <!-- Window Header -->
  <rect width="800" height="44" rx="16" fill="#0b1713"/>
  <rect y="43" width="800" height="1" fill="#19362b"/>
  <circle cx="28" cy="22" r="5.5" fill="#ef4444"/>
  <circle cx="46" cy="22" r="5.5" fill="#eab308"/>
  <circle cx="64" cy="22" r="5.5" fill="#22c55e"/>

  <rect x="220" y="10" width="360" height="24" rx="6" fill="#12261e" stroke="#244a3b" stroke-width="1"/>
  <text x="245" y="26" fill="#34d399" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">BhuSetu // National GIS Cadastral Engine</text>
  <circle cx="234" cy="22" r="3" fill="#10b981"/>

  <!-- Top Title Strip -->
  <g transform="translate(32, 64)">
    <text x="0" y="22" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="700">BhuSetu &mdash; National Geospatial Land GIS</text>
    <text x="0" y="42" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="12">Next.js &bull; MapLibre GL JS Vector Tiles &bull; PostGIS Spatial Queries &bull; MinIO S3 Docs</text>

    <!-- Status pill -->
    <rect x="540" y="4" width="196" height="40" rx="8" fill="#133327" stroke="#34d399" stroke-width="1"/>
    <text x="556" y="24" fill="#34d399" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">POSTGIS SPATIAL</text>
    <text x="556" y="38" fill="#a7f3d0" font-family="'Inter', sans-serif" font-size="10">Vector Boundary Verified</text>
  </g>

  <!-- Left: Vector Map Canvas Mockup -->
  <g transform="translate(32, 130)">
    <rect width="430" height="318" rx="10" fill="url(#mapGrad)" stroke="#1d4234" stroke-width="1"/>
    
    <!-- Map Grid Lines -->
    <path d="M 0,60 L 430,60 M 0,120 L 430,120 M 0,180 L 430,180 M 0,240 L 430,240" stroke="#16382b" stroke-width="1" stroke-dasharray="4"/>
    <path d="M 80,0 L 80,318 M 160,0 L 160,318 M 240,0 L 240,318 M 320,0 L 320,318" stroke="#16382b" stroke-width="1" stroke-dasharray="4"/>

    <!-- Cadastral Parcels Polygons -->
    <polygon points="60,80 170,50 210,130 90,150" fill="#134e38" fill-opacity="0.4" stroke="#10b981" stroke-width="1.5"/>
    <text x="110" y="105" fill="#34d399" font-family="'JetBrains Mono', monospace" font-size="10">P-104</text>

    <polygon points="175,52 310,40 330,120 215,128" fill="#134e38" fill-opacity="0.3" stroke="#10b981" stroke-width="1.5"/>
    <text x="245" y="90" fill="#34d399" font-family="'JetBrains Mono', monospace" font-size="10">P-105</text>

    <!-- Selected Active Parcel with Glow -->
    <polygon points="95,155 230,135 270,260 120,275" fill="#047857" fill-opacity="0.6" stroke="#34d399" stroke-width="2.5"/>
    <circle cx="180" cy="200" r="4" fill="#ffffff"/>
    <text x="145" y="220" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">PARCEL #4409</text>
    <text x="155" y="235" fill="#a7f3d0" font-family="'JetBrains Mono', monospace" font-size="10">14,250 m²</text>

    <polygon points="235,140 360,130 390,240 275,255" fill="#134e38" fill-opacity="0.3" stroke="#10b981" stroke-width="1.5"/>
    <text x="310" y="195" fill="#34d399" font-family="'JetBrains Mono', monospace" font-size="10">P-107</text>

    <!-- Map Zoom Controls -->
    <rect x="380" y="20" width="30" height="60" rx="4" fill="#0d241c" stroke="#244f3e" stroke-width="1"/>
    <text x="390" y="42" fill="#ffffff" font-size="16" font-weight="700">+</text>
    <line x1="380" y1="50" x2="410" y2="50" stroke="#244f3e"/>
    <text x="392" y="70" fill="#ffffff" font-size="16" font-weight="700">&minus;</text>
  </g>

  <!-- Right: Parcel Details & Compensation HUD -->
  <g transform="translate(480, 130)">
    <rect width="288" height="318" rx="10" fill="#0f221b" stroke="#1d4234" stroke-width="1"/>
    <text x="20" y="28" fill="#34d399" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">PARCEL AUDIT // GUJ-AHM-4409</text>
    
    <g transform="translate(20, 52)">
      <text x="0" y="14" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Cadastral Area:</text>
      <text x="130" y="14" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">14,250 sq. meters</text>

      <text x="0" y="40" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Survey Number:</text>
      <text x="130" y="40" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">Block 102/A</text>

      <text x="0" y="66" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Spatial Validity:</text>
      <text x="130" y="66" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">100% (Topology OK)</text>

      <text x="0" y="92" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">MinIO Deeds:</text>
      <text x="130" y="92" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">4 PDFs Indexed</text>
    </g>

    <line x1="20" y1="180" x2="268" y2="180" stroke="#1b3d30" stroke-width="1"/>

    <text x="20" y="206" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">STATUTORY COMPENSATION</text>
    <rect x="20" y="218" width="248" height="42" rx="6" fill="#14362a" stroke="#255944" stroke-width="1"/>
    <text x="32" y="244" fill="#34d399" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="800">&#8377; 4,82,50,000</text>
    
    <text x="20" y="285" fill="#a7f3d0" font-family="'Inter', sans-serif" font-size="10">Automated Direct Benefit Calculation</text>
  </g>
</svg>"""

with open(os.path.join(output_dir, "bhusetu.svg"), "w", encoding="utf-8") as f:
    f.write(svg_bhusetu)

# 5. AssetFlow (Enterprise Asset Management ERP)
svg_assetflow = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="afBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c0e14"/>
      <stop offset="100%" stop-color="#161a26"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#afBg)"/>
  <rect width="800" height="480" rx="16" fill="none" stroke="#262f45" stroke-width="1.5"/>

  <!-- Window Header -->
  <rect width="800" height="44" rx="16" fill="#0f111a"/>
  <rect y="43" width="800" height="1" fill="#202738"/>
  <circle cx="28" cy="22" r="5.5" fill="#ef4444"/>
  <circle cx="46" cy="22" r="5.5" fill="#eab308"/>
  <circle cx="64" cy="22" r="5.5" fill="#22c55e"/>

  <rect x="220" y="10" width="360" height="24" rx="6" fill="#171c2c" stroke="#28334d" stroke-width="1"/>
  <text x="245" y="26" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">AssetFlow ERP // Odoo Hackathon Finalist</text>
  <circle cx="234" cy="22" r="3" fill="#38bdf8"/>

  <!-- Top Title Strip -->
  <g transform="translate(32, 64)">
    <text x="0" y="22" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="700">AssetFlow &mdash; Enterprise Asset &amp; Resource ERP</text>
    <text x="0" y="42" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="12">Team Terminal &bull; Clean Architecture &bull; Finite State Machines &bull; Role-Based Access Control</text>

    <!-- Badge -->
    <rect x="520" y="4" width="216" height="40" rx="8" fill="#162238" stroke="#38bdf8" stroke-width="1"/>
    <text x="536" y="24" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">ODOO HACKATHON</text>
    <text x="536" y="38" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="10">Enterprise Finalist Prototype</text>
  </g>

  <!-- State Machine Flow Strip -->
  <g transform="translate(32, 126)">
    <rect width="736" height="54" rx="8" fill="#111624" stroke="#232d45" stroke-width="1"/>
    
    <rect x="16" y="12" width="130" height="30" rx="6" fill="#172033"/>
    <text x="36" y="31" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">1. Draft Request</text>

    <text x="156" y="32" fill="#38bdf8" font-size="14">&rarr;</text>

    <rect x="176" y="12" width="140" height="30" rx="6" fill="#1a2740" stroke="#38bdf8" stroke-width="1"/>
    <text x="194" y="31" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="11" font-weight="700">2. RBAC Approval</text>

    <text x="326" y="32" fill="#38bdf8" font-size="14">&rarr;</text>

    <rect x="346" y="12" width="140" height="30" rx="6" fill="#172033"/>
    <text x="366" y="31" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">3. Active Allocation</text>

    <text x="496" y="32" fill="#38bdf8" font-size="14">&rarr;</text>

    <rect x="516" y="12" width="120" height="30" rx="6" fill="#172033"/>
    <text x="536" y="31" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">4. Maintenance</text>

    <text x="646" y="32" fill="#38bdf8" font-size="14">&rarr;</text>

    <rect x="666" y="12" width="54" height="30" rx="6" fill="#172033"/>
    <text x="674" y="31" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">End</text>
  </g>

  <!-- Asset Table View -->
  <g transform="translate(32, 196)">
    <rect width="736" height="252" rx="10" fill="#101420" stroke="#212a40" stroke-width="1"/>
    <rect width="736" height="34" rx="10" fill="#151a2b"/>
    
    <text x="24" y="22" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">ASSET ID</text>
    <text x="150" y="22" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">DESCRIPTION</text>
    <text x="370" y="22" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">DEPARTMENT</text>
    <text x="520" y="22" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">LIFECYCLE STATE</text>
    <text x="660" y="22" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">ACTION</text>

    <!-- Row 1 -->
    <text x="24" y="62" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11">AST-9901</text>
    <text x="150" y="62" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11">Dell Dual RTX 4090 AI Cluster</text>
    <text x="370" y="62" fill="#cbd5e1" font-family="'Inter', sans-serif" font-size="11">AI Systems Lab</text>
    <rect x="520" y="48" width="90" height="20" rx="4" fill="#163828"/>
    <text x="532" y="62" fill="#22c55e" font-family="'Inter', sans-serif" font-size="10" font-weight="700">RESERVED</text>
    <text x="660" y="62" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="11">Inspect ↗</text>

    <!-- Row 2 -->
    <text x="24" y="100" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11">AST-8840</text>
    <text x="150" y="100" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11">Cisco Catalyst 48-Port Switch</text>
    <text x="370" y="100" fill="#cbd5e1" font-family="'Inter', sans-serif" font-size="11">Infrastructure</text>
    <rect x="520" y="86" width="105" height="20" rx="4" fill="#3b2d14"/>
    <text x="530" y="100" fill="#eab308" font-family="'Inter', sans-serif" font-size="10" font-weight="700">MAINTENANCE</text>
    <text x="660" y="100" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="11">Inspect ↗</text>

    <!-- Row 3 -->
    <text x="24" y="138" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11">AST-7721</text>
    <text x="150" y="138" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11">MacBook Pro M3 Max (36GB)</text>
    <text x="370" y="138" fill="#cbd5e1" font-family="'Inter', sans-serif" font-size="11">Engineering</text>
    <rect x="520" y="124" width="85" height="20" rx="4" fill="#162e45"/>
    <text x="532" y="138" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="10" font-weight="700">ALLOCATED</text>
    <text x="660" y="138" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="11">Inspect ↗</text>

    <!-- Row 4 -->
    <text x="24" y="176" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11">AST-6612</text>
    <text x="150" y="176" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11">Ubiquiti UniFi AP Enterprise</text>
    <text x="370" y="176" fill="#cbd5e1" font-family="'Inter', sans-serif" font-size="11">Adani Campus</text>
    <rect x="520" y="162" width="90" height="20" rx="4" fill="#163828"/>
    <text x="532" y="176" fill="#22c55e" font-family="'Inter', sans-serif" font-size="10" font-weight="700">AVAILABLE</text>
    <text x="660" y="176" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="11">Inspect ↗</text>
  </g>
</svg>"""

with open(os.path.join(output_dir, "assetflow.svg"), "w", encoding="utf-8") as f:
    f.write(svg_assetflow)

# 6. SafeSphere (Women's Safety & SOS Telemetry)
svg_safesphere = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="ssBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#140b0e"/>
      <stop offset="100%" stop-color="#241117"/>
    </linearGradient>
    <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#f43f5e" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#ssBg)"/>
  <rect width="800" height="480" rx="16" fill="none" stroke="#4a1d27" stroke-width="1.5"/>

  <!-- Window Header -->
  <rect width="800" height="44" rx="16" fill="#180e12"/>
  <rect y="43" width="800" height="1" fill="#33161e"/>
  <circle cx="28" cy="22" r="5.5" fill="#ef4444"/>
  <circle cx="46" cy="22" r="5.5" fill="#eab308"/>
  <circle cx="64" cy="22" r="5.5" fill="#22c55e"/>

  <rect x="220" y="10" width="360" height="24" rx="6" fill="#261218" stroke="#4a1e27" stroke-width="1"/>
  <text x="245" y="26" fill="#fb7185" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">https://koushik2024-code.github.io/TechFusion-v2v/</text>
  <circle cx="234" cy="22" r="3" fill="#f43f5e"/>

  <!-- Top Title Strip -->
  <g transform="translate(32, 64)">
    <text x="0" y="22" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="700">SafeSphere &mdash; Rapid SOS &amp; Safety Telemetry</text>
    <text x="0" y="42" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="12">TechFusion Hackathon &bull; Web Audio Synthesizer Siren &bull; Web Speech Keyword &bull; Live Geolocation</text>

    <!-- Beacon Status -->
    <rect x="540" y="4" width="196" height="40" rx="8" fill="#38101a" stroke="#f43f5e" stroke-width="1"/>
    <text x="556" y="24" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">SOS RADAR ACTIVE</text>
    <text x="556" y="38" fill="#fda4af" font-family="'Inter', sans-serif" font-size="10">Emergency Telemetry Engaged</text>
  </g>

  <!-- Left: GPS Radar Map with Beacon -->
  <g transform="translate(32, 130)">
    <rect width="420" height="318" rx="10" fill="#1a0c10" stroke="#3d1620" stroke-width="1"/>
    
    <!-- Radar Rings -->
    <circle cx="210" cy="159" r="130" fill="none" stroke="#4a1a24" stroke-width="1" stroke-dasharray="3"/>
    <circle cx="210" cy="159" r="90" fill="none" stroke="#4a1a24" stroke-width="1" stroke-dasharray="3"/>
    <circle cx="210" cy="159" r="50" fill="none" stroke="#642230" stroke-width="1"/>

    <!-- Crosshair Lines -->
    <line x1="210" y1="20" x2="210" y2="298" stroke="#3d1620" stroke-width="1"/>
    <line x1="20" y1="159" x2="400" y2="159" stroke="#3d1620" stroke-width="1"/>

    <!-- Glowing SOS Beacon -->
    <circle cx="210" cy="159" r="45" fill="url(#beaconGlow)"/>
    <circle cx="210" cy="159" r="8" fill="#f43f5e"/>
    <circle cx="210" cy="159" r="3" fill="#ffffff"/>

    <text x="210" y="195" text-anchor="middle" fill="#f43f5e" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">ONE-TOUCH SOS BEACON</text>
    <text x="210" y="210" text-anchor="middle" fill="#fda4af" font-family="'JetBrains Mono', monospace" font-size="10">23.0225° N, 72.5714° E</text>
  </g>

  <!-- Right: Telemetry Controls & Audio Status -->
  <g transform="translate(470, 130)">
    <rect width="298" height="318" rx="10" fill="#1c0d12" stroke="#3d1620" stroke-width="1"/>
    <text x="20" y="28" fill="#fb7185" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">INCIDENT DISPATCH CONTROLS</text>

    <g transform="translate(20, 52)">
      <text x="0" y="14" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Synthesized Siren:</text>
      <text x="140" y="14" fill="#22c55e" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">880Hz DUAL TONE</text>

      <text x="0" y="44" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Voice Keyword:</text>
      <text x="140" y="44" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">"HELP" / "EMERGENCY"</text>

      <text x="0" y="74" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">GPS Accuracy:</text>
      <text x="140" y="74" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11">&plusmn;3.2 meters</text>

      <text x="0" y="104" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">SMS Notification:</text>
      <text x="140" y="104" fill="#22c55e" font-family="'JetBrains Mono', monospace" font-size="11">3 CONTACTS DISPATCHED</text>
    </g>

    <line x1="20" y1="184" x2="278" y2="184" stroke="#33141c" stroke-width="1"/>

    <text x="20" y="210" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">AUDIO WAVEFORM TELEMETRY</text>
    <!-- Waveform bars -->
    <g transform="translate(20, 224)">
      <rect x="0" y="10" width="8" height="24" rx="2" fill="#f43f5e"/>
      <rect x="14" y="4" width="8" height="36" rx="2" fill="#f43f5e"/>
      <rect x="28" y="14" width="8" height="16" rx="2" fill="#f43f5e"/>
      <rect x="42" y="2" width="8" height="40" rx="2" fill="#f43f5e"/>
      <rect x="56" y="8" width="8" height="28" rx="2" fill="#f43f5e"/>
      <rect x="70" y="16" width="8" height="12" rx="2" fill="#f43f5e"/>
      <rect x="84" y="0" width="8" height="44" rx="2" fill="#f43f5e"/>
      <rect x="98" y="12" width="8" height="20" rx="2" fill="#f43f5e"/>
      <rect x="112" y="6" width="8" height="32" rx="2" fill="#f43f5e"/>
      <rect x="126" y="14" width="8" height="16" rx="2" fill="#f43f5e"/>
    </g>

    <rect x="20" y="280" width="258" height="26" rx="5" fill="#f43f5e"/>
    <text x="65" y="297" fill="#ffffff" font-family="'Inter', sans-serif" font-size="11" font-weight="700">EXPLORE TECHFUSION DEMO ↗</text>
  </g>
</svg>"""

with open(os.path.join(output_dir, "safesphere.svg"), "w", encoding="utf-8") as f:
    f.write(svg_safesphere)

# 7. Air Pollution & Environmental AQI Intelligence
svg_aqi = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="aqiBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09121a"/>
      <stop offset="100%" stop-color="#112333"/>
    </linearGradient>
    <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.0"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#aqiBg)"/>
  <rect width="800" height="480" rx="16" fill="none" stroke="#1e3a54" stroke-width="1.5"/>

  <!-- Window Header -->
  <rect width="800" height="44" rx="16" fill="#0c1824"/>
  <rect y="43" width="800" height="1" fill="#1c364e"/>
  <circle cx="28" cy="22" r="5.5" fill="#ef4444"/>
  <circle cx="46" cy="22" r="5.5" fill="#eab308"/>
  <circle cx="64" cy="22" r="5.5" fill="#22c55e"/>

  <rect x="220" y="10" width="360" height="24" rx="6" fill="#14273b" stroke="#25486d" stroke-width="1"/>
  <text x="245" y="26" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">Smart City Environmental AQI Monitor</text>
  <circle cx="234" cy="22" r="3" fill="#38bdf8"/>

  <!-- Top Title Strip -->
  <g transform="translate(32, 64)">
    <text x="0" y="22" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="700">Air Pollution &amp; AQI Intelligence</text>
    <text x="0" y="42" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="12">IoT Telemetry &bull; Predictive Smog Analytics &bull; National Hackathon Finalist System</text>

    <!-- Finalist Badge -->
    <rect x="520" y="4" width="216" height="40" rx="8" fill="#15314a" stroke="#38bdf8" stroke-width="1"/>
    <text x="536" y="24" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">HACKATHON FINALIST</text>
    <text x="536" y="38" fill="#bae6fd" font-family="'Inter', sans-serif" font-size="10">Atmospheric AI Model</text>
  </g>

  <!-- Left: Circular AQI Meter -->
  <g transform="translate(32, 130)">
    <rect width="280" height="318" rx="10" fill="#0e1d2c" stroke="#1d3b57" stroke-width="1"/>
    <text x="20" y="28" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">REAL-TIME AQI INDEX</text>

    <circle cx="140" cy="140" r="70" fill="none" stroke="#173147" stroke-width="10"/>
    <circle cx="140" cy="140" r="70" fill="none" stroke="#38bdf8" stroke-width="10" stroke-dasharray="440" stroke-dashoffset="140" stroke-linecap="round"/>

    <text x="140" y="135" text-anchor="middle" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800">142</text>
    <text x="140" y="160" text-anchor="middle" fill="#38bdf8" font-family="'Inter', sans-serif" font-size="11" font-weight="700">MODERATE (AQI)</text>

    <!-- Breakdown items -->
    <g transform="translate(20, 230)">
      <text x="0" y="14" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">PM 2.5:</text>
      <text x="160" y="14" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">52.4 &mu;g/m&sup3;</text>

      <text x="0" y="40" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">PM 10:</text>
      <text x="160" y="40" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11">98.1 &mu;g/m&sup3;</text>

      <text x="0" y="66" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">NO2 / CO:</text>
      <text x="160" y="66" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11">0.42 ppm (Normal)</text>
    </g>
  </g>

  <!-- Right: 24h Predictive Trend Chart -->
  <g transform="translate(332, 130)">
    <rect width="436" height="318" rx="10" fill="#0e1d2c" stroke="#1d3b57" stroke-width="1"/>
    <text x="20" y="28" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">24-HOUR FORECAST &amp; POLLUTION TREND</text>
    <text x="20" y="46" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="10">ARIMA / Prophet model projection against meteorological telemetry</text>

    <!-- Chart Grid -->
    <path d="M 40,80 L 400,80 M 40,140 L 400,140 M 40,200 L 400,200 M 40,260 L 400,260" stroke="#173147" stroke-width="1"/>
    
    <!-- Y-axis labels -->
    <text x="15" y="84" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="9">200</text>
    <text x="15" y="144" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="9">150</text>
    <text x="15" y="204" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="9">100</text>
    <text x="15" y="264" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="9">50</text>

    <!-- Forecast Curve & Area -->
    <path d="M 40,210 Q 120,180 180,120 T 280,160 T 400,90 L 400,260 L 40,260 Z" fill="url(#curveGrad)"/>
    <path d="M 40,210 Q 120,180 180,120 T 280,160 T 400,90" fill="none" stroke="#38bdf8" stroke-width="2.5"/>

    <circle cx="180" cy="120" r="4" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
    <text x="145" y="110" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="10">Peak Smog: 182</text>

    <!-- X-axis labels -->
    <text x="40" y="280" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="10">00:00</text>
    <text x="120" y="280" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="10">06:00</text>
    <text x="210" y="280" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="10">12:00</text>
    <text x="300" y="280" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="10">18:00</text>
    <text x="380" y="280" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="10">24:00</text>
  </g>
</svg>"""

with open(os.path.join(output_dir, "aqi-intelligence.svg"), "w", encoding="utf-8") as f:
    f.write(svg_aqi)

print("Successfully generated all 7 project SVG mockups in", output_dir)
