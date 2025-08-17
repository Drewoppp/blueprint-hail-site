// === Header Nav Toggle ===
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('nav-open', isOpen);
  });

  // Close when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
  });
}

// ✅ Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  document.getElementById('formResponse').textContent = `Thank you for your message, ${name}! We will get back to you shortly.`;

  this.reset();
});

// ✅ Smooth scroll for nav links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ✅ Slide-in animation for "Our Process" cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.slide-in').forEach(el => {
  observer.observe(el);
});

// Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordionBody = header.nextElementSibling;
      const icon = header.querySelector('.icon');

      const isActive = header.classList.contains('active');

      // Close all items
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.style.maxHeight = null;
        h.querySelector('.icon').textContent = '+';
      });

      // If it wasn't already active, open it
      if (!isActive) {
        header.classList.add('active');
        accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        icon.textContent = '−';
      }
    });
  });
});

//photogalleryarrows
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Add this inside script.js or before </body>
const stepCards = document.querySelectorAll('.step-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

stepCards.forEach(card => observer.observe(card));
