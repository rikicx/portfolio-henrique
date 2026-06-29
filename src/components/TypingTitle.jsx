import { useLayoutEffect, useState } from 'react'
import { getIsTransitioning, subscribe } from '../routeTransitionState'
import { useInView } from '../hooks/useInView'
import styles from './TypingTitle.module.css'

// Split a line's character array into word and space tokens.
// Spaces preserve the global stagger index (--char-i) but are rendered
// as inline text nodes so the browser can break lines between words.
function tokenizeLine(chars, startIndex) {
  const tokens = []
  let i = 0
  while (i < chars.length) {
    if (chars[i] === ' ') {
      let count = 0
      while (i < chars.length && chars[i] === ' ') { count++; i++ }
      tokens.push({ type: 'space', count })
    } else {
      const wordChars = []
      while (i < chars.length && chars[i] !== ' ') {
        wordChars.push({ char: chars[i], idx: startIndex + i })
        i++
      }
      tokens.push({ type: 'word', chars: wordChars })
    }
  }
  return tokens
}

export default function TypingTitle({ lines, className = '', id, as: Tag = 'h1', waitForVisible = false }) {
  const computed = lines.map((line, lineIdx) => ({
    lineIdx,
    chars: line.split(''),
    startIndex: lines.slice(0, lineIdx).reduce((acc, l) => acc + l.length, 0),
  }))

  const [transitioning, setTransitioning] = useState(false)
  const [ref, visible] = useInView({ threshold: 0.3, once: true })

  useLayoutEffect(() => {
    // RouteTransitionLoader.useLayoutEffect runs before this (sibling order in App.jsx),
    // so getIsTransitioning() already reflects the current transition state.
    setTransitioning(getIsTransitioning())
    const unsub = subscribe((val) => setTransitioning(val))
    return unsub
  }, [])

  const paused = transitioning || (waitForVisible && !visible)

  return (
    <Tag
      id={id}
      ref={waitForVisible ? ref : undefined}
      className={className}
      aria-label={lines.join(' ')}
      style={paused ? { '--char-play-state': 'paused' } : undefined}
    >
      {computed.map(({ lineIdx, chars, startIndex }) => {
        const tokens = tokenizeLine(chars, startIndex)
        return (
          <span key={lineIdx} className={styles.line} aria-hidden="true">
            {tokens.map((token, ti) => {
              if (token.type === 'space') {
                // Inline span so the browser treats it as a word-break opportunity
                return <span key={`sp${ti}`}>{' '.repeat(token.count)}</span>
              }
              return (
                <span key={`w${ti}`} className={styles.word}>
                  {token.chars.map(({ char, idx }) => (
                    <span key={idx} className={styles.char} style={{ '--char-i': idx }}>
                      {char}
                    </span>
                  ))}
                </span>
              )
            })}
          </span>
        )
      })}
    </Tag>
  )
}
