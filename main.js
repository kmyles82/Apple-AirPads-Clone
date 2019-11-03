const intro = document.querySelector('.intro');
const video = document.querySelector('video');
const text = document.querySelector('h1');
//End section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        duration: 9000,
        triggerElement: intro,
        triggerHook: 0
    })
    .addIndicators()
    .setPin(intro)
    .addTo(controller);