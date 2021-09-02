let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.main-moon', 3, {y: -250})
.fromTo('.bg1', {y: -50} , {y: 0, duration: 3}, '-=3')
.to('.content', 3, {top:'0%'}, "-=3")
.fromTo('.content-images', 3, {opacity: 0}, {opacity: 1, duration: 2})
.fromTo('.text', 3, {opacity: 0}, {opacity: 1, duration: 2})

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);