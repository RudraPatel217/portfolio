/**
 * Rudra Patel Portfolio - Main Application Logic
 * Clean, production-grade modular script
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFiltering();
  initProjectModal();
  initPreviewModeSwitch();
  initCardTiltPhysics();
  initScrollSpy();
  initMobileMenu();
  initContactForm();
  initPortraitTouchToggle();
  initLiveClock();
  setupConfetti();
});

/* --------------------------------------------------------------------------
   Project Architecture Deep Dive Database
   -------------------------------------------------------------------------- */
const PROJECT_DETAILS = {
  "devrescue ai": {
    badge: "AUTONOMOUS CYBER-CONSOLE // 01",
    title: "DevRescue AI",
    tagline: "Autonomous Bug Investigation & Auto-Repair Agent",
    desc: "DevRescue AI is an autonomous engineering console designed for continuous software reliability. When repository errors occur, multi-agent workers ingest logs, extract relevant syntax trees via AST analysis, and query NVIDIA Nemotron-3.5 for vulnerability remediation. Simultaneously, an XGBoost classification engine computes predictive code risk scores. Upon validating fixes, the platform automatically drafts, tests, and dispatches authenticated GitHub pull requests for developer review.",
    tags: ["React 19", "FastAPI", "NVIDIA Nemotron-3.5", "XGBoost", "Docker", "GitHub API", "Multi-Agent"],
    links: [
      { text: "Live Demo Console ↗", href: "https://dev-rescue-ai.vercel.app" },
      { text: "GitHub Repository ↗", href: "https://github.com/RudraPatel217/DevRescue-AI-" }
    ]
  },
  "bhusetu": {
    badge: "GEOSPATIAL INFRASTRUCTURE // 02",
    title: "BhuSetu GIS",
    tagline: "National Land Acquisition & Geospatial Management System",
    desc: "BhuSetu is a high-throughput geospatial platform built to eliminate administrative friction in national infrastructure land acquisition. Features include vector tile boundary rendering with MapLibre GL JS, PostgreSQL/PostGIS spatial intersection calculations, statutory compensation engines, and zero-ORM FastAPI asynchronous services. High-resolution cadastral survey documents are securely persisted via MinIO S3 object buckets.",
    tags: ["Next.js", "React 19", "MapLibre GL", "PostGIS", "Supabase", "MinIO S3", "Docker", "FastAPI"],
    links: [
      { text: "Inspect Repository ↗", href: "https://github.com/Jenil-Mistry/BhuSetu" }
    ]
  },
  "threatvision": {
    badge: "EXPLAINABLE AI (XAI) // 03",
    title: "ThreatVision",
    tagline: "Explainable AI PE Malware Detection Platform",
    desc: "Developed for the Tech Eximius Hackathon under the motto: 'Don't just detect threats. See inside them.' Unlike black-box malware detectors, ThreatVision combines high-accuracy XGBoost binary telemetry classification with SHAP (SHapley Additive exPlanations) waterfall feature attributions. Engineers and security analysts receive transparent visual breakdowns of suspicious opcodes, entropy anomalies, and MITRE ATT&CK vector alignments.",
    tags: ["FastAPI", "React 18", "Vite", "XGBoost", "SHAP", "Docker", "Tailwind CSS"],
    links: [
      { text: "GitHub Repository ↗", href: "https://github.com/RudraPatel217" }
    ]
  },
  "domain intelligence & seo auditor": {
    badge: "AUTOMATED WEBSITE AUDITING // 04",
    title: "Domain Intelligence & SEO Auditor",
    tagline: "End-to-End Website Diagnostic & DOM Inspection Suite",
    desc: "A live full-stack website crawler and SEO diagnostic product auditing critical meta tags, canonical headers, Open Graph schemas, JSON-LD structured data, and security headers with JavaScript-rendered DOM inspection and one-click forensic Excel export.",
    tags: ["Python", "Streamlit", "DOM Crawler", "SEO Diagnostics", "Security Headers", "Excel Export"],
    links: [
      { text: "Live Streamlit App ↗", href: "https://website-analyser-rudra.streamlit.app/" },
      { text: "GitHub Repository ↗", href: "https://github.com/RudraPatel217" }
    ]
  },
  "domain intelligence": {
    badge: "AUTOMATED WEBSITE AUDITING // 04",
    title: "Domain Intelligence & SEO Auditor",
    tagline: "End-to-End Website Diagnostic & DOM Inspection Suite",
    desc: "A live full-stack website crawler and SEO diagnostic product auditing critical meta tags, canonical headers, Open Graph schemas, JSON-LD structured data, and security headers with JavaScript-rendered DOM inspection and one-click forensic Excel export.",
    tags: ["Python", "Streamlit", "DOM Crawler", "SEO Diagnostics", "Security Headers", "Excel Export"],
    links: [
      { text: "Live Streamlit App ↗", href: "https://website-analyser-rudra.streamlit.app/" },
      { text: "GitHub Repository ↗", href: "https://github.com/RudraPatel217" }
    ]
  },
  "assetflow": {
    badge: "ENTERPRISE ERP // 05",
    title: "AssetFlow ERP",
    tagline: "Enterprise Asset & Resource Lifecycle Management System",
    desc: "Built for the Odoo Hackathon by Team Terminal. AssetFlow unifies physical equipment tracking, room/resource reservations, and cross-department custody audits into a decoupled, clean-architecture ERP. Enforces strict role-based access control (RBAC), finite state machine asset lifecycles, and audit logging to eliminate spreadsheet inefficiencies.",
    tags: ["Enterprise ERP", "Clean Architecture", "RBAC", "State Machines", "Team Terminal"],
    links: [
      { text: "GitHub Repository ↗", href: "https://github.com/Darshilmodi15/odoo-hackathon---AssetFlow" }
    ]
  },
  "assetflow erp": {
    badge: "ENTERPRISE ERP // 05",
    title: "AssetFlow ERP",
    tagline: "Enterprise Asset & Resource Lifecycle Management System",
    desc: "Built for the Odoo Hackathon by Team Terminal. AssetFlow unifies physical equipment tracking, room/resource reservations, and cross-department custody audits into a decoupled, clean-architecture ERP. Enforces strict role-based access control (RBAC), finite state machine asset lifecycles, and audit logging to eliminate spreadsheet inefficiencies.",
    tags: ["Enterprise ERP", "Clean Architecture", "RBAC", "State Machines", "Team Terminal"],
    links: [
      { text: "GitHub Repository ↗", href: "https://github.com/Darshilmodi15/odoo-hackathon---AssetFlow" }
    ]
  },
  "techfusion safesphere": {
    badge: "SAFETY & TELEMETRY // 06",
    title: "TechFusion SafeSphere",
    tagline: "Transit Safety & Rapid SOS Telemetry Dashboard",
    desc: "SafeSphere is an intelligent personal safety dashboard designed for transit and night travel. Combines real-time location telemetry streams with motion-driven routing that maps safe havens. Includes an interactive SOS countdown, a Web Audio dual-tone synthesized alarm siren, and Web Speech API voice guardian triggers.",
    tags: ["Web Audio API", "Web Speech API", "Telemetry Streaming", "Tailwind CSS"],
    links: [
      { text: "Live Deployment ↗", href: "https://koushik2024-code.github.io/TechFusion-v2v/" },
      { text: "GitHub Repository ↗", href: "https://github.com/koushik2024-code/TechFusion-v2v" }
    ]
  },
  "safesphere": {
    badge: "SAFETY & TELEMETRY // 06",
    title: "TechFusion SafeSphere",
    tagline: "Transit Safety & Rapid SOS Telemetry Dashboard",
    desc: "SafeSphere is an intelligent personal safety dashboard designed for transit and night travel. Combines real-time location telemetry streams with motion-driven routing that maps safe havens. Includes an interactive SOS countdown, a Web Audio dual-tone synthesized alarm siren, and Web Speech API voice guardian triggers.",
    tags: ["Web Audio API", "Web Speech API", "Telemetry Streaming", "Tailwind CSS"],
    links: [
      { text: "Live Deployment ↗", href: "https://koushik2024-code.github.io/TechFusion-v2v/" },
      { text: "GitHub Repository ↗", href: "https://github.com/koushik2024-code/TechFusion-v2v" }
    ]
  }
};

