/**
 * Rudra Patel Portfolio - Main Application Logic
 * Elevated to Micheel / Gr8r Studio Editorial Standard
 * Includes: Project Filtering, 3D Tilt Physics,
 * Architecture Deep-Dive Modal, Theme Color Switcher, and Confetti.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFiltering();
  initCardTiltPhysics();
  initProjectModal();
  initThemeSwitcher();
  initContactForm();
  initScrollSpy();
  initMobileMenu();
  setupConfetti();
});

/* --------------------------------------------------------------------------
   Project Architecture Deep Dive Database
   -------------------------------------------------------------------------- */
const PROJECT_DETAILS = {
  "devrescue ai": {
    badge: "AUTONOMOUS CYBER-CONSOLE // 01",
    title: "DevRescue AI",
    tagline: "Autonomous Bug Investigation & Repair Platform",
    desc: "DevRescue AI is an autonomous cyber-console designed for continuous software reliability. When repository errors occur, multi-agent workers ingest logs, extract relevant syntax trees via AST analysis, and query NVIDIA Nemotron-3.5 for vulnerability remediation. Simultaneously, an XGBoost classification engine computes predictive code risk scores. Upon validating fixes, the platform automatically drafts, tests, and dispatches authenticated GitHub pull requests for developer review.",
    tags: ["React 19", "FastAPI", "NVIDIA Nemotron-3.5", "XGBoost", "Docker", "GitHub API", "Multi-Agent"],
    links: [
      { text: "Live Demo Console ↗", href: "https://dev-rescue-ai.vercel.app" },
      { text: "GitHub Repository ↗", href: "https://github.com/RudraPatel217/DevRescue-AI-" }
    ]
  },
  "bhusetu": {
    badge: "GEOSPATIAL INFRASTRUCTURE // 02",
    title: "BhuSetu",
    tagline: "National Land Acquisition & Geospatial Management System",
    desc: "BhuSetu is a high-throughput geospatial platform built to eliminate administrative friction in national infrastructure land acquisition. Features include vector tile boundary rendering with MapLibre GL JS, PostgreSQL/PostGIS spatial intersection calculations, statutory compensation engines, and zero-ORM FastAPI asynchronous services. High-resolution cadastral survey documents are securely persisted via local MinIO S3 object buckets.",
    tags: ["Next.js", "React 19", "MapLibre GL", "PostGIS", "Supabase", "MinIO S3", "Docker", "FastAPI"],
    links: [
      { text: "Inspect Repository ↗", href: "https://github.com/Jenil-Mistry/BhuSetu" }
    ]
  },
  "threatvision": {
    badge: "EXPLAINABLE AI (XAI) // 03",
    title: "ThreatVision",
    tagline: "Explainable AI Malware Detection Platform",
    desc: "Developed for the Tech Eximius Hackathon under the motto: 'Don't just detect threats. See inside them.' Unlike black-box malware detectors, ThreatVision combines high-accuracy XGBoost binary telemetry classification with SHAP (SHapley Additive exPlanations) waterfall feature attributions. Engineers and security analysts receive transparent visual breakdowns of suspicious opcodes, entropy anomalies, and MITRE ATT&CK vector alignments.",
    tags: ["FastAPI", "React 18", "Vite", "XGBoost", "SHAP", "Docker", "Tailwind CSS"],
    links: []
  },
  "domain intelligence & seo auditor": {
    badge: "FLAGSHIP DEPLOYMENT // 01",
    title: "Domain Intelligence & SEO Auditor",
    tagline: "End-to-End Website Diagnostic & DOM Inspection Suite",
    desc: "A live full-stack website crawler and SEO diagnostic product auditing critical meta tags, canonical headers, Open Graph schemas, JSON-LD structured data, and security headers with JavaScript-rendered DOM inspection and one-click forensic Excel export.",
    tags: ["Python", "Streamlit", "DOM Crawler", "SEO Diagnostics", "Security Headers", "Excel Export"],
    links: [
      { text: "Live Streamlit App ↗", href: "https://website-analyser-rudra.streamlit.app/" },
      { text: "GitHub ↗", href: "https://github.com/RudraPatel217" }
    ]
  },
  "assetflow": {
    badge: "ENTERPRISE ERP // 05",
    title: "AssetFlow",
    tagline: "Enterprise Asset & Resource Management System",
    desc: "Built for the Odoo Hackathon by Team Terminal. AssetFlow unifies physical equipment tracking, room/resource reservations, and cross-department custody audits into a decoupled, clean-architecture ERP. Enforces strict role-based access control (RBAC), finite state machine asset lifecycles, and audit logging to eliminate spreadsheet inefficiencies.",
    tags: ["Enterprise ERP", "Clean Architecture", "RBAC", "State Machines", "Team Terminal"],
    links: [
      { text: "GitHub Repository ↗", href: "https://github.com/Darshilmodi15/odoo-hackathon---AssetFlow" }
    ]
  },
  "techfusion safesphere": {
    badge: "SAFETY & TELEMETRY // 06",
    title: "TechFusion SafeSphere",
    tagline: "Transit Safety & Real-Time Telemetry Dashboard",
    desc: "SafeSphere is an intelligent personal safety dashboard designed for transit and night travel. Combines real-time location telemetry streams with motion-driven routing that maps safe havens. Includes an interactive SOS countdown, a Web Audio dual-tone synthesized alarm siren, and Web Speech API voice guardian triggers.",
    tags: ["Web Audio API", "Web Speech API", "Telemetry Streaming", "Tailwind CSS"],
    links: [
      { text: "Live Deployment ↗", href: "https://koushik2024-code.github.io/TechFusion-v2v/" },
      { text: "GitHub Repository ↗", href: "https://github.com/koushik2024-code/TechFusion-v2v" }
    ]
  },
  "air pollution & aqi intelligence": {
    badge: "DATA SCIENCE & IOT // 07",
    title: "Air Pollution & AQI Intelligence",
    tagline: "Environmental Monitoring & Atmospheric Visualizer",
    desc: "Built an environmental monitoring dashboard synthesizing historical atmospheric parameters and real-time Air Quality Index (AQI) readings. Qualified as a national hackathon finalist by presenting predictive pollution trend visualizers and community advisory metrics.",
    tags: ["Python", "Data Analysis", "Predictive Analytics", "Hackathon Finalist"],
    links: []
  },
  "hackx prototype": {
    badge: "HARDWARE TELEMETRY // 08",
    title: "HackX Prototype",
    tagline: "Environmental & Air Quality Telemetry",
    desc: "An embedded hardware telemetry prototype monitoring environmental particulate matter and atmospheric shifts. Integrates real-time sensor polling, threshold alerting algorithms, and modular reporting dashboards.",
    tags: ["Hardware Telemetry", "IoT", "Particulate Sensors", "HackX 2026"],
    links: []
  }
};

