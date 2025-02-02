// Loading Screen
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
});

// Glitch Effect
function cyberGlitch() {
    document.querySelectorAll('.glitch').forEach(element => {
        element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    });
    requestAnimationFrame(cyberGlitch);
}
cyberGlitch();

// Hologram Tilt Effect
document.querySelectorAll('.hologram-img').forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.25 });

document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
