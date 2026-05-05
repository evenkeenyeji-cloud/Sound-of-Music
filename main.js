// ── 1. Highlight the active nav link based on current page ──
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
var navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(function(link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// ── 2. Hamburger menu open/close ──
var toggleBtn = document.getElementById('nav-toggle');
var navMenu   = document.getElementById('nav-links');

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener('click', function() {
    navMenu.classList.toggle('open');
  });
}

// ── 3. Fade elements in as you scroll down ──
var fadeItems = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', function() {
  fadeItems.forEach(function(el) {
    var top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 40) {
      el.classList.add('visible');
    }
  });
});

// Trigger once on load for anything already in view
window.dispatchEvent(new Event('scroll'));