/* --------------------------------------------------------------------------
   Project Detail Modal Logic
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalTagline = document.getElementById('modal-tagline');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalLinks = document.getElementById('modal-links');

  if (!modal) return;

  function openModal(data) {
    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalTagline.textContent = data.tagline;
    modalDesc.textContent = data.desc;

    // Render tags
    modalTags.innerHTML = '';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'case-tag';
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    // Render links
    modalLinks.innerHTML = '';
    if (data.links && data.links.length > 0) {
      data.links.forEach(l => {
        const a = document.createElement('a');
        a.className = 'btn-pill-primary';
        a.href = l.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = l.text;
        modalLinks.appendChild(a);
      });
    } else {
      const infoSpan = document.createElement('span');
      infoSpan.style.color = '#94a3b8';
      infoSpan.style.fontSize = '0.88rem';
      infoSpan.textContent = 'Hackathon Project Milestone';
      modalLinks.appendChild(infoSpan);
    }

    modal.classList.add('open');
    if (window.soundEngine) window.soundEngine.playBlip(720, 0.04);
  }

  function closeModal() {
    modal.classList.remove('open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Attach click listener to project card titles and media previews
  document.querySelectorAll('.project-case-card').forEach(card => {
    const titleElem = card.querySelector('.work-condensed-title, .case-title');
    const mediaElem = card.querySelector('.work-media-stage, .case-media-preview');
    if (!titleElem) return;

    const key = (titleElem.dataset.projectKey || titleElem.textContent).trim().toLowerCase();
    titleElem.style.cursor = 'pointer';
    titleElem.title = 'Click to inspect architectural details';
    titleElem.addEventListener('click', () => {
      if (PROJECT_DETAILS[key]) openModal(PROJECT_DETAILS[key]);
    });

    if (mediaElem) {
      mediaElem.style.cursor = 'pointer';
      mediaElem.title = 'Click to inspect architectural details';
      mediaElem.addEventListener('click', (e) => {
        // Prevent opening modal if clicking mode switch pills
        if (e.target.closest('.preview-mode-switch')) return;
        if (PROJECT_DETAILS[key]) openModal(PROJECT_DETAILS[key]);
      });
    }
  });

  // Wire up media preview mode switchers (e.g. DevRescue real screenshot vs SVG console)
  document.querySelectorAll('.preview-mode-switch .mode-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.imgTarget;
      const newSrc = btn.dataset.src;
      const targetImg = document.getElementById(targetId);
      if (targetImg && newSrc) {
        targetImg.src = newSrc;
        btn.parentElement.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (window.soundEngine) window.soundEngine.playBlip(950, 0.03);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Interactive Theme Accent Color Switcher
   -------------------------------------------------------------------------- */
