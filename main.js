const intro = document.querySelector('.intro');
const video = document.querySelector('video');
const text = document.querySelector('h1');
const revo = document.querySelector('#revo');
const nice = document.querySelector('#nice');
const xmas = document.querySelector('#xmas');
//End section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.Controller();

//scenes
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//text animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 })
const addRevoAnim = TweenMax.fromTo(revo, 3,{opacity: 1}, {opacity: 0})
const removeRevoAnim = TweenMax.fromTo(revo, 3,{opacity: 0}, {opacity: 1})
// const niceAnim = TweenMax.fromTo(nice, 3,{opacity: 1}, {opacity: 0})
// const xmasAnim = TweenMax.fromTo(xmas, 3, {opacity: 1 }, { opacity: 0})

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 2
})
    .setTween(addRevoAnim)
    .addTo(controller)

let scene3 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 3
})
    .setTween(removeRevoAnim)
    .addTo(controller)

    
// let scene3 = new ScrollMagic.Scene({
//     duration: 3000,
//     triggerElement: intro,
//     triggerHook: 3
// })
//     .setTween(niceAnim)
//     .addTo(controller);

// let scene4 = new ScrollMagic.Scene({
//     duration: 3000,
//     triggerElement: intro,
//     triggerHook: 4
// })
//     .setTween(xmasAnim)
//     .addTo(controller);

// let scene5 = new ScrollMagic.Scene({
    
//     duration: 3000,
//     triggerElement: intro,
//     triggerHook: 5
// })
//     .setTween(textAnim)
//     .addTo(controller);

console.log(scene2)


//video animation
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = scrollpos;
}, 180);