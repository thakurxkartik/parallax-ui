let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.main-title', 3, {y: -100})
.to('.moonimg', 3, {y: -300}, '-=3')
.to('.bg1', 3, {y: 50}, '-=3');

let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: "100%",
    triggerHoook: 0.5,
})

.setTween(timeline)
.setPin('section')
.addTo(controller);