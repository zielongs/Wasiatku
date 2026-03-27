/**
 * SmartWills WasiatKu — tentang_kami.js
 * Page-specific JavaScript for About Us page
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Initialize navbar scroll effect
  initNavbarScroll();
  
  // Initialize dropdown menu
  initDropdownMenu();
  
  // Initialize fade-in animations
  initFadeInAnimations();
  
  // Initialize stats counter animation
  initStatsAnimation();
  
  // Initialize smooth anchor scrolling
  initSmoothScroll();
  
});

/**
 * Initialize scroll to top button
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
 * Initialize dropdown menu
 */
function initDropdownMenu() {
  // Make toggleDropdown available globally
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
 * Initialize fade-in animations
 */
function initFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => observer.observe(el));
}

/**
 * Initialize stats counter animation
 */
function initStatsAnimation() {
  const statsSection = document.querySelector('.stats-section');
  const statNumbers = document.querySelectorAll('.stat-num');
  
  if (!statsSection || statNumbers.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStatNumbers(statNumbers);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(statsSection);
}

/**
 * Animate stat numbers with count-up effect
 */
function animateStatNumbers(statNumbers) {
  statNumbers.forEach(stat => {
    const targetText = stat.innerText;
    
    // Check if target is a number with + sign
    if (targetText.includes('+')) {
      const targetNum = parseInt(targetText.replace(/[^0-9]/g, ''));
      animateNumber(stat, targetNum, ' +');
    } 
    // Check if target is a number without + sign
    else if (!isNaN(parseInt(targetText))) {
      const targetNum = parseInt(targetText);
      animateNumber(stat, targetNum, '');
    }
    // Handle ISO text (no animation needed)
    else {
      // Skip animation for non-numeric values
    }
  });
}

/**
 * Animate a single number
 */
function animateNumber(element, target, suffix) {
  let current = 0;
  const duration = 1500;
  const stepTime = 16;
  const steps = duration / stepTime;
  const increment = target / steps;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString() + suffix;
  }, stepTime);
}

/**
 * Initialize smooth anchor scrolling
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Optional: Track about page view for analytics
 */
function trackAboutPageView() {
  console.log('About Us page viewed');
  
  // Example: Google Analytics tracking
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'page_view', {
  //     'page_title': 'Tentang Kami',
  //     'page_location': window.location.href
  //   });
  // }
}

/**
 * Optional: Add hover effects for value cards
 */
function initValueCardHover() {
  const valueCards = document.querySelectorAll('.value-card');
  
  valueCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-6px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

/**
 * Optional: Add parallax effect to hero section
 */
function initParallaxEffect() {
  const hero = document.querySelector('.inner-page-hero');
  const glowOrbs = document.querySelectorAll('.glow-orb');
  
  if (!hero) return;
  
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const rate = scrolled * 0.3;
    
    glowOrbs.forEach((orb, index) => {
      const direction = index === 0 ? 1 : -1;
      orb.style.transform = `translateY(${rate * 0.1 * direction}px)`;
    });
  });
}

// Track page view
trackAboutPageView();

// Initialize optional features
initValueCardHover();
initParallaxEffect();