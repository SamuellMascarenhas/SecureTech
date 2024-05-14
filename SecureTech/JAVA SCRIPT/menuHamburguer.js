document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.menunav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('toggle');
        navMenu.classList.toggle('show');
    });
});