import { useLayoutEffect, useState } from 'react'
import { getIsTransitioning, subscribe } from '../routeTransitionState'
import styles from './TypingTitle.module.css'

export default function TypingTitle({ lines, className = '', id, as: Tag = 'h1' }) {
  const computed = lines.map((line, lineIdx) => ({
    lineIdx,
    chars: line.split(''),
    startIndex: lines.slice(0, lineIdx).reduce((acc, l) => acc + l.length, 0),
  }))

  const [paused, setPaused] = useState(false)

  useLayoutEffect(() => {
    // RouteTransitionLoader.useLayoutEffect runs before this (sibling order in App.jsx),
    // so getIsTransitioning() already reflects the current transition state.
    setPaused(getIsTransitioning())

    const unsub = subscribe((val) => {
      if (!val) setPaused(false)
    })
    return unsub
  }, [])

  return (
    <Tag
      id={id}
      className={className}
      aria-label={lines.join(' ')}
      style={paused ? { '--char-play-state': 'paused' } : undefined}
    >
      {computed.map(({ lineIdx, chars, startIndex }) => (
        <span key={lineIdx} className={styles.line} aria-hidden="true">
          {chars.map((char, charIdx) => (
            <span
              key={charIdx}
              className={styles.char}
              style={{ '--char-i': startIndex + charIdx }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}
