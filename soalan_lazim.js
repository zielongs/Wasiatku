/**
 * SmartWills WasiatKu — soalan_lazim.js
 * Page-specific JavaScript for FAQ page
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize FAQ accordion functionality
  initFaqAccordion();
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Initialize navbar scroll effect
  initNavbarScroll();
  
  // Initialize dropdown menu
  initDropdownMenu();
  
  // Initialize fade-in animations
  initFadeInAnimations();
  
  // Initialize smooth anchor scrolling
  initSmoothScroll();
  
  // Track FAQ interactions
  initFaqTracking();
  
});

/**
 * Initialize FAQ accordion functionality
 */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-question');
  
  faqButtons.forEach(button => {
    button.addEventListener('click', function() {
      toggleFaqItem(this);
    });
  });
}

/**
 * Toggle FAQ item open/close
 */
function toggleFaqItem(button) {
  const faqItem = button.closest('.faq-item');
  
  if (!faqItem) return;
  
  const isActive = faqItem.classList.contains('active');
  
  // Close all other FAQ items
  const allFaqItems = document.querySelectorAll('.faq-item');
  allFaqItems.forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
    }
  });
  
  // Toggle current item
  if (!isActive) {
    faqItem.classList.add('active');
    trackFaqOpen(button);
  } else {
    faqItem.classList.remove('active');
  }
}

/**
 * Track FAQ item opening (for analytics)
 */
function trackFaqOpen(button) {
  const questionText = button.querySelector('h3')?.innerText || 'Unknown';
  const marker = button.querySelector('.faq-marker')?.innerText || '';
  
  console.log(`FAQ opened: #${marker} - ${questionText}`);
  
  // Example: Google Analytics tracking
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'faq_open', {
  //     'event_category': 'FAQ',
  //     'event_label': questionText,
  //     'value': parseInt(marker) || 0
  //   });
  // }
}

/**
 * Initialize FAQ interaction tracking
 */
function initFaqTracking() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      // Track when answer is viewed (if needed)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && item.classList.contains('active')) {
            console.log('FAQ answer viewed:', question.querySelector('h3')?.innerText);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(answer);
    }
  });
}

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
 * Optional: Add search functionality for FAQ items
 */
function initFaqSearch() {
  const searchInput = document.getElementById('faq-search');
  
  if (!searchInput) return;
  
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question h3')?.innerText.toLowerCase() || '';
      const answer = item.querySelector('.faq-answer p')?.innerText.toLowerCase() || '';
      
      if (searchTerm === '') {
        item.style.display = '';
      } else if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

/**
 * Optional: Track FAQ view for analytics
 */
function trackFaqPageView() {
  console.log('FAQ page viewed');
  
  // Example: Google Analytics tracking
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'page_view', {
  //     'page_title': 'Soalan Lazim',
  //     'page_location': window.location.href
  //   });
  // }
}

/**
 * Optional: Add copy link to FAQ answer
 */
function initFaqShareLinks() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question h3')?.innerText;
    const answer = item.querySelector('.faq-answer p')?.innerText;
    
    // Add share button to each answer (optional feature)
    const answerInner = item.querySelector('.faq-answer-inner');
    if (answerInner && !answerInner.querySelector('.faq-share')) {
      const shareBtn = document.createElement('button');
      shareBtn.className = 'faq-share';
      shareBtn.innerHTML = '🔗 Salin Pautan';
      shareBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--teal);
        font-size: 0.7rem;
        cursor: pointer;
        margin-top: 12px;
        display: inline-block;
        opacity: 0.6;
        transition: opacity 0.3s;
      `;
      shareBtn.addEventListener('mouseenter', () => shareBtn.style.opacity = '1');
      shareBtn.addEventListener('mouseleave', () => shareBtn.style.opacity = '0.6');
      shareBtn.addEventListener('click', () => {
        const url = `${window.location.origin}${window.location.pathname}#faq-${index + 1}`;
        navigator.clipboard.writeText(url);
        if (typeof showToast === 'function') {
          showToast('Pautan FAQ disalin! 📋');
        }
      });
      answerInner.appendChild(shareBtn);
    }
  });
}

// Track page view
trackFaqPageView();

// Initialize optional features (uncomment to enable)
// initFaqSearch();
// initFaqShareLinks();