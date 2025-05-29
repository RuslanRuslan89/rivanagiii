// script.js

// Темная тема по умолчанию
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
    } else {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
});

// Анимация загрузки
window.addEventListener('load', function () {
    document.getElementById('loading').style.display = 'none';
});

// Анимация при скролле
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

// Форма обратной связи
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за обращение! Мы скоро свяжемся с вами.");
    this.reset();
});
