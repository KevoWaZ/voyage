let controller = new ScrollMagic.Controller();

let scene1 = new ScrollMagic.Scene({
    triggerElement: '.top',
    triggerHook: 0.8
})

.setClassToggle('.top', 'show')
.addTo(controller);

let scene2 = new ScrollMagic.Scene({
    triggerElement: '.gallery',
    triggerHook: 0.8
})

.setClassToggle('.gallery', 'show')
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
    triggerElement: '.blogCard',
    triggerHook: 0.8
})

.setClassToggle('.blogCard', 'show')
.addTo(controller);

let scene4 = new ScrollMagic.Scene({
    triggerElement: '.cContainer',
    triggerHook: 0.8
})

.setClassToggle('.cContainer', 'show')
.addTo(controller);