function initThemeSwitcher() {
  const btn = document.getElementById('theme-color-btn');
  if (!btn) return;

  const themes = ['default', 'emerald', 'violet'];
  let currentIdx = 0;

  btn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % themes.length;
    const selected = themes[currentIdx];

    if (selected === 'default') {
      document.documentElement.removeAttribute('data-theme');
      showToast('🎨 Theme set to Ice Cyan (Default)');
    } else {
      document.documentElement.setAttribute('data-theme', selected);
      showToast(`🎨 Theme set to ${selected.toUpperCase()}`);
    }

    if (window.soundEngine) window.soundEngine.playBlip(800, 0.03);
  });
}

/* --------------------------------------------------------------------------
   Project Filtering
   -------------------------------------------------------------------------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-case-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const categories = card.dataset.category.split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   3D Mouse Tilt Physics on Cards
   -------------------------------------------------------------------------- */
function initCardTiltPhysics() {
  const cards = document.querySelectorAll('.project-case-card, .service-card, .hero-portrait-card, .timeline-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}

/* --------------------------------------------------------------------------
   Contact Form & Toast Notification
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notice');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill out all required fields.');
      return;
    }

    if (window.soundEngine) window.soundEngine.playSuccess();
    if (window.triggerConfetti) window.triggerConfetti();

    showToast(`🚀 Thank you, ${name}! Redirecting to email client...`);

    const mailtoUri = `mailto:rj423513@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
    
    setTimeout(() => {
      window.location.href = mailtoUri;
      form.reset();
    }, 1200);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

window.showToast = showToast;

/* --------------------------------------------------------------------------
   Lightweight Built-In Confetti Cannon
   -------------------------------------------------------------------------- */
function setupConfetti() {
  window.triggerConfetti = function() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#ffffff', '#38bdf8', '#60a5fa', '#1e293b', '#94a3b8'];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        life: 1
      });
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.rSpeed;
        p.life -= 0.015;

        if (p.life > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(p.life, 0);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(render);
      } else {
        canvas.remove();
      }
    }
    render();
  };
}

/* --------------------------------------------------------------------------
   Scroll Spy & Active Nav Highlighting
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Mobile Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isVisible = menu.style.display === 'flex';
    if (isVisible) {
      menu.style.display = '';
    } else {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      menu.style.position = 'absolute';
      menu.style.top = '78px';
      menu.style.left = '0';
      menu.style.width = '100%';
      menu.style.background = 'rgba(14, 18, 26, 0.98)';
      menu.style.backdropFilter = 'blur(20px)';
      menu.style.padding = '24px';
      menu.style.borderRadius = '20px';
      menu.style.border = '1px solid rgba(255, 255, 255, 0.1)';
      menu.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.8)';
    }
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menu.style.display = '';
      }
    });
  });
}
