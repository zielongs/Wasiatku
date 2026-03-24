/**
 * SmartWills WasiatKu — perkongsian.js
 * Page-specific JavaScript for Partnership page
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize form submission
  initFormSubmission();
  
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
  
  // Initialize hero stats animation
  initStatsAnimation();
  
});

/**
 * Initialize form submission handler
 */
function initFormSubmission() {
  const submitBtn = document.getElementById('btnSubmit');
  
  if (submitBtn) {
    submitBtn.addEventListener('click', handleFormSubmit);
  }
}

/**
 * Handle form submission with validation
 */
function handleFormSubmit() {
  // Get form elements
  const nama = document.getElementById('f-nama');
  const tel = document.getElementById('f-tel');
  const emel = document.getElementById('f-emel');
  const mesej = document.getElementById('f-mesej');
  const resultDiv = document.getElementById('perk-result');
  
  // Validate required fields
  if (!nama || !tel || !emel || !mesej) return;
  
  const namaValue = nama.value.trim();
  const telValue = tel.value.trim();
  const emelValue = emel.value.trim();
  const mesejValue = mesej.value.trim();
  
  // Check if all required fields are filled
  if (!namaValue || !telValue || !emelValue || !mesejValue) {
    showFormMessage(resultDiv, '⚠️ Sila lengkapkan semua medan yang bertanda *.', 'error');
    return;
  }
  
  // Validate email format
  if (!isValidEmail(emelValue)) {
    showFormMessage(resultDiv, '⚠️ Sila masukkan alamat e-mel yang sah.', 'error');
    return;
  }
  
  // Validate phone number
  if (!isValidPhone(telValue)) {
    showFormMessage(resultDiv, '⚠️ Sila masukkan nombor telefon yang sah.', 'error');
    return;
  }
  
  // Collect form data
  const formData = {
    nama: namaValue,
    tel: telValue,
    emel: emelValue,
    profesion: document.getElementById('f-profesion')?.value || '',
    mesej: mesejValue
  };
  
  // Submit form
  submitPartnershipForm(formData, resultDiv);
}

/**
 * Submit partnership form (simulated API call)
 */
function submitPartnershipForm(formData, resultDiv) {
  const submitBtn = document.getElementById('btnSubmit');
  const originalText = submitBtn?.innerHTML;
  
  // Disable button and show loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Menghantar...';
  }
  
  // Simulate API call (replace with actual AJAX request)
  setTimeout(() => {
    // Re-enable button
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
    
    // Show success message
    showFormMessage(resultDiv, '✅ Terima kasih! Pertanyaan anda telah dihantar. Pasukan kami akan menghubungi anda tidak lama lagi.', 'success');
    
    // Clear form
    clearForm();
    
    // Track form submission
    trackPartnershipInterest(formData);
    
    // Show toast notification if available
    if (typeof showToast === 'function') {
      showToast('Pertanyaan berjaya dihantar! 📧');
    }
    
  }, 1500);
}

/**
 * Clear form fields
 */
function clearForm() {
  const fields = ['f-nama', 'f-tel', 'f-emel', 'f-profesion', 'f-mesej'];
  fields.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.value = '';
  });
}

/**
 * Show form message
 */
function showFormMessage(resultDiv, message, type) {
  if (!resultDiv) return;
  
  resultDiv.textContent = message;
  resultDiv.className = `form-result-msg ${type}`;
  
  // Auto-hide after 6 seconds
  setTimeout(() => {
    resultDiv.style.display = 'none';
  }, 6000);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Malaysia format)
 */
function isValidPhone(phone) {
  // Remove spaces and special characters
  const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
  // Check if it's a valid Malaysian phone number (10-11 digits, starting with 01)
  const phoneRegex = /^01[0-9]{8,9}$/;
  return phoneRegex.test(cleanPhone);
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
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  
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
 * Initialize hero stats animation (count-up effect)
 */
function initStatsAnimation() {
  const statsSection = document.querySelector('.hero-left');
  const statNumbers = document.querySelectorAll('.hero-stat-num');
  
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
 * Animate stat numbers
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
 * Track partnership interest for analytics
 */
function trackPartnershipInterest(formData) {
  console.log('Partnership interest submitted:', formData);
  
  // Example: Google Analytics tracking
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'partnership_interest', {
  //     'event_category': 'Partnership',
  //     'event_label': formData.profesion || 'Not specified',
  //     'value': 1
  //   });
  // }
  
  // Example: Facebook Pixel tracking
  // if (typeof fbq !== 'undefined') {
  //   fbq('track', 'Lead', {
  //     content_name: 'Partnership Interest',
  //     content_category: 'Partnership Form',
  //     content_type: 'Partnership'
  //   });
  // }
}

/**
 * Optional: Add hover animations for benefit cards
 */
function initBenefitCardAnimations() {
  const cards = document.querySelectorAll('.benefit-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
}

/**
 * Optional: Add click tracking for CTA buttons
 */
function initCTATracking() {
  const ctaButtons = document.querySelectorAll('.btn-daftar, .btn-join, .btn-portal');
  
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const buttonText = this.innerText.trim();
      console.log('CTA clicked:', buttonText);
      
      // Track CTA click
      // if (typeof gtag !== 'undefined') {
      //   gtag('event', 'cta_click', {
      //     'event_category': 'Partnership',
      //     'event_label': buttonText
      //   });
      // }
    });
  });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
  initBenefitCardAnimations();
  initCTATracking();
});