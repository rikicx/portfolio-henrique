import { useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransitionLoader from './PageTransitionLoader'

const TRANSITION_DURATION_MS = 1500

export default function RouteTransitionLoader() {
  const { pathname } = useLocation()
  const previousPathname = useRef(pathname)
  const [isVisible, setIsVisible] = useState(false)

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) {
      return undefined
    }

    previousPathname.current = pathname
    setIsVisible(true)

    const timeoutId = window.setTimeout(() => {
      setIsVisible(false)
    }, TRANSITION_DURATION_MS)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [pathname])

  return <PageTransitionLoader isVisible={isVisible} />
}
