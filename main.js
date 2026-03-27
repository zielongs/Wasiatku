/* ═══════════════════════════════════════════════
   main.js — Shared scripts for all WasiatKu pages
═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     1. NAVBAR — scroll behaviour
  ───────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 120) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('scrolled-up');
    } else {
      navbar.classList.add('scrolled-up');
      navbar.classList.remove('scrolled');
      setTimeout(() => navbar.classList.remove('scrolled-up'), 50);
    }
  }

  /* Inner pages start with .scrolled already on the nav */
  if (navbar && navbar.classList.contains('scrolled')) {
    window.addEventListener('scroll', handleNavbarScroll);
  } else {
    window.addEventListener('scroll', handleNavbarScroll);
  }

  /* ─────────────────────────────────────────────
     2. NAVBAR — "Lain-lain" dropdown toggle
  ───────────────────────────────────────────── */
  window.toggleDropdown = function (e) {
    e.stopPropagation();
    const dropdown = document.getElementById('navDropdown');
    if (dropdown) dropdown.classList.toggle('open');
  };

  document.addEventListener('click', function () {
    const dropdown = document.getElementById('navDropdown');
    if (dropdown) dropdown.classList.remove('open');
  });

  /* ─────────────────────────────────────────────
     3. NAVBAR — hamburger (mobile)
  ───────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  /* ─────────────────────────────────────────────
     4. SCROLL-TO-TOP button
  ───────────────────────────────────────────── */
  const scrollTopBtn = document.getElementById('scrollTop');

  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─────────────────────────────────────────────
     5. FADE-IN on scroll (IntersectionObserver)
  ───────────────────────────────────────────── */
  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* ─────────────────────────────────────────────
     6. STAT COUNTER (homepage stats bar)
  ───────────────────────────────────────────── */
  function animateCounters() {
    document.querySelectorAll('.stat-num[data-target]').forEach(function (el) {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = Math.ceil(target / 40);
      const timer  = setInterval(function () {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 40);
    });
  }

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  /* ─────────────────────────────────────────────
     7. FAQ ACCORDION
  ───────────────────────────────────────────── */
  window.toggleFaq = function (btn) {
    const item     = btn.closest('.faq-item');
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item.active').forEach(function (el) {
      el.classList.remove('active');
    });
    if (!isActive) item.classList.add('active');
  };

  /* ─────────────────────────────────────────────
     8. TESTIMONIAL DOTS
  ───────────────────────────────────────────── */
  window.goToSlide = function (idx) {
    document.querySelectorAll('.testi-dot').forEach(function (dot, i) {
      dot.classList.toggle('active', i === idx);
    });
  };

  /* ─────────────────────────────────────────────
     9. CONTACT / ENQUIRY FORM (shared handler)
  ───────────────────────────────────────────── */
  window.handleFormSubmit = function () {
    /* Collect all possible field IDs across pages */
    const getValue = function (id) {
      const el = document.getElementById(id);
      return el ? el.value.trim() : null;
    };

    const nama   = getValue('nama');
    const tel    = getValue('tel');
    const emel   = getValue('emel');
    /* "soalan" on homepage, "mesej" on hubungi_kami */
    const mesej  = getValue('soalan') || getValue('mesej');

    const msgEl  = document.getElementById('form-msg');
    const btn    = document.getElementById('btnHantar');
    const txtEl  = document.getElementById('btnText');
    const spinEl = document.getElementById('btnSpinner');

    if (!nama || !tel || !emel || !mesej) {
      if (msgEl) {
        msgEl.className = 'form-msg error';
        msgEl.textContent = '⚠️ Sila lengkapkan semua medan yang bertanda *.';
        msgEl.style.display = 'block';
      }
      return;
    }

    if (btn)    btn.disabled = true;
    if (txtEl)  txtEl.style.display  = 'none';
    if (spinEl) spinEl.style.display = 'inline';

    setTimeout(function () {
      if (msgEl) {
        msgEl.className = 'form-msg success';
        msgEl.textContent = '✅ Mesej anda telah berjaya dihantar! Kami akan menghubungi anda tidak lama lagi.';
        msgEl.style.display = 'block';
      }
      if (btn)    btn.disabled = false;
      if (txtEl)  txtEl.style.display  = 'inline';
      if (spinEl) spinEl.style.display = 'none';

      /* Clear fields */
      ['nama','tel','emel','soalan','mesej','topik'].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
    }, 1500);
  };

  /* ─────────────────────────────────────────────
     10. SMOOTH ANCHOR SCROLL (#pertanyaan etc.)
  ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();