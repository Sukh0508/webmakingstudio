const timeline = gsap.timeline()

timeline.from("#logo",{
    y:-100,
    opacity:0,
    duration:1,


 })
 timeline.fromTo(
  "#menu li",
  { y: -100, opacity: 0 }, // start
  { y: 0, opacity: 1, duration: 1, stagger: 1 } // end
)
timeline.from("#heading span",{
    y:-100,
    opacity:0,
    duration:0.5,
    stagger:1,
})
timeline.from("#img-lap",{
    y:-100,
    opacity:0,
    duration:1,
})
timeline.from("#head-text p",{
    y:-100,
    opacity:0,
    duration:1,
})
timeline.from("#men-image",{
    x:-150,
    opacity:0,
    duration:2,
})
timeline.from("#about-anime h1", {
    x: 100,       // start 100px to the right
    opacity: 0,   // start invisible
    duration: 1,
    ease: "power2.out"
});
timeline.from("#about-anime p", {
    x: 100,       // start 100px to the right
    opacity: 0,   // start invisible
    duration: 1,
    ease: "power2.out"
});
  timeline.from("#service-txt",{
    y:-100,
    opacity:0,
    duration:1,
})
  timeline.from("#li-txt", {
    x: -100,
    opacity: 0,
    duration: 2,
});
  timeline.from("#footer-head",{
    y:-100,
    opacity:0,
    duration:1,
})
 timeline.from("#custome",{
    y:-100,
    opacity:0,
    duration:1,
})
 timeline.from("#social",{
    y:-100,
    opacity:0,
    duration:1,
})
 timeline.from("#conatct",{
    y:-100,
    opacity:0,
    duration:1,
})
timeline.from("#email",{
    y:-100,
    opacity:0,
    duration:1,
})







