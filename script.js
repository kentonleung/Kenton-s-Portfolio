const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .project-card, .hero-copy, .section-heading, .contact-card').forEach((section) => {
  section.classList.add('reveal');
  observer.observe(section);
});
