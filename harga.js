/* ═══════════════════════════════════════
   SmartWills WasiatKu — script.js
═══════════════════════════════════════ */

// ── CUSTOM CURSOR (desktop) ───────────
if (window.matchMedia('(pointer: fine)').matches) {
  const dot  = document.createElement('div'); dot.className  = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  const animCursor = () => {
    dot.style.left  = mx + 'px'; dot.style.top  = my + 'px';
    rx += (mx - rx) * 0.14;    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px'; ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  };
  animCursor();

  document.querySelectorAll('a,button,.reason-card,.step-card,.testi-card,.faq-q').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ── HERO PARTICLES ────────────────────
(function spawnParticles() {
  const wrap = document.getElementById('heroParticles');
  if (!wrap) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*14+10}s;
      animation-delay:${Math.random()*10}s;
      opacity:${Math.random()*0.4+0.1};
    `;
    wrap.appendChild(p);
  }
})();

// ── NAVBAR SCROLL ─────────────────────
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar?.classList.toggle('scrolled', y > 60);
  scrollTopBtn?.classList.toggle('visible', y > 400);
});

// ── SCROLL TO TOP ─────────────────────
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── MOBILE HAMBURGER ──────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.textContent = open ? '✕' : '☰';
});
// close on outside click
document.addEventListener('click', e => {
  if (!navbar?.contains(e.target)) {
    navLinks?.classList.remove('open');
    if (hamburger) hamburger.textContent = '☰';
  }
});

// ── DROPDOWN TOGGLE ───────────────────
function toggleDropdown(e) {
  e.preventDefault();
  const container = e.target.closest('.dropdown-container');
  const menu = container?.querySelector('.nav-dropdown');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
}
window.toggleDropdown = toggleDropdown;

// ── FADE-IN OBSERVER ──────────────────
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));

// ── ANIMATED COUNTERS ─────────────────
function animCounter(el) {
  const target  = parseInt(el.dataset.target);
  const suffix  = el.dataset.suffix ?? '+';
  const dur     = 1800;
  const step    = target / (dur / 16);
  let cur = 0;
  const t = setInterval(() => {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(t); }
    el.textContent = Math.floor(cur).toLocaleString() + suffix;
  }, 16);
}
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(animCounter);
      statsObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
const statsEl = document.querySelector('.stats-section');
if (statsEl) statsObs.observe(statsEl);

// ── SMOOTH NUMBER RIPPLE on hover ─────
document.querySelectorAll('.stat-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const el = item.querySelector('.stat-num');
    el.style.transform = 'scale(1.12)';
    el.style.transition = 'transform 0.3s';
    setTimeout(() => { el.style.transform = ''; }, 350);
  });
});

// ── FAQ ACCORDION ─────────────────────
function toggleFaq(btn) {
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(q => {
    q.classList.remove('open');
    q.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    btn.closest('.faq-item').querySelector('.faq-a').classList.add('open');
  }
}
window.toggleFaq = toggleFaq; // expose to inline onclick

// ── FORM VALIDATION & SUBMIT ──────────
const btnHantar  = document.getElementById('btnHantar');
const btnText    = document.getElementById('btnText');
const btnSpinner = document.getElementById('btnSpinner');
const formMsg    = document.getElementById('form-msg');

btnHantar?.addEventListener('click', () => {
  const fields = ['nama','tel','emel','soalan'];
  let ok = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) { el.classList.add('error'); ok = false; }
    else el.classList.remove('error');
  });

  if (!ok) {
    showFormMsg('Sila isi semua medan yang bertanda *.', 'error-msg');
    return;
  }

  // Simulate send
  btnText.style.display    = 'none';
  btnSpinner.style.display = 'inline';
  btnHantar.disabled = true;

  setTimeout(() => {
    btnText.style.display    = 'inline';
    btnSpinner.style.display = 'none';
    btnHantar.disabled = false;
    showFormMsg('✓ Terima kasih! Kami akan menghubungi anda dalam masa 24 jam.', 'success');
    fields.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    showToast('Pertanyaan berjaya dihantar! 🎉');
  }, 1800);
});

function showFormMsg(msg, cls) {
  if (!formMsg) return;
  formMsg.textContent = msg;
  formMsg.className = 'form-msg ' + cls;
  formMsg.style.display = 'block';
  setTimeout(() => { formMsg.style.display = 'none'; }, 6000);
}

// ── TOAST ─────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ── TESTIMONIAL AUTO-SCROLL (mobile) ──
let testiIdx = 0;
const testiDots = document.querySelectorAll('.testi-dot');

function goToSlide(idx) {
  testiIdx = idx;
  testiDots.forEach((d, i) => d.classList.toggle('active', i === idx));
  // On mobile (<640px) translate the grid
  if (window.innerWidth < 640) {
    const grid = document.getElementById('testiGrid');
    if (grid) grid.style.transform = `translateX(-${idx * 100}%)`;
  }
}
window.goToSlide = goToSlide;

// Auto-advance every 5s
setInterval(() => {
  if (window.innerWidth < 640) goToSlide((testiIdx + 1) % 3);
}, 5000);

// ── RIPPLE EFFECT on primary buttons ──
document.querySelectorAll('.btn-primary, .btn-hantar').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const r = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.cssText = `
      position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);
      width:${size}px;height:${size}px;
      top:${e.clientY - rect.top - size/2}px;
      left:${e.clientX - rect.left - size/2}px;
      transform:scale(0);animation:ripple 0.55s linear;
      pointer-events:none;
    `;
    if (getComputedStyle(this).position === 'static') this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(r);
    r.addEventListener('animationend', () => r.remove());
  });
});

// Inject ripple keyframe once
const rippleStyle = document.createElement('style');
rippleStyle.textContent = '@keyframes ripple{to{transform:scale(2.5);opacity:0}}';
document.head.appendChild(rippleStyle);

// ── DYNAMIC HIJRI DATE in footer ──────
try {
  const hijri = new Intl.DateTimeFormat('ms-MY-u-ca-islamic', { day:'numeric', month:'long', year:'numeric' }).format(new Date());
  const el = document.querySelector('.footer-tagline');
  if (el && hijri) el.insertAdjacentHTML('afterend', `<p class="footer-tagline" style="margin-top:4px;font-style:normal;font-size:0.78rem;color:rgba(255,255,255,0.35);">📅 ${hijri}</p>`);
} catch(e) {}

// Tambahkan ini di dalam script.js anda jika mahu kesan masuk (reveal)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.p-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

/**
 * SmartWills WasiatKu — harga.js
 * Page-specific JavaScript for Harga & Pakej
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize fade-in animations
  initFadeInAnimations();
  
  // Initialize dropdown menu
  initDropdownMenu();
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Initialize navbar scroll effect
  initNavbarScroll();
  
});

/**
 * Initialize fade-in animations using Intersection Observer
 */
function initFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Slight offset for better timing
  });
  
  fadeElements.forEach(el => observer.observe(el));
}

/**
 * Initialize dropdown menu functionality
 */
function initDropdownMenu() {
  // Make toggleDropdown available globally if needed by inline onclick
  window.toggleDropdown = function(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('navDropdown');
    if (dropdown) {
      dropdown.classList.toggle('open');
    }
  };
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    const dropdown = document.getElementById('navDropdown');
    if (dropdown) {
      dropdown.classList.remove('open');
    }
  });
  
  // Prevent dropdown from closing when clicking inside
  const dropdownMenu = document.getElementById('navDropdown');
  if (dropdownMenu) {
    dropdownMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
}

/**
 * Initialize scroll to top button functionality
 */
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollTop');
  
  if (!scrollBtn) return;
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top on click
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Initialize navbar scroll effect
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;
  
  // Add scrolled class based on initial scroll position
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  }
  
  // Update scrolled class on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/**
 * Optional: Add hover effects for pricing cards
 * Enhanced interactivity
 */
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.pricing-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Optional: Add additional hover effects
      this.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease';
    });
  });
}

/**
 * Optional: Track button clicks for analytics
 * Can be extended with actual analytics implementation
 */
function trackButtonClick(buttonName, planName) {
  console.log(`Button clicked: ${buttonName} - Plan: ${planName}`);
  // Add analytics tracking here if needed
  // Example: ga('send', 'event', 'Pricing', 'click', planName);
}

// Initialize card hover effects
document.addEventListener('DOMContentLoaded', function() {
  initCardHoverEffects();
  
  // Track pricing button clicks
  const pricingButtons = document.querySelectorAll('.pricing-footer a');
  pricingButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const card = this.closest('.pricing-card');
      const planName = card ? card.querySelector('.pricing-header h3')?.innerText || 'Unknown' : 'Unknown';
      trackButtonClick('Select Plan', planName);
    });
  });
});

/**
 * Toast notification function (if needed)
 */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}