// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Smooth cursor
const cursor = document.querySelector('.cursor');
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top = e.clientY - 10 + 'px';
  cursorGlow.style.left = e.clientX - 25 + 'px';
  cursorGlow.style.top = e.clientY - 25 + 'px';
});

// Hide cursor on leave
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  cursorGlow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  cursorGlow.style.opacity = '1';
});

// Navigation active state
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.style.color = 'rgba(255, 255, 255, 0.7)');
    e.target.style.color = '#fff';
  });
});

// Hero title animation
gsap.from('.hero-title', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.2,
  ease: 'power3.out'
});

gsap.from('.cta-button', {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.4,
  ease: 'power3.out'
});

gsap.from('.gradient-orb', {
  duration: 1.5,
  scale: 0.5,
  opacity: 0,
  delay: 0.3,
  ease: 'back.out'
});

// Scroll animations for sections
gsap.utils.toArray('.project-item').forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
      markers: false
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
});

// Project image parallax
gsap.utils.toArray('.project-image-wrapper').forEach((wrapper) => {
  gsap.from(wrapper.querySelector('img'), {
    scrollTrigger: {
      trigger: wrapper,
      start: 'top 50%',
      end: 'bottom 50%',
      scrub: 0.5,
    },
    y: 50,
    duration: 1
  });
});

// About section animation
gsap.from('.about-text', {
  scrollTrigger: {
    trigger: '.about-section',
    start: 'top 80%',
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

gsap.from('.about-visual', {
  scrollTrigger: {
    trigger: '.about-section',
    start: 'top 80%',
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 0.2
});

// Skill cards stagger animation
gsap.from('.skill-category', {
  scrollTrigger: {
    trigger: '.skills-section',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  stagger: 0.1
});

// Contact section animation
gsap.from('.contact-link', {
  scrollTrigger: {
    trigger: '.contact-section',
    start: 'top 80%',
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  stagger: 0.15
});

// Section title animations
gsap.utils.toArray('.section-title').forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
});

// Parallax background effect
gsap.to('.hero::before', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.5,
    onUpdate: (self) => {
      gsap.set('.hero::before', {
        y: self.getVelocity() * 0.1
      });
    }
  }
});

// Interactive hover effects for better UX
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    gsap.to(item, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  item.addEventListener('mouseleave', () => {
    gsap.to(item, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// Intersection observer for lazy animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
    }
  });
}, observerOptions);

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        scrollTo: target,
        duration: 1,
        ease: 'power2.inOut'
      });
    }
  });
});

// Add scroll velocity animation
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  gsap.set('.gradient-orb', {
    y: scrollTop * 0.3
  });
});

// Stagger animation for stat items
gsap.from('.stat-item', {
  scrollTrigger: {
    trigger: '.stats',
    start: 'top 80%',
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'back.out',
  stagger: 0.1
});

console.log('Portfolio loaded with smooth scroll animations and interactive effects!');
