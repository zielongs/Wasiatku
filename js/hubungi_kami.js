/**
 * SmartWills WasiatKu — hubungi_kami.js
 * Page-specific JavaScript for Contact Us page
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize form submission handler
  initFormHandler();
  
  // Initialize scroll to top button (if not already in global script)
  initScrollToTop();
  
  // Initialize navbar scroll effect (if not already in global script)
  initNavbarScroll();
  
  // Initialize fade-in animations (if not already in global script)
  initFadeInAnimations();
  
  // Initialize dropdown menu (if not already in global script)
  initDropdownMenu();
  
});

/**
 * Initialize form submission handler
 */
function initFormHandler() {
  const submitBtn = document.getElementById('btnHantar');
  
  if (submitBtn) {
    submitBtn.addEventListener('click', handleFormSubmit);
  }
}

/**
 * Handle form submission with validation
 */
function handleFormSubmit() {
  // Get form elements
  const nama = document.getElementById('nama');
  const tel = document.getElementById('tel');
  const emel = document.getElementById('emel');
  const mesej = document.getElementById('mesej');
  const msgDiv = document.getElementById('form-msg');
  
  // Validate required fields
  if (!nama || !tel || !emel || !mesej) {
    showFormMessage('⚠️ Sila lengkapkan semua medan yang bertanda *.', 'error');
    return;
  }
  
  const namaValue = nama.value.trim();
  const telValue = tel.value.trim();
  const emelValue = emel.value.trim();
  const mesejValue = mesej.value.trim();
  
  // Check if all required fields are filled
  if (!namaValue || !telValue || !emelValue || !mesejValue) {
    showFormMessage('⚠️ Sila lengkapkan semua medan yang bertanda *.', 'error');
    return;
  }
  
  // Validate email format
  if (!isValidEmail(emelValue)) {
    showFormMessage('⚠️ Sila masukkan alamat e-mel yang sah.', 'error');
    return;
  }
  
  // Validate phone number (basic validation)
  if (!isValidPhone(telValue)) {
    showFormMessage('⚠️ Sila masukkan nombor telefon yang sah.', 'error');
    return;
  }
  
  // Submit form
  submitForm({
    nama: namaValue,
    tel: telValue,
    emel: emelValue,
    mesej: mesejValue,
    topik: document.getElementById('topik')?.value || ''
  });
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
 * Submit form data (simulated API call)
 */
function submitForm(formData) {
  const btn = document.getElementById('btnHantar');
  const btnText = document.getElementById('btnText');
  const btnSpinner = document.getElementById('btnSpinner');
  
  // Disable button and show loading state
  btn.disabled = true;
  if (btnText) btnText.style.display = 'none';
  if (btnSpinner) btnSpinner.style.display = 'inline';
  
  // Simulate API call (replace with actual AJAX request)
  setTimeout(() => {
    // Re-enable button
    btn.disabled = false;
    if (btnText) btnText.style.display = 'inline';
    if (btnSpinner) btnSpinner.style.display = 'none';
    
    // Show success message
    showFormMessage('✅ Mesej anda telah berjaya dihantar! Kami akan menghubungi anda tidak lama lagi.', 'success');
    
    // Clear form
    clearForm();
    
    // Show toast notification
    if (typeof showToast === 'function') {
      showToast('Mesej berjaya dihantar! 📧');
    } else {
      console.log('Form submitted successfully');
    }
    
    // Optional: Send data to server via AJAX
    // sendToServer(formData);
    
  }, 1500);
}

/**
 * Send form data to server (optional - implement as needed)
 */
function sendToServer(formData) {
  // Example AJAX implementation
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
    showFormMessage('⚠️ Ralat berlaku. Sila cuba sebentar lagi.', 'error');
  });
}

/**
 * Show form message
 */
function showFormMessage(message, type) {
  const msgDiv = document.getElementById('form-msg');
  
  if (msgDiv) {
    msgDiv.className = `form-msg ${type}`;
    msgDiv.textContent = message;
    msgDiv.style.display = 'block';
    
    // Auto-hide after 6 seconds
    setTimeout(() => {
      msgDiv.style.display = 'none';
    }, 6000);
  }
}

/**
 * Clear form fields
 */
function clearForm() {
  const fields = ['nama', 'tel', 'emel', 'mesej'];
  fields.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.value = '';
  });
  
  // Reset dropdown to default
  const topikSelect = document.getElementById('topik');
  if (topikSelect) topikSelect.value = '';
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
 * Initialize dropdown menu
 */
function initDropdownMenu() {
  // Make toggleDropdown available globally if needed
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
 * Optional: Track contact form submissions for analytics
 */
function trackFormSubmission(formData) {
  console.log('Contact form submitted:', formData);
  
  // Example: Google Analytics tracking
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'contact_form_submit', {
  //     'event_category': 'Contact',
  //     'event_label': formData.topik || 'General',
  //     'value': 1
  //   });
  // }
  
  // Example: Facebook Pixel tracking
  // if (typeof fbq !== 'undefined') {
  //   fbq('track', 'Contact', {
  //     content_name: 'Contact Form Submission',
  //     content_category: 'Contact Page'
  //   });
  // }
}