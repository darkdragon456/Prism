const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Handle Theme Switching
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    
    // Update Icon
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    
    // Store user preference
    localStorage.setItem('prism-theme', isLight ? 'light' : 'dark');
});

// Load Saved Theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('prism-theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        icon.className = 'fas fa-sun';
    }
});

// Navbar Shrink Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "0.8rem 8%";
    } else {
        nav.style.padding = "1.2rem 8%";
    }
});