'use strict'

document.addEventListener("DOMContentLoaded", () => {
 const gumburger = document.querySelector('.gamburger'),
       menu = document.querySelector('.menu_for_adaptive'),
       navElem = document.querySelectorAll('.navigation_elem'),
       callElem = document.querySelector('.number');

        gumburger.addEventListener('click', () => {
            gumburger.classList.toggle('gamburger_active');
            menu.classList.toggle('menu_for_adaptive_active');
        });

        navElem.forEach(elem => {
            elem.addEventListener('click', () => {
                gumburger.classList.toggle('gamburger_active');
                menu.classList.toggle('menu_for_adaptive_active');
            });
        });

        callElem.addEventListener('click', () => {
            gumburger.classList.toggle('gamburger_active');
            menu.classList.toggle('menu_for_adaptive_active');
        });
});