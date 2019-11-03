const intro = document.querySelector('.intro');
const video = document.querySelector('video');
const text = document.querySelector('h1');
//End section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.controller();

const scene = new ScrollMagic.scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
})
    .addTo(controller);