/* --------------------------------------------------------------------------
   3D Mode Switcher (Real App Screenshot vs 3D Artwork SVG)
   -------------------------------------------------------------------------- */
function initPreviewModeSwitch() {
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
        if (window.soundEngine && typeof window.soundEngine.playBlip === 'function') {
          window.soundEngine.playBlip(950, 0.03);
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3D Mouse Tilt Physics on Cards
   -------------------------------------------------------------------------- */
function initCardTiltPhysics() {
  const cards = document.querySelectorAll('.project-card, .meta-card, .stat-box, .skill-card, .credential-card, .timeline-card, .portrait-frame');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}

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
    if (!data) return;
    modalBadge.textContent = data.badge || 'PROJECT OVERVIEW';
    modalTitle.textContent = data.title;
    modalTagline.textContent = data.tagline;
    modalDesc.textContent = data.desc;

    // Render tags
    modalTags.innerHTML = '';
    (data.tags || []).forEach(tag => {
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
        a.className = 'btn btn-primary';
        a.href = l.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = l.text;
        modalLinks.appendChild(a);
      });
    }

    modal.classList.add('open');
    if (window.soundEngine && typeof window.soundEngine.playBlip === 'function') {
      window.soundEngine.playBlip(720, 0.04);
    }
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

  // Attach click listeners to cards and inspect buttons
  document.querySelectorAll('[data-project-key]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      // Prevent opening if clicking an anchor or mode switch pill inside
      if (e.target.closest('a') || e.target.closest('.preview-mode-switch')) return;
      const key = elem.getAttribute('data-project-key').trim().toLowerCase();
      if (PROJECT_DETAILS[key]) {
        openModal(PROJECT_DETAILS[key]);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Project Filtering Logic
   -------------------------------------------------------------------------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const categories = (card.dataset.category || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      if (window.soundEngine && typeof window.soundEngine.playBlip === 'function') {
        window.soundEngine.playBlip(850, 0.03);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Scroll Spy & Active Nav Highlighting
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = 'home';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 160;
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

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isFlex = menu.style.display === 'flex';
    menu.style.display = isFlex ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.top = '60px';
    menu.style.left = '0';
    menu.style.width = '100%';
    menu.style.background = 'rgba(5, 8, 13, 0.96)';
    menu.style.backdropFilter = 'blur(16px)';
    menu.style.padding = '20px';
    menu.style.borderRadius = '16px';
    menu.style.border = '1px solid rgba(255, 255, 255, 0.1)';
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target) && window.innerWidth <= 560) {
      menu.style.display = 'none';
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 560) {
        menu.style.display = 'none';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Lightweight Built-In Confetti Cannon
   -------------------------------------------------------------------------- */
function setupConfetti() {
  window.triggerConfetti = function () {
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
    const colors = ['#ffffff', '#6fe7ff', '#8f7dff', '#8dffbf', '#f3d38b'];

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
   Direct Mail Component Form Handler (Image 1)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      showToast('Please complete all contact transmission fields.');
      return;
    }

    if (window.triggerConfetti) {
      window.triggerConfetti();
    }

    const mailSubject = encodeURIComponent(`Portfolio Transmission from ${name}`);
    const mailBody = encodeURIComponent(`Hi Rudra,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Portfolio Console.`);
    const mailtoLink = `mailto:rj423513@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    showToast(`Transmission received from ${name}! Opening mail dispatch...`);
    form.reset();

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 700);
  });
}

/* --------------------------------------------------------------------------
   Hero Portrait Touch & Hover Toggle (Zero Cropping)
   -------------------------------------------------------------------------- */
function initPortraitTouchToggle() {
  const frame = document.getElementById('hero-portrait-frame');
  if (!frame) return;

  frame.addEventListener('touchstart', (e) => {
    if (e.target.closest('button, a')) return;
    frame.classList.toggle('touch-active');
    if (window.soundEngine) {
      window.soundEngine.playBlip(820, 0.04);
    }
  }, { passive: true });

  frame.addEventListener('click', (e) => {
    if (e.target.closest('button, a')) return;
    frame.classList.toggle('touch-active');
    if (window.soundEngine) {
      window.soundEngine.playBlip(820, 0.04);
    }
  });
}

/* --------------------------------------------------------------------------
   Live Indian Standard Time (IST) Clock
   -------------------------------------------------------------------------- */
function initLiveClock() {
  const clockEl = document.getElementById('live-ist-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeStr = now.toLocaleTimeString('en-US', options);
    clockEl.innerHTML = `IST &bull; ${timeStr}`;
  }

  update();
  setInterval(update, 1000);
}
