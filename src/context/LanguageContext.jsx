import { createContext, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const location = useLocation()

  const lang =
    location.pathname === '/en' || location.pathname.startsWith('/en/')
      ? 'en'
      : 'pt'

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }, [lang])

  const value = useMemo(() => ({ lang }), [lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
