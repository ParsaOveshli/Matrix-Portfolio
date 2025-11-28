// Matrix Background Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const chars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی";
const fontSize = 14;
const columns = width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    // Slight fade effect
    ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#0F0"; // Green text
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar Animation
gsap.from("#navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

// Hero Content Animation
gsap.from(".hero-content > *", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".hero-image", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    delay: 0.8
});

// About Section Animation
gsap.from(".about-img-container", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".about-text-container > *", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Skills Progress Bars
const progressBars = document.querySelectorAll('.skill-progress');
progressBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.to(bar, {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 75%",
        },
        width: width,
        duration: 1.5,
        ease: "power2.out"
    });
});

// Skill Cards Stagger
gsap.from(".skill-card", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)"
});

// Projects Animation
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 75%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Contact Form Animation
gsap.from("#contact form", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
    },
    scale: 0.95,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});