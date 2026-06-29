import { useLayoutEffect } from 'react'

const SITE_URL = 'https://henriquesilva.design'
const DEFAULT_TITLE = 'Henrique Silva — Product Designer e Líder de Design'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`
const DEFAULT_DESCRIPTION =
  'Product Designer e líder de Design com 19 anos de experiência em produtos digitais, estratégia, pesquisa, experiência e desenvolvimento de equipes.'

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', url)
}

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  path = '/',
  noIndex = false,
}) {
  useLayoutEffect(() => {
    const canonicalUrl =
      path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`

    document.title = title

    setMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })

    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: noIndex ? 'noindex, nofollow' : 'index, follow',
    })

    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })

    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })

    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })

    setMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })

    setMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Henrique Silva Design',
    })

    setMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: image,
    })

    setMeta('meta[property="og:image:width"]', {
      property: 'og:image:width',
      content: '1200',
    })

    setMeta('meta[property="og:image:height"]', {
      property: 'og:image:height',
      content: '630',
    })

    setMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: title,
    })

    setMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary',
    })

    setMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })

    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    setMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: image,
    })

    setCanonical(canonicalUrl)
  }, [title, description, image, path, noIndex])

  return null
}
