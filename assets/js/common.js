class MimiHeader extends HTMLElement {
  connectedCallback() {
    const isBlog = window.location.pathname.includes('/blog/');
    const root = isBlog ? '../' : './';

    this.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <a href="${root}index.html" class="nav-logo">
            <img src="${root}assets/images/MIMI GAMES LOGO.jpg" alt="Mimi Games Logo">
            <span>Mimi Games</span>
          </a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          <ul class="nav-links" id="navLinks">
            <li><a href="${root}index.html">Home</a></li>
            <li><a href="${root}blog/">Blog</a></li>
            <li><a href="${root}values.html">Our Values</a></li>
            <li><a href="${root}career.html">Career</a></li>
            <li><a href="${root}contact.html">Contact</a></li>
            <li><a href="${root}xtremeversity.html">Xtremeversity</a></li>
          </ul>
        </div>
      </nav>
    `;

    const toggle = this.querySelector('#navToggle');
    const links = this.querySelector('#navLinks');

    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
      toggle.classList.toggle('open');
    });

    this.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('active');
        toggle.classList.remove('open');
      });
    });

    // Set Active Nav Link
    const currentPath = window.location.pathname;
    this.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href.replace('../', '').replace('./', ''))) {
        link.classList.add('active-nav');
      }
    });
  }
}
customElements.define('mimi-header', MimiHeader);

class MimiFooter extends HTMLElement {
  connectedCallback() {
    const isBlog = window.location.pathname.includes('/blog/');
    const root = isBlog ? '../' : './';

    this.innerHTML = `
      <div class="premium-footer">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="${root}assets/images/MIMI GAMES LOGO.jpg" alt="Mimi Games">
            <span>Mimi Games</span>
          </div>
        </div>

        <div class="footer-main">
          <div class="footer-column accordion-item">
            <div class="accordion-header">
              <h3>Visit</h3>
              <span class="chevron"></span>
            </div>
            <ul class="accordion-content">
              <li><a href="${root}index.html">Home</a></li>
              <li><a href="${root}blog/">Blog</a></li>
              <li><a href="${root}career.html">Careers</a></li>
              <li><a href="${root}values.html">Our Values</a></li>
              <li><a href="${root}contact.html">Contact Us</a></li>
              <li><a href="${root}xtremeversity.html">Xtremeversity</a></li>
            </ul>
          </div>
          <div class="footer-column accordion-item">
            <div class="accordion-header">
              <h3>Legal</h3>
              <span class="chevron"></span>
            </div>
            <ul class="accordion-content">
              <li><a href="${root}privacy-policy.html">Privacy Policy</a></li>
              <li><a href="${root}data-deletion.html">Data Deletion Request</a></li>
              <li><a href="${root}terms-of-use.html">Terms of Use</a></li>
              <li><a href="${root}privacy-policy.html">Cookies Policy</a></li>
              <li><a href="${root}privacy-policy.html">EULA</a></li>
            </ul>
          </div>
          <div class="footer-column follow-column">
            <h3>Follow Us</h3>
            <div class="social-icons">
              <a href="https://www.linkedin.com/company/mimi-game/" class="social-icon li" target="_blank" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/></svg>
              </a>
              <a href="https://youtube.com/@mimigames_studio" class="social-icon yt" target="_blank" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="currentColor"/></svg>
              </a>
              <a href="https://play.google.com/store/apps/dev?id=7588389315845065039" class="social-icon gp" target="_blank" aria-label="Google Play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 20.5v-17l14.5 8.5-14.5 8.5zm2-14.125v11.25l9.584-5.625-9.584-5.625z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
        </div>

        <button class="back-to-top" id="backToTop" aria-label="Back to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="currentColor"/></svg>
        </button>

        <div class="footer-bottom">
          <span>&copy; 2026 Mimi Games. All rights reserved.</span>
          <span>Made in Pakistan 🇵🇰</span>
        </div>
      </div>
    `;

    this.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        if (window.innerWidth <= 768) header.parentElement.classList.toggle('active');
      });
    });

    this.querySelector('#backToTop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
customElements.define('mimi-footer', MimiFooter);

/* ── Scroll Reveal ── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('v'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => io.observe(el));
}
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initReveal); }
else { setTimeout(initReveal, 80); }


/* ── Preloader ── */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Add a slight delay to ensure fonts/CSS are fully painted
    setTimeout(() => preloader.classList.add('loaded'), 400);
    setTimeout(() => preloader.remove(), 1300);
  }
});

/* ── Parallax ── */
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxBgs = document.querySelectorAll('.game-teaser-bg');

  parallaxBgs.forEach(bg => {
    const rate = scrolled * 0.15;
    bg.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
  });
});

/* ── 3D Card Tilt Effect ── */
function initTilt() {
  const cards = document.querySelectorAll('.g-card, .feature-card, .social-big');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}
if (window.innerWidth > 900) { setTimeout(initTilt, 500); }

/* ── Canvas Particle Background ── */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() { canvas.width = canvas.parentElement.clientWidth; canvas.height = canvas.parentElement.clientHeight; }
  window.addEventListener('resize', resize); resize();

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(232, 124, 42, ' + p.opacity + ')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}
window.addEventListener('load', initParticles);

/* ── UI Cyber Sound ── */
const base64Click = "data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExDQA/4cBAAcEAAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExHgT9mcoAMcEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const uiAudio = new Audio(base64Click);
uiAudio.volume = 0.1;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.btn, button.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => { if (window.innerWidth > 900) { uiAudio.currentTime = 0; uiAudio.play().catch(() => { }); } });
  });
});

