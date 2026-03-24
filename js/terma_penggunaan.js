/**
 * SmartWills WasiatKu — terma_penggunaan.js
 * Page-specific JavaScript for Terms of Use page
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
  
  // Initialize print button
  initPrintButton();
  
  // Initialize active TOC highlighting
  highlightActiveTOCItem();
  
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
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
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
 * Initialize print button
 */
function initPrintButton() {
  const printBtn = document.getElementById('printBtn');
  
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      window.print();
    });
  }
}

/**
 * Optional: Track document view for analytics
 */
function trackDocumentView() {
  console.log('Terms of Use document viewed');
  
  // Example: Google Analytics tracking
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'view_legal_document', {
  //     'event_category': 'Legal Documents',
  //     'event_label': 'Terms of Use'
  //   });
  // }
}

/**
 * Optional: Add copy to clipboard for important sections
 */
function initCopyToClipboard() {
  const importantSections = document.querySelectorAll('.callout, .refund-info-box');
  
  importantSections.forEach(section => {
    section.addEventListener('click', function(e) {
      // Optional: Copy section text to clipboard
      // Only if user selects text, don't auto-copy
    });
  });
}

/**
 * Optional: Add last updated tooltip
 */
function initLastUpdatedTooltip() {
  const lastUpdated = document.querySelector('.last-updated');
  
  if (lastUpdated) {
    lastUpdated.setAttribute('title', 'Kemaskini terakhir dokumen ini');
  }
}

// Track page view
trackDocumentView();

// Initialize optional features
initCopyToClipboard();
initLastUpdatedTooltip();