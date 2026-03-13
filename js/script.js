// ═══ NAVBAR SCROLL EFFECT ═══
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ═══ FADE-IN ON SCROLL ═══
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ═══ MOBILE HAMBURGER ═══
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '68px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = 'rgba(13,34,51,0.98)';
    navLinks.style.padding = '16px 5%';
    navLinks.style.gap = '14px';
  });
}

// ═══ FORM SUBMIT ═══
const btnHantar = document.querySelector('.btn-hantar');
if (btnHantar) {
  btnHantar.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    let allFilled = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#e05c5c';
        allFilled = false;
      } else {
        input.style.borderColor = '#1a7a6e';
      }
    });
    if (allFilled) {
      btnHantar.textContent = '✓ Terima kasih! Kami akan menghubungi anda.';
      btnHantar.style.background = '#1a7a6e';
      btnHantar.style.color = 'white';
      btnHantar.disabled = true;
    }
  });
}
