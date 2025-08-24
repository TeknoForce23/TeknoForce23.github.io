document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('nav-links');

    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Menüdeki linklere tıklandığında menüyü kapatmak için
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });

});