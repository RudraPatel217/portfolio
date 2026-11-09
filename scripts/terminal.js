/**
 * Rudra Patel Portfolio - Interactive Profile Console
 * Styled in Cinematic Cyan & Violet Glass Theme
 */

document.addEventListener('DOMContentLoaded', () => {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  if (!terminalBody || !terminalInput) return;

  const commands = {
    help: `Available commands:
  <span style="color:#6fe7ff;font-weight:600;">about</span>       - Learn about Rudra Patel & technical focus
  <span style="color:#6fe7ff;font-weight:600;">projects</span>    - View featured engineering systems & live links
  <span style="color:#6fe7ff;font-weight:600;">skills</span>      - Display technical stacks & frameworks
  <span style="color:#6fe7ff;font-weight:600;">trajectory</span>  - Display career & hackathon milestones
  <span style="color:#6fe7ff;font-weight:600;">contact</span>     - View direct contact channels & social links
  <span style="color:#6fe7ff;font-weight:600;">resume</span>      - Open professional CV / resume
  <span style="color:#6fe7ff;font-weight:600;">sudo hire</span>   - Initialize executive interview protocol
  <span style="color:#6fe7ff;font-weight:600;">clear</span>       - Clear console output`,

    about: `<span style="color:#ffffff;font-weight:600;">Rudra Patel</span> &mdash; Full-Stack &amp; AI Systems Engineer
Location: Ahmedabad, India &bull; Adani University B.Tech CSE (AI &amp; ML, CGPA: 8.22)
Specialization: Autonomous AI agents, high-throughput geospatial GIS, and explainable AI threat architectures.`,

    projects: `Featured Systems:
  1. <a href="https://dev-rescue-ai.vercel.app" target="_blank" style="color:#6fe7ff;text-decoration:underline;">DevRescue AI</a> &mdash; Autonomous Bug Investigation &amp; Auto-Repair Agent (React 19, FastAPI, NVIDIA Nemotron, Docker)
  2. <a href="https://github.com/Jenil-Mistry/BhuSetu" target="_blank" style="color:#6fe7ff;text-decoration:underline;">BhuSetu GIS</a> &mdash; National Land Acquisition &amp; Geospatial Platform (PostGIS, MapLibre GL, Next.js)
  3. <a href="https://github.com/RudraPatel217" target="_blank" style="color:#6fe7ff;text-decoration:underline;">ThreatVision</a> &mdash; Explainable AI PE Malware Detection Console (XGBoost, SHAP, Python)
  4. <a href="https://website-analyser-rudra.streamlit.app/" target="_blank" style="color:#6fe7ff;text-decoration:underline;">Domain Intelligence</a> &mdash; Automated DOM Inspection &amp; SEO Diagnostics Suite
  5. <a href="https://github.com/Darshilmodi15/odoo-hackathon---AssetFlow" target="_blank" style="color:#6fe7ff;text-decoration:underline;">AssetFlow ERP</a> &mdash; Enterprise Asset &amp; Lifecycle Management (Odoo Hackathon)
  6. <a href="https://koushik2024-code.github.io/TechFusion-v2v/" target="_blank" style="color:#6fe7ff;text-decoration:underline;">SafeSphere</a> &mdash; Women's Safety &amp; Rapid SOS Telemetry (TechFusion Live)`,

    skills: `Technical Matrix:
  &bull; Languages: Python, JavaScript (ES6+), TypeScript, C, SQL
  &bull; Frontend: React 19, Next.js, Tailwind CSS, Vite, Three.js, MapLibre GL
  &bull; Backend: FastAPI, Flask, Streamlit, PostgreSQL, PostGIS, MinIO / S3, RESTful APIs
  &bull; AI &amp; ML: NVIDIA Nemotron-3.5, XGBoost, SHAP (Explainable AI), Multi-Agent AST Ingestion
  &bull; Tooling: Docker, Git, GitHub Actions, Linux`,

    trajectory: `Milestones & Recognitions:
  &bull; <span style="color:#6fe7ff;">SATVAWEB Internship</span> (June &ndash; July 2026) &mdash; Software Engineering &amp; Web Diagnostics Intern
  &bull; <span style="color:#6fe7ff;">Smart India Hackathon (SIH 2026)</span> &mdash; Selected in university internal round
  &bull; <span style="color:#8f7dff;">Tech Eximius Hackathon</span> &mdash; Finalist with ThreatVision XAI
  &bull; <span style="color:#f3d38b;">Odoo Hackathon</span> &mdash; Finalist with AssetFlow ERP (Team Terminal)
  &bull; <span style="color:#8dffbf;">Speaker Recognition</span> &mdash; Keynote on "AI and Society" at Adani University`,

    hackathons: `Milestones & Recognitions:
  &bull; <span style="color:#6fe7ff;">Smart India Hackathon (SIH 2026)</span> &mdash; University Internal Selection
  &bull; <span style="color:#8f7dff;">Tech Eximius</span> &mdash; Finalist with ThreatVision
  &bull; <span style="color:#f3d38b;">Odoo Hackathon</span> &mdash; Finalist with AssetFlow ERP`,

    contact: `Direct Channels:
  &bull; Email: <a href="mailto:rj423513@gmail.com" style="color:#6fe7ff;">rj423513@gmail.com</a>
  &bull; LinkedIn: <a href="https://www.linkedin.com/in/rudrapatel217/" target="_blank" style="color:#6fe7ff;">linkedin.com/in/rudrapatel217</a>
  &bull; GitHub: <a href="https://github.com/RudraPatel217" target="_blank" style="color:#6fe7ff;">github.com/RudraPatel217</a>
  &bull; Unstop: <a href="https://unstop.com/u/rudrapat96265" target="_blank" style="color:#6fe7ff;">unstop.com/u/rudrapat96265</a>`,

    resume: () => {
      window.open('assets/documents/Rudra_Patel_Resume.pdf', '_blank');
      return 'Opening official Rudra_Patel_Resume.pdf...';
    },

    'sudo hire': () => {
      if (window.triggerConfetti) window.triggerConfetti();
      return `<span style="color:#8dffbf;font-weight:bold;">[SUCCESS]</span> High-priority offer protocol initialized! Redirecting to rj423513@gmail.com...`;
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
      appendOutput(`<span style="color:#6fe7ff;">rudra@cyber-console:~$</span> <span style="color:#ffffff;">${raw}</span>`);

      if (cmd in commands) {
        const handler = commands[cmd];
        const res = typeof handler === 'function' ? handler() : handler;
        if (res) appendOutput(res);
      } else if (cmd === 'sudo hire-rudra' || cmd === 'sudo hire rudra') {
        appendOutput(commands['sudo hire']());
      } else {
        appendOutput(`<span style="color:#f87171;">Command not recognized: '${raw}'. Type <span style="color:#6fe7ff;">help</span> for a list of commands.</span>`);
      }
    }
  });
});
