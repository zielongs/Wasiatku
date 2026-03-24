/**
 * SmartWills WasiatKu — pendedahan_produk.js
 * Page-specific JavaScript for Product Disclosure page
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize TOC smooth scrolling
  initTOCScrolling();
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Initialize navbar scroll effect
  initNavbarScroll();
  
  // Initialize dropdown menu
  initDropdownMenu();
  
  // Initialize fade-in animations
  initFadeInAnimations();
  
  // Add print functionality
  initPrintButton();
  
});

/**
 * Initialize Table of Contents smooth scrolling
 */
function initTOCScrolling() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  
  tocLinks.forEach(link => {
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
      tocLinks.forEach(l => l.classList.remove('active-toc'));
      this.classList.add('active-toc');
      
      // Optional: Update URL hash without jumping
      history.pushState(null, null, targetId);
    });
  });
  
  // Highlight active TOC item on scroll
  highlightActiveTOCItem();
}

/**
 * Highlight active TOC item based on scroll position
 */
function highlightActiveTOCItem() {
  const sections = document.querySelectorAll('.legal-section');
  const tocLinks = document.querySelectorAll('.toc-list a');
  
  if (sections.length === 0 || tocLinks.length === 0) return;
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY + 150;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        current = section.getAttribute('id');
      }
    });
    
    tocLinks.forEach(link => {
      link.classList.remove('active-toc');
      const href = link.getAttribute('href').substring(1);
      if (href === current) {
        link.classList.add('active-toc');
      }
    });
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
 * Initialize print button
 */
function initPrintButton() {
  const printBtn = document.querySelector('.btn-print');
  
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      window.print();
    });
  }
}

/**
 * Optional: Track document views for analytics
 */
function trackDocumentView() {
  console.log('Product Disclosure document viewed');
  
  // Example: Google Analytics tracking
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'view_pds', {
  //     'event_category': 'Legal Documents',
  //     'event_label': 'Product Disclosure Sheet'
  //   });
  // }
}

/**
 * Optional: Add copy to clipboard functionality for important sections
 */
function initCopyToClipboard() {
  const importantSections = document.querySelectorAll('.callout, .company-card');
  
  importantSections.forEach(section => {
    section.addEventListener('click', function(e) {
      // Only copy if user selects text (optional feature)
      const selection = window.getSelection().toString();
      if (selection) {
        // User is selecting text, don't auto-copy
        return;
      }
    });
  });
}

// Track document view when page loads
document.addEventListener('DOMContentLoaded', function() {
  trackDocumentView();
  initCopyToClipboard();
});