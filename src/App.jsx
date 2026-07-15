import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage'
import ContactPage from './pages/ContactPage'
import DesignSystemPage from './pages/DesignSystemPage'
import NotFoundPage from './pages/NotFoundPage'
import QiPlatformPage from './pages/cases/QiPlatformPage'
import EmrIntegrationPage from './pages/cases/EmrIntegrationPage'
import GerdauStoreroomPage from './pages/cases/GerdauStoreroomPage'
import GerdauSmartlogPage from './pages/cases/GerdauSmartlogPage'
import ItauEmpreendedorPage from './pages/cases/ItauEmpreendedorPage'
import ThreePHHrcrsPage from './pages/cases/ThreePHHrcrsPage'
import BackToTopButton from './components/BackToTopButton'
import ScrollToTop from './components/ScrollToTop'
import RouteTransitionLoader from './components/RouteTransitionLoader'
import CustomCursor from './components/CustomCursor'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteTransitionLoader />
      <CustomCursor />

      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/en" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/trabalhos" element={<WorksPage />} />
          <Route path="/en/work" element={<WorksPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="/trabalhos/qi-platform" element={<QiPlatformPage />} />
          <Route path="/en/work/qi-platform" element={<QiPlatformPage />} />
          <Route path="/trabalhos/emr-integration" element={<EmrIntegrationPage />} />
          <Route path="/en/work/emr-integration" element={<EmrIntegrationPage />} />
          <Route path="/trabalhos/gerdau-storeroom" element={<GerdauStoreroomPage />} />
          <Route path="/en/work/gerdau-storeroom" element={<GerdauStoreroomPage />} />
          <Route path="/trabalhos/gerdau-smartlog" element={<GerdauSmartlogPage />} />
          <Route path="/en/work/gerdau-smartlog" element={<GerdauSmartlogPage />} />
          <Route path="/trabalhos/itau-empreendedor" element={<ItauEmpreendedorPage />} />
          <Route path="/en/work/itau-empreendedor" element={<ItauEmpreendedorPage />} />
          <Route path="/trabalhos/3ph-hrcrs-digital-ecosystem" element={<ThreePHHrcrsPage />} />
          <Route path="/en/work/3ph-hrcrs-digital-ecosystem" element={<ThreePHHrcrsPage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
          <Route path="/en/design-system" element={<DesignSystemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <BackToTopButton />
      </LanguageProvider>
    </BrowserRouter>
  )
}
