/**
 * SmartWills WasiatKu — terma_syarat.js
 * Extracted from terma_syarat.html inline script
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize navbar scroll effect
  initNavbarScroll();
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Initialize dropdown menu
  initDropdownMenu();
  
  // Initialize TOC smooth scrolling
  initTOCScrolling();
  
});

/**
 * Initialize navbar scroll effect - adds 'scrolled' class on scroll
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Initialize scroll to top button - shows/hides and handles click
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
  }, { passive: true });
  
  // Smooth scroll to top on click
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Initialize dropdown menu - handles open/close on click
 */
function initDropdownMenu() {
  // Make toggleDropdown available globally for onclick in HTML
  window.toggleDropdown = function(e) {
    e.stopPropagation();
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
}

/**
 * Initialize Table of Contents smooth scrolling
 */
function initTOCScrolling() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  
  if (tocLinks.length === 0) return;
  
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (!targetElement) return;
      
      e.preventDefault();
      
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update active state in TOC
      tocLinks.forEach(function(l) {
        l.classList.remove('active-toc');
      });
      this.classList.add('active-toc');
    });
  });
}