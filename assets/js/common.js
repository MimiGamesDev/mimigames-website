class MimiHeader extends HTMLElement {
  connectedCallback() {
    const isBlog = window.location.pathname.includes('/blog/');
    const root = isBlog ? '../' : './';

    this.innerHTML = `
      <nav class="navbar" id="mainNav">
        <div class="nav-container">
          <a href="${root}index.html" class="nav-logo">
            <img src="${root}assets/images/MIMI GAMES LOGO.jpg" alt="Mimi Games Logo">
            <div class="nav-logo-text">
              <span class="nav-logo-name">Mimi</span>
              <span class="nav-logo-accent">Games</span>
            </div>
          </a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          <ul class="nav-links" id="navLinks">
            <li><a href="${root}index.html"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</a></li>
            <li><a href="${root}services.html"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Services</a></li>
            <li><a href="${root}index.html#games"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>Games</a></li>
            <li><a href="${root}art.html"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>Art</a></li>
            <li><a href="${root}index.html#team"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Team</a></li>
            <li><a href="${root}career.html"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>Career</a></li>
            <li><a href="${root}blog/"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Blog</a></li>
            <li class="nav-mobile-contact"><a href="${root}contact.html" class="nav-mobile-contact-btn">Contact Us</a></li>
          </ul>
          <div class="nav-right">
            <a href="${root}contact.html" class="nav-contact">Contact Us</a>
          </div>
        </div>
      </nav>
    `;

    const toggle = this.querySelector('#navToggle');
    const links = this.querySelector('#navLinks');

    const closeMenu = () => {
      links.classList.remove('active');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        links.classList.add('active');
        toggle.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    this.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('active')) closeMenu();
    });

    document.addEventListener('click', (e) => {
      if (links.classList.contains('active') && !e.target.closest('.navbar')) closeMenu();
    });

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
      <footer class="mimi-footer" id="siteFooter">
        <div class="footer-main-wrap">
          <div class="container">
            <div class="footer-grid">

              <!-- BRAND + CONTACT INFO -->
              <div class="footer-brand">
                <div class="footer-logo">
                  <img src="${root}assets/images/MIMI GAMES LOGO.jpg" alt="Mimi Games">
                  <div>
                    <span class="footer-brand-name">Mimi</span>
                    <span class="footer-brand-accent">Games</span>
                  </div>
                </div>
                <p class="footer-tagline">Crafting mobile games from Sargodha, Pakistan. Building worlds, shipping titles, and growing a global player community.</p>

                <div class="footer-contact-list">
                  <div class="footer-contact-row">
                    <svg class="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>+92 304 4593186</span>
                  </div>
                  <div class="footer-contact-row">
                    <svg class="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span>support@mimigames.games</span>
                  </div>
                  <div class="footer-contact-row">
                    <svg class="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Sargodha, Punjab, Pakistan</span>
                  </div>
                </div>

                <div class="footer-social-label">Follow Us</div>
                <div class="footer-social">
                  <a href="https://web.facebook.com/profile.php?id=61564734203871" class="social-icon" target="_blank" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/></svg>
                  </a>
                  <a href="https://x.com/mimigames2k24" class="social-icon" target="_blank" aria-label="X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/mimi-game/" class="social-icon" target="_blank" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/></svg>
                  </a>
                  <a href="https://discord.gg/pd7Gk5mbT" class="social-icon" target="_blank" aria-label="Discord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/></svg>
                  </a>
                  <a href="https://youtube.com/@mimigames_studio" class="social-icon" target="_blank" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="currentColor"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@mimigames_studio" class="social-icon" target="_blank" aria-label="TikTok">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="currentColor"/></svg>
                  </a>
                </div>
              </div>

              <!-- QUICK LINKS -->
              <div class="footer-col">
                <h4>Quick Links <span class="footer-accordion-icon">+</span></h4>
                <ul>
                  <li><span class="footer-dot"></span><a href="${root}index.html">Home</a></li>
                  <li><span class="footer-dot"></span><a href="${root}services.html">Services</a></li>
                  <li><span class="footer-dot"></span><a href="${root}values.html">Our Values</a></li>
                  <li><span class="footer-dot"></span><a href="${root}career.html">Careers</a></li>
                  <li><span class="footer-dot"></span><a href="${root}blog/">Blog</a></li>
                  <li><span class="footer-dot"></span><a href="${root}faq.html">FAQ</a></li>
                </ul>
              </div>

              <!-- OUR GAMES -->
              <div class="footer-col">
                <h4>Our Games <span class="footer-accordion-icon">+</span></h4>
                <ul>
                  <li><span class="footer-dot"></span><a href="${root}rogue-wheel.html">Rogue Wheel</a></li>
                  <li><span class="footer-dot"></span><a href="${root}xtremeversity.html">Xtremeversity</a></li>
                  <li><span class="footer-dot"></span><a href="${root}puzzle-verse.html">Puzzle Verse</a></li>
                  <li><span class="footer-dot"></span><a href="https://play.google.com/store/apps/dev?id=7588389315845065039" target="_blank">All Games on Play Store</a></li>
                </ul>
              </div>

              <!-- OUR ART + NEWSLETTER -->
              <div class="footer-col">
                <h4>Our Art <span class="footer-accordion-icon">+</span></h4>
                <ul>
                  <li><span class="footer-dot"></span><a href="${root}concept-art.html">Concept Art</a></li>
                  <li><span class="footer-dot"></span><a href="${root}character-design.html">Character Design</a></li>
                  <li><span class="footer-dot"></span><a href="${root}environment-art.html">Environment Art</a></li>
                  <li><span class="footer-dot"></span><a href="${root}ui-ux-design.html">UI/UX Design</a></li>
                </ul>

                <div class="footer-newsletter-box">
                  <div class="footer-newsletter-box-title">Stay Updated</div>
                  <p class="footer-newsletter-box-desc">Get the latest on our games, studio news, and behind-the-scenes drops.</p>
                  <form class="footer-newsletter-box-form" onsubmit="event.preventDefault(); this.querySelector('button').textContent='Subscribed!';">
                    <input type="email" placeholder="Your email" required>
                    <button type="submit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- BOTTOM BAR -->
        <div class="footer-bottom-bar">
          <div class="container">
            <div class="footer-bottom-inner">
              <span>&copy; 2026 Mimi Games. All rights reserved.</span>
              <div class="footer-bottom-links">
                <a href="${root}privacy-policy.html">Privacy</a>
                <a href="${root}terms-of-use.html">Terms</a>
                <a href="${root}data-deletion.html">Data Deletion</a>
              </div>
              <span>Made with <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="color:#c44d2e;display:inline-block;vertical-align:middle;margin:0 2px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> in Pakistan <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" style="width:1.1rem;height:auto;display:inline-block;vertical-align:middle;border-radius:2px;margin-left:4px;border:1px solid rgba(199,200,170,0.12);"><rect width="300" height="200" fill="#01411C"/><rect width="75" height="200" fill="#FFF"/><circle cx="187.5" cy="100" r="60" fill="#FFF"/><circle cx="202.5" cy="85" r="60" fill="#01411C"/><polygon points="202.5,72.5 206.2,84 218,84 208.5,91 212.2,102.5 202.5,95.5 192.8,102.5 196.5,91 187,84 198.8,84" fill="#FFF"/></svg></span>
            </div>
          </div>
        </div>

        <button class="back-to-top" id="backToTop" aria-label="Back to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="currentColor"/></svg>
        </button>

      </footer>

      <!-- FLOATING CONTACT BUTTON -->
      <div class="floating-contact-wrap" id="floatingContact">
        <div class="floating-contact-actions">
          <a href="tel:+923044593186" class="floating-contact-action call-btn" title="Call Us">
            <div class="fab-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <span class="fab-label">Call Us</span>
          </a>
          <a href="https://wa.me/923044593186?text=Hi%20Mimi%20Games!%20I%27d%20like%20to%20know%20more%20about%20your%20services." class="floating-contact-action whatsapp-btn" target="_blank" title="WhatsApp Us">
            <div class="fab-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <span class="fab-label">WhatsApp</span>
          </a>
        </div>
        <button class="floating-contact-main" id="floatingContactBtn" aria-label="Contact Us" title="Contact Us">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span class="floating-contact-label">Contact Us</span>
        </button>
      </div>
    `;

    this.querySelector('#backToTop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const floatingContact = document.getElementById('floatingContact');
    const floatingContactBtn = document.getElementById('floatingContactBtn');
    if (floatingContact && floatingContactBtn) {
      floatingContactBtn.addEventListener('click', () => {
        floatingContact.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!floatingContact.contains(e.target)) {
          floatingContact.classList.remove('open');
        }
      });
    }

    this.querySelectorAll('.footer-col h4').forEach(heading => {
      heading.addEventListener('click', () => {
        const col = heading.closest('.footer-col');
        if (col) {
          col.classList.toggle('active');
        }
      });
    });
  }
}
customElements.define('mimi-footer', MimiFooter);

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('v'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => io.observe(el));
}
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initReveal); }
else { setTimeout(initReveal, 80); }

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('loaded'), 120);
    setTimeout(() => preloader.remove(), 700);
  }
  // Inject scroll progress bar
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);
});

let lastScroll = 0;
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  // Scroll progress indicator
  const scrollBar = document.querySelector('.scroll-progress');
  if (scrollBar) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollBar.style.width = maxScroll > 0 ? (scrolled / maxScroll * 100) + '%' : '0%';
  }

  // Nav background on scroll
  if (navbar) {
    if (scrolled > 40) {
      navbar.style.background = '#2c1d23';
      navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
    } else {
      navbar.style.background = '';
      navbar.style.boxShadow = '';
    }
  }

  lastScroll = scrolled;
});
