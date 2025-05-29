// script.js

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

// Эффект затухания при скролле
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
// Подсветка активного пункта меню
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav a");

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});
// Кнопка "Наверх"
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
