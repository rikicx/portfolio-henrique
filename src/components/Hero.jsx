import { useRef, useEffect } from 'react'
import styles from './Hero.module.css'
import heroUrl from '../media/home/hero/henrique-hero.webp'
import heroDarkUrl from '../media/home/hero/henrique-hero-dark.webp'
import FloatingTools from './FloatingTools'
import { useLanguage } from '../context/LanguageContext'
import pt from '../content/pt/hero'
import en from '../content/en/hero'

const LETTERS = 'Henrique'.split('')

export default function Hero() {
  const { lang } = useLanguage()
  const c = lang === 'en' ? en : pt

  const sectionRef      = useRef(null)
  const nameRef         = useRef(null)
  const photoWrapperRef = useRef(null)
  const textParallaxRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const rmq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hmq = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (min-width: 1025px)'
    )

    let raf         = null
    let sectionRect = null
    const target    = { x: 0, y: 0 }
    const current   = {
      name:  { x: 0, y: 0 },
      photo: { x: 0, y: 0 },
      text:  { x: 0, y: 0 },
    }
    const LERP    = 0.08
    const FACTORS = {
      name:  { x:  0.012, y:  0.012 },
      photo: { x: -0.022, y: -0.020 },
      text:  { x:  0.008, y:  0.008 },
    }

    function lerp(a, b, t) { return a + (b - a) * t }

    function applyTransforms() {
      if (nameRef.current) {
        nameRef.current.style.transform =
          `translate(${current.name.x}px, ${current.name.y}px)`
      }
      if (photoWrapperRef.current) {
        photoWrapperRef.current.style.transform =
          `translate(${current.photo.x}px, ${current.photo.y}px)`
      }
      if (textParallaxRef.current) {
        textParallaxRef.current.style.transform =
          `translate(${current.text.x}px, ${current.text.y}px)`
      }
    }

    function isSettled() {
      const eps = 0.01
      for (const k of ['name', 'photo', 'text']) {
        const tx = target.x * FACTORS[k].x
        const ty = target.y * FACTORS[k].y
        if (Math.abs(current[k].x - tx) > eps || Math.abs(current[k].y - ty) > eps) {
          return false
        }
      }
      return true
    }

    function tick() {
      for (const k of ['name', 'photo', 'text']) {
        current[k].x = lerp(current[k].x, target.x * FACTORS[k].x, LERP)
        current[k].y = lerp(current[k].y, target.y * FACTORS[k].y, LERP)
      }
      applyTransforms()
      raf = isSettled() ? null : requestAnimationFrame(tick)
    }

    function startRaf() {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    function reset() {
      target.x = 0; target.y = 0
      for (const k of ['name', 'photo', 'text']) {
        current[k].x = 0; current[k].y = 0
      }
      if (nameRef.current)          nameRef.current.style.transform = ''
      if (photoWrapperRef.current)  photoWrapperRef.current.style.transform = ''
      if (textParallaxRef.current)  textParallaxRef.current.style.transform = ''
      if (raf) { cancelAnimationFrame(raf); raf = null }
    }

    function onMouseEnter() {
      sectionRect = section.getBoundingClientRect()
    }

    function onMouseMove(e) {
      if (!sectionRect) sectionRect = section.getBoundingClientRect()
      target.x = e.clientX - (sectionRect.left + sectionRect.width  / 2)
      target.y = e.clientY - (sectionRect.top  + sectionRect.height / 2)
      startRaf()
    }

    function onMouseLeave() {
      target.x = 0
      target.y = 0
      startRaf()
    }

    function enable() {
      section.addEventListener('mouseenter', onMouseEnter)
      section.addEventListener('mousemove',  onMouseMove)
      section.addEventListener('mouseleave', onMouseLeave)
    }

    function disable() {
      section.removeEventListener('mouseenter', onMouseEnter)
      section.removeEventListener('mousemove',  onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
      sectionRect = null
      reset()
    }

    function handleChange() {
      if (!rmq.matches && hmq.matches) enable()
      else disable()
    }

    handleChange()
    rmq.addEventListener('change', handleChange)
    hmq.addEventListener('change', handleChange)

    return () => {
      disable()
      rmq.removeEventListener('change', handleChange)
      hmq.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        {/* Name overflows right intentionally — section clips overflow */}
        <p className={styles.name} aria-hidden="true" ref={nameRef}>
          {LETTERS.map((letter, i) => (
            <span key={i} className={styles.letter} style={{ '--i': i }}>
              {letter}
            </span>
          ))}
        </p>

        {/* Desktop: absolute left=831px top=32px. Mobile: in-flow, pulled up to overlap name */}
        <div className={styles.photoWrapper} aria-hidden="true" ref={photoWrapperRef}>
          <div className={styles.photoInner}>
            <img src={heroUrl} alt="" className={`${styles.photo} ${styles.photoLight}`} />
            <img src={heroDarkUrl} alt="" className={`${styles.photo} ${styles.photoDark}`} />
            <FloatingTools />
          </div>
        </div>

        <div className={styles.textStack}>
          {/* textParallax wraps subtitle+body for parallax; CTA stays outside */}
          <div className={styles.textParallax} ref={textParallaxRef}>
            <h1 className={styles.subtitle}>{c.subtitle}</h1>
            <p className={styles.body}>{c.body}</p>
          </div>
          <a href="#projetos" className={styles.cta}>
            <span>{c.ctaLabel}</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
