export const ROUTE_PAIRS = [
  { pt: '/', en: '/en', enabled: true },
  { pt: '/sobre', en: '/en/about', enabled: true },
  { pt: '/trabalhos', en: '/en/work', enabled: true },
  { pt: '/contato', en: '/en/contact', enabled: true },
  { pt: '/trabalhos/qi-platform', en: '/en/work/qi-platform', enabled: true },
  {
    pt: '/trabalhos/emr-integration',
    en: '/en/work/emr-integration',
    enabled: true,
  },
  {
    pt: '/trabalhos/gerdau-storeroom',
    en: '/en/work/gerdau-storeroom',
    enabled: true,
  },
  {
    pt: '/trabalhos/gerdau-smartlog',
    en: '/en/work/gerdau-smartlog',
    enabled: true,
  },
  {
    pt: '/trabalhos/itau-empreendedor',
    en: '/en/work/itau-empreendedor',
    enabled: true,
  },
  {
    pt: '/trabalhos/3ph-hrcrs-digital-ecosystem',
    en: '/en/work/3ph-hrcrs-digital-ecosystem',
    enabled: true,
  },
]

export function getAlternateRoute(pathname, targetLang) {
  const pair = ROUTE_PAIRS.find((p) => p.pt === pathname || p.en === pathname)
  if (!pair || !pair.enabled) return null
  return targetLang === 'en' ? pair.en : pair.pt
}
