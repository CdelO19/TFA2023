"use strict";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from("#bloc-one", {
  scaleY: 0,
  transformOrigin: "top left",
  scrollTrigger:{
    trigger: "#bloc-one",
    start: "0% 50%",
  } 
});

gsap.from("#bloc-two", {
    scaleY: 0,
    transformOrigin: "top left",
    scrollTrigger:{
      trigger: "#bloc-two",
      start: "0% 50%",
    } 
  });

  gsap.from("#bloc-thr", {
    scaleY: 0,
    transformOrigin: "top left",
    scrollTrigger:{
      trigger: "#bloc-thr",
      start: "0% 50%",
    } 
  });

//animation entre les pages
const PageAnimations = document.querySelectorAll(".js-anim");

PageAnimations.forEach(function(PageAnimation){
    PageAnimation.addEventListener("click", function(e){

        e.preventDefault();
        let newLocation = this.href;
        
        document.body.classList.add("page-animation");
        document.body.addEventListener("animationend", function(){
            window.location = newLocation;
        });
    })
});
 

//burger menu

const btn = document.querySelector('.burgermenu');
const burger = document.querySelector('.burger');
const lineun = document.querySelector('#line__un');
const linede = document.querySelector('#line__de');
const linetr = document.querySelector('#line__tr');
const menu = document.querySelector('.menu');
const hd = document.querySelector('.hd');

btn.addEventListener('click', function(){
    console.log('hello');
    burger.classList.toggle('burger--open');
    lineun.classList.toggle('line__open');
    linede.classList.toggle('line__open--md');
    linetr.classList.toggle('line__none');
    menu.classList.toggle('menu--open');
    hd.classList.toggle('hd--open');
});

//slider
const btnPrev = document.querySelector(".slider__btn--prev");
const btnNext = document.querySelector(".slider__btn--next");
btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);

//touche du clavier
document.addEventListener('keydown', function(e){
    if(e.code == "ArrowLeft"){
        prev();
    }else if(e.code == "ArrowRight"){
        next();
    }
});

//Hammer

const slider = document.querySelector(".slider"),
    hammerSlider =  new Hammer(slider);

hammerSlider.on("swipeleft", next);
hammerSlider.on("swiperight", prev);

function next(){
    let elShow = document.querySelector(".slider__el--show"),
        elNext = elShow.nextElementSibling;

    elShow.classList.remove("slider__el--show");
    if(elNext){
        elNext.classList.add("slider__el--show");
    }else{
        let elFisrt = elShow.parentNode.firstElementChild;
        elFisrt.classList.add("slider__el--show");
    }

    let elShowrond = document.querySelector(".bgrond"),
        elNextrond = elShowrond.nextElementSibling;

    elShowrond.classList.remove("bgrond");
    if(elNextrond){
        elNextrond.classList.add("bgrond");
    }else{
        let elFisrtrond = elShowrond.parentNode.firstElementChild;
        elFisrtrond.classList.add("bgrond");
    }
 };

 function prev(){
    let elShow = document.querySelector(".slider__el--show"),
        elPrev = elShow.previousElementSibling;

    elShow.classList.remove("slider__el--show");
    if(elPrev){
        elPrev.classList.add("slider__el--show");
    }else{
        let elLast = elShow.parentNode.lastElementChild;
        elLast.classList.add("slider__el--show");
    }

    let elShowrond = document.querySelector(".bgrond"),
        elPrevrond = elShowrond.previousElementSibling;

    elShowrond.classList.remove("bgrond");
    if(elPrevrond){
        elPrevrond.classList.add("bgrond");
    }else{
        let elLastrond = elShowrond.parentNode.lastElementChild;
        elLastrond.classList.add("bgrond");
    }
 };




