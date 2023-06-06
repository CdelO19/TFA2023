"use strict";
import 'burger.js';

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


if (window.location.href.includes('methodes.html')) {
    import ('slider.js');
}

if (window.location.href.includes('developpement.html')) {
    import ('animation.js');
}

if (window.location.href.includes('presentation.html')) {
    import ('animation.js');
}








