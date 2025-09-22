gsap.from(".navParent", {
    duration: 0.5,
    top: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2
  });
  
gsap.from(".heroItm", {duration: 0.5, y: 50, opacity: 0, ease: "power2.out", delay: 0.2, stagger: 0.3});

gsap.from(".serviceItm", {duration: 0.5, y: 50, opacity: 0, ease: "power2.out", delay: 0.2, stagger: 0.3, scrollTrigger: {
    trigger: ".serviceItm",
    start: "top 90%",
    end: "bottom 50%",
    toggleActions: "play none none none",
    scrub: true
}});

const allItems = [
    ".bridalItm",
    ".partyItm",
    ".haldiItm",
    ".preItm",
    ".maternityItm",
    ".brandItm",
    ".mehandiItm"
  ];
  
  allItems.forEach(selector => {
    gsap.utils.toArray(selector).forEach(item => {
      gsap.from(item, {
        duration: 0.1,
        y: 50,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          scrub: true
        }
      });
    });
  });


  // Simple infinite marquee scroll left to right
gsap.to(".marquee", {
    xPercent: -50,        // move half its width (since duplicated)
    ease: "none",         // no easing for a smooth constant speed
    duration: 6,         // adjust speed (higher = slower)
    repeat: -1            // infinite loop
  });
  


  // If screen width >= 1024px (desktop)
  if (window.innerWidth >= 1024) {
    document.querySelector('.my-marquee').setAttribute('scrollamount', '15');
  }
