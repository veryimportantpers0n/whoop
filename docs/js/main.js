document.addEventListener('DOMContentLoaded', () => {
    console.log('Acid Green FPV Site Loaded');

    // Highlight active nav link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Staggered Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        // Stagger delay based on index (modulo 3 for grid rows)
        const delay = (index % 3) * 0.1; 
        card.style.transition = `all 0.6s ease ${delay}s`;
        observer.observe(card);
    });
});
