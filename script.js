const menuBar = document.getElementById('menuBar');
const navLinks = document.getElementById('nav-links');


menuBar.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});