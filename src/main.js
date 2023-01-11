import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.set('.play-button-wrapper', { opacity: 0 })
//gsap.set('.title-home', { y: 1000 })
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

let timeline = gsap.timeline()
timeline
  .fromTo(
    '.menuprincipal',
    {
      opacity: 0,
      y: -300,
    },
    {
      opacity: 1,
      y: 40,
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
    '.play-button-wrapper',
    {
      opacity: 0,
      x: '-100%',
    },
    {
      x: '0%',
      opacity: 1,
      duration: 1,
      ease: 'Power2.easeOut',
    }
  )

/* let textoAboutUs = new SplitText('.texto-aboutuschico', {
  type: 'words',
})
let palabrasAboutUs = textoAboutUs.words */

let textoDropUs = new SplitText('.title-dropus', {
  type: 'words',
})
let palabrasDropUs = textoDropUs.words

gsap.fromTo(
  '.linearoja',
  {
    y: 500,
    opacity: 0.5,
  },
  {
    y: -100,
    opacity: 1,
    ease: 'Power2.easeOut',
    duration: 1,
    scrollTrigger: {
      trigger: '.reel',
      toggleActions: 'restart pause restart pause',
      start: 'top 95%',
      scrub: true,
      end: 'top 20%',

      markers: false,
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
    y: 100,
    opacity: 1,
    ease: 'back.out',
    duration: 3,
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
    y: 80,
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
  palabras,
  {
    yPercent: 0,
    opacity: 1,
  },
  {
    opacity: 0,
    yPercent: -100,
    ease: 'Power2.easeInOut',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.title-home',
      toggleActions: 'restart pause restart pause',
      start: 'top 40%',
      end: '+=1000px',
      scrub: true,

      markers: false,
    },
  }
)

/* gsap.fromTo(
  '.texto-aboutuschico',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    yPercent: 200,
    ease: 'Power2.easeOut',
    scrollTrigger: {
      trigger: '.aboutus',
      toggleActions: 'restart pause restart pause',
      start: 'center center',
      scrub: 1,
      end: '+=450px',
      markers: false,
    },
  }
) */

gsap.fromTo(
  '.title-about',
  {
    fontSize: '50vw',
    width: '100%',
    x: '-350%',
  },
  {
    fontSize: '10vw',
    x: '0%',
    ease: 'Power2.easeOut',
    duration: 2,

    scrollTrigger: {
      trigger: '.aboutus',
      toggleActions: 'restart pause restart pause',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 3,
      markers: false,
    },
  }
)

gsap.fromTo(
  '.texto-usgrande',
  {
    fontSize: '40vw',
    width: '100%',
    x: '-300%',
  },
  {
    fontSize: '7vw',
    x: '0%',
    ease: 'Power2.easeOut',
    duration: 2,

    scrollTrigger: {
      trigger: '.aboutus',
      toggleActions: 'restart pause restart pause',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 2,
      markers: false,
    },
  }
)

gsap.fromTo(
  palabrasDropUs,
  {
    x: -500,
    opacity: 0.5,
    scale: 1.1,
  },
  {
    scale: 1,
    stagger: 0.1,
    x: 0,
    opacity: 1,
    ease: 'Power2.easeOut',
    duration: 2,
    scrollTrigger: {
      trigger: '.dropusaline',
      toggleActions: 'restart pause restart pause',
      start: 'top 70%',
      scrub: true,
      end: 'center top',
      markers: false,
    },
  }
)

gsap.fromTo(
  '.contact',
  {
    x: 500,
    opacity: 0.6,
  },
  {
    x: 0,
    opacity: 1,
    ease: 'Power2.easeOut',
    duration: 2,
    scrollTrigger: {
      trigger: '.dropusaline',
      toggleActions: 'restart pause restart pause',
      start: 'top 70%',
      scrub: true,
      end: 'center top',
      markers: false,
    },
  }
)

gsap.fromTo(
  '.location',
  {
    x: 700,
    opacity: 0,
  },
  {
    delay: 0.5,

    x: 0,
    opacity: 1,
    ease: 'Power2.easeOut',
    duration: 2,
    scrollTrigger: {
      trigger: '.dropusaline',
      toggleActions: 'restart pause restart pause',
      start: 'top 70%',
      scrub: true,
      end: 'center top',
      markers: false,
    },
  }
)
gsap.fromTo(
  '.texto-contacto',
  {
    x: 500,
    opacity: 0.5,
    scale: 1.1,
  },
  {
    scale: 1,
    stagger: 0.1,
    x: 0,
    opacity: 1,
    ease: 'Power2.easeOut',
    duration: 2,
    scrollTrigger: {
      trigger: '.dropusaline',
      toggleActions: 'restart pause restart pause',
      start: 'top 70%',
      scrub: true,
      end: 'center top',
      markers: false,
    },
  }
)

ScrollTrigger.create({
  trigger: '.aboutus',
  start: 'top top',

  toggleClass: { targets: '.btnsmenu', className: 'negro' },

  markers: false,
})
ScrollTrigger.create({
  trigger: '.aboutus',
  start: 'top top',
  toggleClass: { targets: '.logo-blanco', className: 'negro' },
  markers: false,
  onEnter: () => console.log('entre'),
})

ScrollTrigger.create({
  trigger: '.aboutus',
  start: 'top top',

  toggleClass: { targets: '.contact-wrapper', className: 'negro' },

  markers: false,
})

ScrollTrigger.create({
  trigger: '.aboutus',
  start: 'top top',

  toggleClass: { targets: '.menuoption-wrapper', className: 'negro' },

  markers: false,
})
const ball = document.querySelector('.play-button-wrapper')
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
const mouse = { x: pos.x - 1000, y: pos.y - 1000 }
const speed = 0.1

const xSet = gsap.quickSetter(ball, 'x', 'px')
const ySet = gsap.quickSetter(ball, 'y', 'px')

window.addEventListener('mousemove', (e) => {
  if (e.y > 150) {
    mouse.x = e.x - 50
    mouse.y = e.y - 50
  }
})

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

  pos.x += (mouse.x - pos.x) * dt
  pos.y += (mouse.y - pos.y) * dt
  xSet(pos.x)
  ySet(pos.y)
})
