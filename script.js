document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = menuToggle.querySelector('i');
    if (mobileNav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
  
  // Close mobile menu when clicking a nav link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', formData);
      
      // Reset form
      contactForm.reset();
      
      // Show success message
      formSuccess.style.display = 'block';
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 3000);
    });
  }
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    observer.observe(title);
  });
  
  // Observe timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    observer.observe(item);
  });

  // Observe animate items
  const animateItems = document.querySelectorAll('.animate-item');
  animateItems.forEach(item => {
    observer.observe(item);
  });
});