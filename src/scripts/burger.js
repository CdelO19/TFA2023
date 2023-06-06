//burger menu

const btn = document.querySelector('.burgermenu');
const lineun = document.querySelector('#line__un');
const linede = document.querySelector('#line__de');
const linetr = document.querySelector('#line__tr');
const menu = document.querySelector('.menu');
const hd = document.querySelector('.hd');

btn.addEventListener('click', function(){
    lineun.classList.toggle('line__open');
    linede.classList.toggle('line__open--md');
    linetr.classList.toggle('line__none');
    menu.classList.toggle('menu--open');
    hd.classList.toggle('hd--open');
});