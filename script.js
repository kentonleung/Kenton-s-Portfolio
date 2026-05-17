gsap.registerPlugin(ScrollTrigger);

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(other => other.classList.remove('active'));
    link.classList.add('active');
  });
});

function animateSection(selector, options = {}) {
  const elements = gsap.utils.toArray(selector);
  elements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        ...options.trigger,
      },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      stagger: options.stagger || 0,
    });
  });
}

animateSection('.hero-copy', { trigger: {} });
animateSection('.section h2');
animateSection('.project-card', { stagger: 0.12 });
animateSection('.info-card', { stagger: 0.08 });
animateSection('.skill-pill', { stagger: 0.08 });
animateSection('.contact-grid a', { stagger: 0.08 });

gsap.from('.hero-card', {
  duration: 1,
  scale: 0.94,
  opacity: 0,
  y: 30,
  ease: 'back.out(1.4)',
  delay: 0.2
});

gsap.to('.hero-card', {
  y: 10,
  duration: 6,
  ease: 'sine.inOut',
  repeat: -1,
  yoyo: true,
  delay: 0.5
});

gsap.to('.ambient-dot.dot-a', {
  x: 40,
  y: 80,
  duration: 28,
  ease: 'sine.inOut',
  repeat: -1,
  yoyo: true
});

gsap.to('.ambient-dot.dot-b', {
  x: -48,
  y: 60,
  duration: 22,
  ease: 'sine.inOut',
  repeat: -1,
  yoyo: true
});

gsap.to('.ambient-dot.dot-c', {
  x: 30,
  y: -60,
  duration: 32,
  ease: 'sine.inOut',
  repeat: -1,
  yoyo: true
});

const sectionBlocks = gsap.utils.toArray('.section');
sectionBlocks.forEach((section) => {
  gsap.from(section.querySelector('.section-inner'), {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse'
    },
    y: 70,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 90%',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: index * 0.08
  });

  card.addEventListener('mouseenter', () => {
    gsap.to(card, { scale: 1.02, duration: 0.25, ease: 'power2.out' });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { scale: 1, duration: 0.25, ease: 'power2.out' });
  });
});

const projectHero = document.querySelector('.project-page header.hero');
if (projectHero) {
  gsap.from('.project-page .hero-top', {
    duration: 1,
    y: -40,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.project-page .hero-copy', {
    duration: 1,
    y: 40,
    opacity: 0,
    delay: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.project-page .project-detail', {
    scrollTrigger: {
      trigger: '.project-page .project-detail',
      start: 'top 85%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.project-page .project-section', {
    scrollTrigger: {
      trigger: '.project-page .project-section',
      start: 'top 85%',
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12
  });

  gsap.utils.toArray('.project-page .project-visual-grid img').forEach((img) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  projectHero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    gsap.to('.project-page .hero-copy', { x, y, duration: 0.5, ease: 'power2.out' });
  });

  projectHero.addEventListener('mouseleave', () => {
    gsap.to('.project-page .hero-copy', { x: 0, y: 0, duration: 0.5, ease: 'power3.out' });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('scroll', () => {
  const heroCard = document.querySelector('.hero-card');
  if (heroCard) {
    const offset = window.scrollY * 0.08;
    heroCard.style.transform = `translateY(${offset}px)`;
  }
});

console.log('Homepage animations initialized.');
