const menuBtn = document.getElementById('menu-btn-js');
const menu = document.querySelector('.burger-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('burger-menu--open');
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