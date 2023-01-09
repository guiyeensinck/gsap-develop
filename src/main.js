import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
//get scroll value

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger, SplitText)

let texto = new SplitText('.title-home', {
  type: 'words',
})
let palabras = texto.words

let textoReel = new SplitText('.text-reel', {
  type: 'words',
})
let palabrasReel = textoReel.words

/* 
gsap.from('.heading', {
  opacity: 0,
  delay: 1,
})

let palabras = texto.words

*/

gsap.fromTo(
  '.linearoja',
  {
    y: 500,
    opacity: 0.8,
  },
  {
    y: 0,
    opacity: 1,
    ease: 'Power2.easeOut',
    duration: 1,
    scrollTrigger: {
      trigger: '.reel',
      toggleActions: 'restart pause restart pause',
      start: 'top 95%',
      scrub: true,
      end: 'top 20%',

      markers: true,
    },
  }
)

gsap.fromTo(
  '.wrapper-reel',
  {
    y: 1000,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    ease: 'back.out',
    duration: 2,
    scrollTrigger: {
      trigger: '.reel',
      toggleActions: 'restart pause restart pause',
      start: 'top 80%',
      scrub: true,

      markers: false,
    },
  }
)

gsap.fromTo(
  '.title-reel',
  {
    y: 1000,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    ease: 'back.out',
    duration: 2,
    scrollTrigger: {
      trigger: '.reel',
      toggleActions: 'restart pause restart pause',
      start: 'top 80%',
      scrub: true,

      markers: false,
    },
  }
)
gsap.from(palabras, {
  opacity: 0,
  yPercent: 200,
  ease: 'back.out',
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.title-home',
    toggleActions: 'restart pause restart pause',
    start: 'top 80%',
    scrub: true,

    markers: false,
  },
})

gsap.from(palabrasReel, {
  opacity: 0,
  yPercent: 100,
  ease: 'back.out',
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.reel',
    toggleActions: 'restart pause restart pause',
    start: 'top 80%',
    scrub: true,
    end: 'top 20%',
    markers: false,
  },
})

//gsap.set('.cursor-area', { xPercent: 0, yPercent: 0 })

const ball = document.querySelector('.cursor-area')
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
const mouse = { x: pos.x + 10, y: pos.y + 10 }
const speed = 0.1

const xSet = gsap.quickSetter(ball, 'x', 'px')
const ySet = gsap.quickSetter(ball, 'y', 'px')

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x
  mouse.y = e.y
})

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

  pos.x += (mouse.x - pos.x) * dt
  pos.y += (mouse.y - pos.y) * dt
  xSet(pos.x)
  ySet(pos.y)
})

/* fromTo(
  '.videohome',
  {
    width: 0,
    y: 10000,
  },
  {
    y: 0,
    width: '100%',
    duration: 2,
  }
) */
let timeline = gsap.timeline()
timeline
  .fromTo(
    '.menuprincipal',
    {
      y: -100,
    },
    {
      y: 50,
      duration: 1,
      ease: 'Power2.easeOut',
    }
  )
  .fromTo(
    palabras,
    {
      opacity: 0,
      y: 1000,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'Power2.easeOut',
    }
  )
  .fromTo(
    '.cursor-area',
    {
      x: -1000,
    },
    {
      x: 0,

      duration: 5,
      ease: 'Power2.easeOut',
    }
  )
