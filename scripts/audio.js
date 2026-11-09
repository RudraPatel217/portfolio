/**
 * Rudra Patel Portfolio - Web Audio API Synthesized Sound Engine
 * Zero external audio files, pure programmatic cyber acoustics.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    const saved = localStorage.getItem('rp_sound_muted');
    // Muted by default so page loads completely silent
    this.isMuted = saved !== null ? saved === 'true' : true;
    this.initElements();
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBlip(freq = 600, duration = 0.05) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fail-safe
    }
  }

  playClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playSuccess() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25, 880]; // A Major Arpeggio
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
          gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + 0.25);
        } catch (e) {}
      }, idx * 75);
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('rp_sound_muted', this.isMuted);
    this.updateIcon();
  }

  initElements() {
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        this.toggleMute();
      });
      this.updateIcon();
    }

    // Attach hover effects to buttons and cards
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.btn, .nav-link, .meta-card, .stat-box, .skill-card, .project-card, .credential-card, .timeline-card, .contact-item, .scene-pill, .filter-pill')) {
        this.playBlip(750, 0.03);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.closest('button, .btn, .contact-item, .project-card, .inspect-btn')) {
        this.playClick();
      }
    });
  }

  updateIcon() {
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (!soundBtn) return;
    if (this.isMuted) {
      soundBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
      soundBtn.title = "Audio Muted (Click to Unmute)";
    } else {
      soundBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      soundBtn.title = "Audio Enabled (Click to Mute)";
    }
  }
}

window.soundEngine = new SoundEngine();

