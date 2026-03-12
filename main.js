lucide.createIcons();

document.getElementById('year').textContent = new Date().getFullYear();


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('glass-nav');
        navbar.classList.replace('py-4', 'py-3');
    } else {
        navbar.classList.remove('glass-nav');
        navbar.classList.replace('py-3', 'py-4');
    }
});


const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

const reveals = document.querySelectorAll('.reveal');
reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});
