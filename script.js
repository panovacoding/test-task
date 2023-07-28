const menuBtn = document.getElementById('menu-btn-js');
const menu = document.querySelector('.burger-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('burger-menu--open');
})