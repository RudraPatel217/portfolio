/**
 * Rudra Patel Portfolio - Interactive Cyber Terminal
 */

document.addEventListener('DOMContentLoaded', () => {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  if (!terminalBody || !terminalInput) return;

  const commands = {
    help: `Available commands:
  <span class="cmd">about</span>       - Learn about Rudra Patel & technical focus
  <span class="cmd">projects</span>    - View featured engineering systems & live links
  <span class="cmd">skills</span>      - Display technical stacks & frameworks
  <span class="cmd">hackathons</span>  - Display hackathons & podium recognitions
  <span class="cmd">contact</span>     - View direct contact channels & social links
  <span class="cmd">resume</span>      - Open professional CV / resume
  <span class="cmd">sudo hire</span>   - Initialize executive interview protocol
  <span class="cmd">clear</span>       - Clear terminal output`,

    about: `<span class="res">Rudra Patel</span> &mdash; Full-Stack & AI Systems Engineer
Location: India | Focus: Autonomous AI Agents, Geospatial Platforms, Enterprise ERPs
Builder of DevRescue AI (NVIDIA Nemotron), BhuSetu (PostGIS GIS), and ThreatVision (XAI).`,

    projects: `Featured Systems:
  1. <a href="https://dev-rescue-ai.vercel.app" target="_blank" style="color:#38bdf8">DevRescue AI</a> &mdash; Autonomous Bug Investigation & Repair Console (React 19, FastAPI, NVIDIA Nemotron, Docker)
  2. <a href="https://github.com/Jenil-Mistry/BhuSetu" target="_blank" style="color:#38bdf8">BhuSetu</a> &mdash; National Land Acquisition & Geospatial GIS (Next.js, PostGIS, MapLibre GL, MinIO)
  3. <span style="color:#38bdf8">ThreatVision</span> &mdash; Explainable AI Malware Detection & Threat Intel (XGBoost, SHAP, React)
  4. <a href="https://github.com/Darshilmodi15/odoo-hackathon---AssetFlow" target="_blank" style="color:#38bdf8">AssetFlow</a> &mdash; Enterprise Asset & Resource ERP (Odoo Hackathon Finalist)
  5. <a href="https://koushik2024-code.github.io/TechFusion-v2v/" target="_blank" style="color:#38bdf8">TechFusion SafeSphere</a> &mdash; Real-Time Safety & Telemetry Dashboard`,

    skills: `Technical Matrix:
  &bull; Frontend: React 19, Next.js, TypeScript, Tailwind CSS, Vite, Three.js, MapLibre GL
  &bull; Backend: Python, FastAPI, Supabase, PostgreSQL, PostGIS, MinIO / S3, RESTful APIs
  &bull; AI & ML: NVIDIA Nemotron-3.5, XGBoost, SHAP (Explainable AI), Multi-Agent Architecture
  &bull; DevOps: Docker, Git, GitHub Actions, Linux, Vercel`,

    hackathons: `Hackathon Milestones:
  &bull; <span style="color:#38bdf8">Odoo Hackathon</span> &mdash; AssetFlow Enterprise ERP (Team Terminal)
  &bull; <span style="color:#38bdf8">Tech Eximius</span> &mdash; ThreatVision XAI Malware Detection
  &bull; <span style="color:#38bdf8">HackX</span> &mdash; IoT & Air Quality Prototype System`,

    contact: `Direct Channels:
  &bull; Email: <a href="mailto:rj423513@gmail.com" style="color:#38bdf8">rj423513@gmail.com</a>
  &bull; GitHub: <a href="https://github.com/RudraPatel217" target="_blank" style="color:#38bdf8">github.com/RudraPatel217</a>
  &bull; LinkedIn: <a href="https://www.linkedin.com/in/rudrapatel217/" target="_blank" style="color:#38bdf8">linkedin.com/in/rudrapatel217</a>
  &bull; Unstop: <a href="https://unstop.com/u/rudrapat96265" target="_blank" style="color:#38bdf8">unstop.com/u/rudrapat96265</a>`,

    experience: `Work & Education:
  &bull; <span style="color:#38bdf8;">SATVAWEB</span> (June 2026 – July 2026) — Software Engineering & Web Development Intern (Remote)
  &bull; <span style="color:#38bdf8;">Adani University, Gujarat</span> — B.Tech in CSE (AI & ML), CGPA: 8.22 / 10 (2025–2029)
  &bull; JEE Mains: 93.27%ile | Class XII: 84.87%ile | Class X: 89.77%ile`,

    resume: () => {
      window.open('assets/documents/Rudra_Patel_Resume.pdf', '_blank');
      return 'Opening official Rudra_Patel_Resume.pdf...';
    },

    'sudo hire': () => {
      if (window.triggerConfetti) window.triggerConfetti();
      return `<span style="color:#10b981;font-weight:bold;">[SUCCESS]</span> High-priority offer protocol initialized! Emailing rj423513@gmail.com...`;
    },

    clear: () => {
      terminalBody.innerHTML = '';
      return null;
    }
  };

  function appendOutput(html) {
    if (!html) return;
    const div = document.createElement('div');
    div.style.marginBottom = '12px';
    div.style.lineHeight = '1.6';
    div.innerHTML = html;
    terminalBody.appendChild(div);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const raw = terminalInput.value.trim();
      const cmd = raw.toLowerCase();
      terminalInput.value = '';

      if (!raw) return;

      // Print prompt echo
      appendOutput(`<span style="color:#38bdf8;">rudra@cyber-console:~$</span> <span style="color:#ffffff;">${raw}</span>`);

      if (cmd in commands) {
        const handler = commands[cmd];
        const res = typeof handler === 'function' ? handler() : handler;
        if (res) appendOutput(res);
      } else if (cmd === 'sudo hire-rudra' || cmd === 'sudo hire rudra') {
        appendOutput(commands['sudo hire']());
      } else {
        appendOutput(`<span style="color:#ef4444;">Command not recognized: '${raw}'. Type <span style="color:#38bdf8;">help</span> for a list of commands.</span>`);
      }
    }
  });
});

