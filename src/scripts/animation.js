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
