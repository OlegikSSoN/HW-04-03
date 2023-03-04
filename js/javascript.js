const BURGER_MENU = document.querySelector('.burger_menu');
const MOBILE_MENU = document.querySelector('.mobile_menu');
const MOBILE_MENU_LIST = document.querySelectorAll('.mobile_menu a');
const HEADER = document.querySelectorAll('.header');

const switchMobileMenu = () => {
    BURGER_MENU.classList.toggle('active');
    MOBILE_MENU.classList.toggle('active');
    HEADER.classList.toggle('active');
};

BURGER_MENU.addEventListener('click', () => {
    switchMobileMenu();
});

MOBILE_MENU_LIST.forEach((link) => {
    link.addEventListener('click', () => {
        switchMobileMenu();
    });
});