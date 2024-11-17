// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Animate hero content
gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.hero-image', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
});

// Animate feature cards
gsap.from('.feature-card', {
    scrollTrigger: {
        trigger: '#features',
        start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Parallax effect for about section
// Parallax effect for about section
gsap.to('.parallax-content', {
    scrollTrigger: {
        trigger: '.parallax-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    },
    y: -50,
    ease: 'none'
});



