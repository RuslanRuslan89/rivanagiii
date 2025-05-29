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

// Форма обратной связи
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за обращение! Мы скоро свяжемся с вами.");
    this.reset();
});
