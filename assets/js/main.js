// =========================
// Scroll-In Animations
// =========================

// Add animation class when elements enter viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

// Target elements to animate
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    '.section, .card, .trust-box, .cta-banner'
  );

  animatedElements.forEach(el => {
    el.classList.add('animate');
    observer.observe(el);
  });
});
