const menuBtn = document.getElementById('menu-btn-js');
const menu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.menu-js');
const navContainer = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('burger-menu--open');
    mainMenu.classList.toggle('menu--mob');
    mainMenu.classList.toggle('menu');
    navContainer.classList.toggle('container');
});

const swiper = new Swiper('.swiper', {
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
        },
        769: {
            slidesPerView: 4,
            navigation: {
                nextEl: '.btn-swiper-next',
                prevEl: '.btn-swiper-prev',
              },
        },
    }
})