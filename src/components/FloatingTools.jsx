import { useEffect, useRef, useState } from 'react'
import styles from './FloatingTools.module.css'

import figma from '../media/home/hero/tools/figma.svg'
import miro from '../media/home/hero/tools/miro.svg'
import photoshop from '../media/home/hero/tools/photoshop.svg'
import illustrator from '../media/home/hero/tools/illustrator.svg'
import analytics from '../media/home/hero/tools/google-analytics.svg'
import claude from '../media/home/hero/tools/claude.svg'
import chatgpt from '../media/home/hero/tools/chatgpt.svg'
import vscode from '../media/home/hero/tools/vscode.svg'

const TOOLS = [
  { src: figma, scale: 1 },
  { src: miro, scale: 1 },
  { src: photoshop, scale: 1 },
  { src: illustrator, scale: 1 },
  { src: analytics, scale: 1.08 },
  { src: claude, scale: 1 },
  { src: chatgpt, scale: 1 },
  { src: vscode, scale: 1.05 },
]

const REGION_KEYS = ['left', 'cLeft', 'center', 'cRight', 'right']

function rand(min, max) {
  return min + Math.random() * (max - min)
}

function randInt(min, max) {
  return Math.floor(rand(min, max + 1))
}

function pickFrom(items) {
  return items[randInt(0, items.length - 1)]
}

function shuffle(items) {
  const copy = [...items]

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randInt(0, index)
    ;[copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]]
  }

  return copy
}

function quadraticPoint(start, control, end, progress) {
  const inverse = 1 - progress

  return (
    inverse * inverse * start +
    2 * inverse * progress * control +
    progress * progress * end
  )
}

let uid = 0

