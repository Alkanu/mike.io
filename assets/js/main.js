/**
 * PROFESSOR MIKE PORTFOLIO WEBSITE - MAIN JAVASCRIPT
 * Vanilla JavaScript (ES6+) - Zero Frameworks
 *
 * EDITABLE CONFIGURATION SECTION:
 * Website owners can update default text values, contact details, and URLs below.
 */

const SITE_CONFIG = {
  fullName: "Professor Mike [EDITABLE LAST NAME]",
  professionalTitle: "Professor & Therapist",
  location: "New York, USA",
  phone: "+1 (XXX) XXX-XXXX",
  email: "[EDITABLE_EMAIL@example.com]",
  formspreeEndpoint: "https://formspree.io/f/[EDITABLE_FORMSPREE_ID]",
  officeAddress: "[Editable Office Address, New York, NY 10001]",
  responseNotice: "Inquiries are typically answered within 24-48 business hours.",
  socials: {
    linkedin: "",  /* e.g., "https://linkedin.com/in/professor-mike" */
    instagram: "", /* e.g., "https://instagram.com/professormike" */
    twitter: "",   /* e.g., "https://x.com/professormike" */
    facebook: ""   /* e.g., "https://facebook.com/professormike" */
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-enabled');
  initCopyrightYear();
  initMobileNavigation();
  initStickyHeader();
  initActiveNavLink();
  initAccordion();
  initFormValidation();
  initScrollReveal();
  initBackToTop();
  initSocialLinks();
});

/**
 * 1. DYNAMIC COPYRIGHT YEAR
 */
function initCopyrightYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

/**
 * 2. MOBILE NAVIGATION TOGGLE & ACCESSIBILITY
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    toggleBtn.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    navMenu.classList.toggle('active');

    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Open navigation menu');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
      toggleBtn.focus();
    }
  });

  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Open navigation menu');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/**
 * 3. STICKY HEADER ON SCROLL
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * 4. ACTIVE NAV LINK HIGHLIGHTING
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * 5. FAQ / SERVICE ACCORDION
 */
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherHeader = otherItem.querySelector('.accordion-header');
        const otherContent = otherItem.querySelector('.accordion-content');
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        if (otherContent) otherContent.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

/**
 * 6. CONTACT FORM VALIDATION & CLIENT-SIDE UX
 */
function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const formStatus = document.getElementById('form-status');

  form.addEventListener('submit', function(e) {
    let isValid = true;

    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (input) input.classList.remove('is-invalid');
    });

    if (formStatus) {
      formStatus.className = 'form-status';
      formStatus.style.display = 'none';
      formStatus.textContent = '';
    }

    if (nameInput && !nameInput.value.trim()) {
      isValid = false;
      nameInput.classList.add('is-invalid');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim()))) {
      isValid = false;
      emailInput.classList.add('is-invalid');
    }

    if (subjectInput && !subjectInput.value.trim()) {
      isValid = false;
      subjectInput.classList.add('is-invalid');
    }

    if (messageInput && !messageInput.value.trim()) {
      isValid = false;
      messageInput.classList.add('is-invalid');
    }

    if (!isValid) {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = 'Please fill out all required fields correctly before submitting.';
        formStatus.classList.add('error');
        formStatus.style.display = 'block';
      }
    }
  });
}

/**
 * 7. SCROLL REVEAL ANIMATIONS
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px 50px 0px',
    threshold: 0.01
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => {
    observer.observe(el);
    // Trigger immediate check if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.classList.add('is-visible');
    }
  });
}

/**
 * 8. BACK TO TOP BUTTON
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 9. DYNAMIC SOCIAL LINKS RENDERER
 */
function initSocialLinks() {
  const socialContainer = document.querySelectorAll('.social-links');
  if (!socialContainer.length) return;

  socialContainer.forEach(container => {
    const links = container.querySelectorAll('a[data-social]');
    links.forEach(a => {
      const socialType = a.getAttribute('data-social');
      if (socialType && SITE_CONFIG.socials[socialType]) {
        a.href = SITE_CONFIG.socials[socialType];
        a.style.display = 'inline-flex';
      } else if (a.getAttribute('href') === '#' || a.getAttribute('href') === '') {
        a.style.display = 'none';
      }
    });
  });
}
