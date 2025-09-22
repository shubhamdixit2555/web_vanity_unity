// import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  smoothWheel: true,
  smoothTouch: true,
  lerp: 0.1, // smoothing factor
  // No wrapper/content passed → uses document directly
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