export default function FloatingTools() {
  const [icons, setIcons] = useState([])

  const containerRef = useRef(null)
  const mountedRef = useRef(false)
  const isActiveRef = useRef(false)
  const firstStartRef = useRef(true)
  const iconsRef = useRef([])
  const activeToolIndexesRef = useRef(new Set())
  const spawnTimerRef = useRef(null)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (reducedMotionQuery.matches) return undefined

    mountedRef.current = true

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const isTablet = window.matchMedia(
      '(min-width: 769px) and (max-width: 1024px)'
    ).matches

    const config = isMobile
      ? {
          maxIcons: 1,
          duration: [1500, 2000],
          interval: [1200, 1600],
          fullRetry: [120, 200],
          endY: [-90, -58],
          endX: [-34, 34],
          bow: [14, 26],
          originY: [-3, 5],
          rotation: {
            start: 12,
            end: 30,
            wobble: 10,
          },
          regionKeys: ['left', 'cLeft', 'cRight', 'right'],
          originRanges: {
            left: [-34, -24],
            cLeft: [-22, -10],
            cRight: [10, 22],
            right: [24, 34],
          },
        }
      : isTablet
        ? {
            maxIcons: 2,
            duration: [1400, 1900],
            interval: [650, 900],
            fullRetry: [100, 180],
            endY: [-120, -76],
            endX: [-54, 54],
            bow: [22, 42],
            originY: [-4, 6],
            rotation: {
              start: 18,
              end: 42,
              wobble: 16,
            },
            regionKeys: REGION_KEYS,
            originRanges: {
              left: [-64, -42],
              cLeft: [-40, -15],
              center: [-12, 12],
              cRight: [15, 40],
              right: [42, 64],
            },
          }
        : {
            maxIcons: 1,
            duration: [1300, 1800],
            interval: [480, 680],
            fullRetry: [90, 160],
            endY: [-150, -96],
            endX: [-78, 78],
            bow: [30, 58],
            originY: [-5, 7],
            rotation: {
              start: 24,
              end: 54,
              wobble: 22,
            },
            regionKeys: REGION_KEYS,
            originRanges: {
              left: [-92, -60],
              cLeft: [-56, -20],
              center: [-16, 16],
              cRight: [20, 56],
              right: [60, 92],
            },
          }

    let toolBag = []
    const recentTools = []
    let lastOriginRegion = null
    let lastBowDirection = 0

    function chooseOriginRegion() {
      const candidates = config.regionKeys.filter(
        region => region !== lastOriginRegion
      )
      const region = pickFrom(candidates)
      lastOriginRegion = region
      return region
    }

    function refillToolBag() {
      toolBag = shuffle(TOOLS.map((_, index) => index))
    }

    function chooseToolIndex() {
      if (toolBag.length === 0) refillToolBag()

      const activeTools = activeToolIndexesRef.current
      const preferredIndex = toolBag.findIndex(
        toolIndex =>
          !activeTools.has(toolIndex) && !recentTools.includes(toolIndex)
      )
      const fallbackIndex =
        preferredIndex >= 0
          ? preferredIndex
          : toolBag.findIndex(toolIndex => !activeTools.has(toolIndex))

      if (fallbackIndex < 0) return null

      const [toolIndex] = toolBag.splice(fallbackIndex, 1)

      recentTools.push(toolIndex)
      if (recentTools.length > 2) recentTools.shift()

      return toolIndex
    }

    function chooseBowDirection() {
      let direction = Math.random() < 0.5 ? -1 : 1

      if (direction === lastBowDirection && Math.random() < 0.65) {
        direction *= -1
      }

      lastBowDirection = direction
      return direction
    }

    function clearSpawnTimer() {
      if (spawnTimerRef.current !== null) {
        clearTimeout(spawnTimerRef.current)
        spawnTimerRef.current = null
      }
    }

    function buildIcon() {
      const toolIndex = chooseToolIndex()
      if (toolIndex === null) return null

      const tool = TOOLS[toolIndex]
      const originRegion = chooseOriginRegion()
      const [originMin, originMax] = config.originRanges[originRegion]

      const startX = rand(originMin, originMax)
      const startY = rand(config.originY[0], config.originY[1])
      const endX = isMobile
        ? startX < 0
          ? rand(-52, -24)
          : rand(24, 52)
        : rand(config.endX[0], config.endX[1])
      const endY = rand(config.endY[0], config.endY[1])

      const bowDirection = isMobile
        ? startX < 0
          ? -1
          : 1
        : chooseBowDirection()
      const controlX =
        (startX + endX) / 2 +
        rand(config.bow[0], config.bow[1]) * bowDirection
      const controlY =
        startY + (endY - startY) * rand(0.22, 0.34)

      const points = [0.2, 0.4, 0.6, 0.8].map(progress => ({
        x: quadraticPoint(startX, controlX, endX, progress),
        y: quadraticPoint(startY, controlY, endY, progress),
      }))

      const startRotation = rand(
        -config.rotation.start,
        config.rotation.start
      )
      const rotationDirection = Math.random() < 0.5 ? -1 : 1
      const endRotation =
        rand(config.rotation.end * 0.55, config.rotation.end) *
        rotationDirection
      const rotationWobble = rand(
        -config.rotation.wobble,
        config.rotation.wobble
      )

      const rotations = [0.2, 0.4, 0.6, 0.8].map(progress => {
        const base =
          startRotation + (endRotation - startRotation) * progress
        const wave = Math.sin(progress * Math.PI) * rotationWobble
        return base + wave
      })

      return {
        id: ++uid,
        toolIndex,
        src: tool.src,
        duration: randInt(config.duration[0], config.duration[1]),
        assetScale: tool.scale * rand(0.96, 1.04),
        startX,
        startY,
        endX,
        endY,
        points,
        startRotation,
        endRotation,
        rotations,
      }
    }

    function spawnIcon() {
      if (!mountedRef.current || !isActiveRef.current) return false
      if (iconsRef.current.length >= config.maxIcons) return false

      const icon = buildIcon()
      if (!icon) return false

      activeToolIndexesRef.current.add(icon.toolIndex)
      iconsRef.current = [...iconsRef.current, icon]
      setIcons(iconsRef.current)

      return true
    }

    function scheduleNextSpawn(delay) {
      clearSpawnTimer()

      if (!mountedRef.current || !isActiveRef.current) return

      spawnTimerRef.current = setTimeout(() => {
        spawnTimerRef.current = null

        if (!mountedRef.current || !isActiveRef.current) return

        const spawned = spawnIcon()
        const nextDelay = spawned
          ? randInt(config.interval[0], config.interval[1])
          : randInt(config.fullRetry[0], config.fullRetry[1])

        scheduleNextSpawn(nextDelay)
      }, delay)
    }

    function startAnimation() {
      if (isActiveRef.current) return

      isActiveRef.current = true
      const initialDelay = firstStartRef.current
        ? randInt(1400, 1800)
        : randInt(250, 450)

      firstStartRef.current = false
      scheduleNextSpawn(initialDelay)
    }

    function stopAnimation() {
      isActiveRef.current = false
      clearSpawnTimer()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) {
          startAnimation()
        } else {
          stopAnimation()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    function handleVisibilityChange() {
      if (document.hidden) {
        stopAnimation()
        return
      }

      if (!containerRef.current) return

      const { top, bottom } = containerRef.current.getBoundingClientRect()
      if (top < window.innerHeight && bottom > 0) startAnimation()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      mountedRef.current = false
      isActiveRef.current = false
      clearSpawnTimer()
      observer.disconnect()
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      )
      iconsRef.current = []
      activeToolIndexesRef.current.clear()
    }
  }, [])

  function handleIconEnd(id, toolIndex) {
    activeToolIndexesRef.current.delete(toolIndex)
    iconsRef.current = iconsRef.current.filter(icon => icon.id !== id)
    setIcons(iconsRef.current)
  }

  return (
    <div
      ref={containerRef}
      className={styles.container}
      aria-hidden="true"
    >
      {icons.map(icon => (
        <span
          key={icon.id}
          className={styles.icon}
          onAnimationEnd={() => handleIconEnd(icon.id, icon.toolIndex)}
          style={{
            '--start-x': `${icon.startX}px`,
            '--start-y': `${icon.startY}px`,
            '--p1-x': `${icon.points[0].x}px`,
            '--p1-y': `${icon.points[0].y}px`,
            '--p2-x': `${icon.points[1].x}px`,
            '--p2-y': `${icon.points[1].y}px`,
            '--p3-x': `${icon.points[2].x}px`,
            '--p3-y': `${icon.points[2].y}px`,
            '--p4-x': `${icon.points[3].x}px`,
            '--p4-y': `${icon.points[3].y}px`,
            '--end-x': `${icon.endX}px`,
            '--end-y': `${icon.endY}px`,
            '--start-rotation': `${icon.startRotation}deg`,
            '--p1-rotation': `${icon.rotations[0]}deg`,
            '--p2-rotation': `${icon.rotations[1]}deg`,
            '--p3-rotation': `${icon.rotations[2]}deg`,
            '--p4-rotation': `${icon.rotations[3]}deg`,
            '--end-rotation': `${icon.endRotation}deg`,
            '--asset-scale': icon.assetScale,
            animationDuration: `${icon.duration}ms`,
          }}
        >
          <img
            src={icon.src}
            alt=""
            className={styles.logo}
            draggable="false"
          />
        </span>
      ))}
    </div>
  )
}
