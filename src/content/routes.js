export const ROUTE_PAIRS = [
  { pt: '/', en: '/en', enabled: true },
  { pt: '/sobre', en: '/en/about', enabled: true },
  { pt: '/trabalhos', en: '/en/work', enabled: false },
  { pt: '/contato', en: '/en/contact', enabled: false },
  { pt: '/trabalhos/qi-platform', en: '/en/work/qi-platform', enabled: false },
  {
    pt: '/trabalhos/emr-integration',
    en: '/en/work/emr-integration',
    enabled: false,
  },
  {
    pt: '/trabalhos/gerdau-storeroom',
    en: '/en/work/gerdau-storeroom',
    enabled: false,
  },
  {
    pt: '/trabalhos/gerdau-smartlog',
    en: '/en/work/gerdau-smartlog',
    enabled: false,
  },
  {
    pt: '/trabalhos/itau-empreendedor',
    en: '/en/work/itau-empreendedor',
    enabled: false,
  },
  {
    pt: '/trabalhos/3ph-hrcrs-digital-ecosystem',
    en: '/en/work/3ph-hrcrs-digital-ecosystem',
    enabled: false,
  },
]

export function getAlternateRoute(pathname, targetLang) {
  const pair = ROUTE_PAIRS.find((p) => p.pt === pathname || p.en === pathname)
  if (!pair || !pair.enabled) return null
  return targetLang === 'en' ? pair.en : pair.pt
}
