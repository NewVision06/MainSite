navbar = document.getElementById('nav');
navLogo = document.getElementById('nav-logo');
navbarJoinBtn = document.getElementById('navbar-QQ-btn');

addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
        navLogo.setAttribute('src', './assets/img/logo-black@1x.webp');
        navbar.setAttribute('data-bs-theme', 'light');
        navbarJoinBtn.classList.remove('btn-outline-light');
        navbarJoinBtn.classList.add('btn-outline-dark');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navLogo.setAttribute('src', './assets/img/logo-white@1x.webp');
        navbar.setAttribute('data-bs-theme', 'dark');
        navbarJoinBtn.classList.remove('btn-outline-dark');
        navbarJoinBtn.classList.add('btn-outline-light');
    }
});

