import { useEffect, useState } from 'react'

// Reads a CSS custom property's resolved value from :root and keeps it in
// sync with theme changes. Watches the `data-theme` attribute directly via
// MutationObserver instead of reacting to ThemeContext's `theme` state,
// because ThemeProvider updates `data-theme` inside its own effect — a
// child component's effect can run before that write lands, which would
// read a stale value the render right after a toggle.
export default function useCssVar(name) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const root = document.documentElement

    const read = () => {
      setValue(getComputedStyle(root).getPropertyValue(name).trim())
    }

    read()

    const observer = new MutationObserver(read)
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    return () => observer.disconnect()
  }, [name])

  return value
}
