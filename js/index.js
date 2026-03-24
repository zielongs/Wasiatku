/* ── NAVBAR SCROLL ── */
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 120) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.add('scrolled-up');
    navbar.classList.remove('scrolled');
    setTimeout(() => navbar.classList.remove('scrolled-up'), 50);
  }
  scrollTop.classList.toggle('visible', window.scrollY > 500);
});

/* ── SCROLL TO TOP ── */
document.getElementById('scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── DROPDOWN ── */
function toggleDropdown(e) {
  e.stopPropagation();
  document.getElementById('navDropdown').classList.toggle('open');
}
document.addEventListener('click', () => {
  const d = document.getElementById('navDropdown');
  if (d) d.classList.remove('open');
});

/* ── HAMBURGER (MOBILE) ── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

/* ── FADE-IN ON SCROLL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── STAT COUNTER ── */
function animateStats() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 40);
  });
}
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateStats(); statsObserver.disconnect(); } });
}, { threshold: 0.3 });
const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

/* ── FAQ TOGGLE ── */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item.active').forEach(el => el.classList.remove('active'));
  if (!isActive) item.classList.add('active');
}

/* ── TESTIMONIAL DOTS ── */
function goToSlide(idx) {
  document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

/* ── FORM SUBMIT ── */
function handleFormSubmit() {
  const nama   = document.getElementById('nama').value.trim();
  const tel    = document.getElementById('tel').value.trim();
  const emel   = document.getElementById('emel').value.trim();
  const soalan = document.getElementById('soalan').value.trim();
  const msg    = document.getElementById('form-msg');

  if (!nama || !tel || !emel || !soalan) {
    msg.className = 'form-msg error';
    msg.textContent = '⚠️ Sila lengkapkan semua medan yang bertanda *.';
    msg.style.display = 'block';
    return;
  }

  const btn = document.getElementById('btnHantar');
  btn.disabled = true;
  document.getElementById('btnText').style.display = 'none';
  document.getElementById('btnSpinner').style.display = 'inline';

  setTimeout(() => {
    msg.className = 'form-msg success';
    msg.textContent = '✅ Pertanyaan anda telah berjaya dihantar! Kami akan menghubungi anda tidak lama lagi.';
    msg.style.display = 'block';
    btn.disabled = false;
    document.getElementById('btnText').style.display = 'inline';
    document.getElementById('btnSpinner').style.display = 'none';
  }, 1500);
}