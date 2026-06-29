const GA_MEASUREMENT_ID = 'G-7V2LFSV2LP'

export function initializeAnalytics() {
  const shouldTrack =
    import.meta.env.PROD &&
    typeof window !== 'undefined' &&
    !['localhost', '127.0.0.1'].includes(window.location.hostname)

  if (!shouldTrack || window.gtag) {
    return
  }

  window.dataLayer = window.dataLayer || []

  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

  document.head.appendChild(script)
}
