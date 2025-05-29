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

// script.js

// Темная тема
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.body.appendChild(darkModeToggle);

// Форма обратной связи
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за обращение! Мы скоро свяжемся с вами.");
    this.reset();
});

// Админка
let adminOpen = false;

function toggleAdmin() {
    adminOpen = !adminOpen;
    const panel = document.createElement('div');
    panel.id = 'admin-popup';
    panel.style = `
        position: fixed;
        top: 60px;
        right: 10px;
        background: white;
        border: 1px solid #ccc;
        padding: 10px;
        width: 300px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        z-index: 9999;
    `;
    panel.innerHTML = `
        <h3>🔧 Админка</h3>
        <label>Заголовок:</label>
        <input type="text" id="admin-title" value="${document.getElementById('main-title').textContent}" />
        
        <label>Подзаголовок:</label>
        <input type="text" id="admin-subtitle" value="${document.getElementById('main-subtitle').textContent}" />

        <label>Текст о себе:</label>
        <textarea id="admin-about">${document.getElementById('about-text').textContent}</textarea>

        <label>Дополнительный текст:</label>
        <textarea id="admin-about2">${document.getElementById('about-text-2').textContent}</textarea>

        <button onclick="saveChanges()">Сохранить</button>
    `;
    
    if (!adminOpen) {
        document.body.appendChild(panel);
    } else {
        document.getElementById('admin-popup')?.remove();
    }
}

function saveChanges() {
    document.getElementById('main-title').textContent = document.getElementById('admin-title').value;
    document.getElementById('main-subtitle').textContent = document.getElementById('admin-subtitle').value;
    document.getElementById('about-text').textContent = document.getElementById('admin-about').value;
    document.getElementById('about-text-2').textContent = document.getElementById('admin-about2').value;

    // Сохраняем в localStorage
    localStorage.setItem('mainTitle', document.getElementById('main-title').textContent);
    localStorage.setItem('mainSubtitle', document.getElementById('main-subtitle').textContent);
    localStorage.setItem('aboutText', document.getElementById('about-text').textContent);
    localStorage.setItem('aboutText2', document.getElementById('about-text-2').textContent);

    document.getElementById('admin-popup').remove();
    adminOpen = false;
}

// Загрузка сохраненных данных
window.onload = () => {
    if (localStorage.getItem('mainTitle')) {
        document.getElementById('main-title').textContent = localStorage.getItem('mainTitle');
    }

    if (localStorage.getItem('mainSubtitle')) {
        document.getElementById('main-subtitle').textContent = localStorage.getItem('mainSubtitle');
    }

    if (localStorage.getItem('aboutText')) {
        document.getElementById('about-text').textContent = localStorage.getItem('aboutText');
    }

    if (localStorage.getItem('aboutText2')) {
        document.getElementById('about-text-2').textContent = localStorage.getItem('aboutText2');
    }
};
