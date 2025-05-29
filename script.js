// script.js

// Анимация появления при скролле
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Темная тема
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙 Темная тема";
darkModeToggle.classList.add("btn", "dark-toggle");
darkModeToggle.style.position = "fixed";
darkModeToggle.style.top = "20px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.zIndex = "1000";

darkModeToggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
};

document.body.appendChild(darkModeToggle);

// Форма обратной связи
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за обращение! Мы скоро свяжемся с вами.");
    this.reset();
});
