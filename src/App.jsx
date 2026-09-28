import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage'
import ContactPage from './pages/ContactPage'
import DesignSystemPage from './pages/DesignSystemPage'
import NotFoundPage from './pages/NotFoundPage'
import QiPlatformPage from './pages/cases/QiPlatformPage'
import QiPrototypePage from './pages/cases/QiPrototypePage'
import EmrIntegrationPage from './pages/cases/EmrIntegrationPage'
import EmrPrototypePage from './pages/cases/EmrPrototypePage'
import GerdauStoreroomPage from './pages/cases/GerdauStoreroomPage'
import GerdauSmartlogPage from './pages/cases/GerdauSmartlogPage'
import ItauEmpreendedorPage from './pages/cases/ItauEmpreendedorPage'
import ThreePHHrcrsPage from './pages/cases/ThreePHHrcrsPage'
import FloatingActions from './components/FloatingActions'
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
          <Route path="/trabalhos/qi-platform/prototipo" element={<QiPrototypePage />} />
          <Route path="/en/work/qi-platform/prototype" element={<QiPrototypePage />} />
          <Route path="/trabalhos/emr-integration" element={<EmrIntegrationPage />} />
          <Route path="/en/work/emr-integration" element={<EmrIntegrationPage />} />
          <Route path="/trabalhos/emr-integration/prototipo" element={<EmrPrototypePage />} />
          <Route path="/en/work/emr-integration/prototype" element={<EmrPrototypePage />} />
          <Route path="/trabalhos/gerdau-storeroom" element={<GerdauStoreroomPage />} />
          <Route path="/en/work/gerdau-storeroom" element={<GerdauStoreroomPage />} />
          <Route path="/trabalhos/gerdau-smartlog" element={<GerdauSmartlogPage />} />
          <Route path="/en/work/gerdau-smartlog" element={<GerdauSmartlogPage />} />
          <Route path="/trabalhos/itau-empreendedor" element={<ItauEmpreendedorPage />} />
          <Route path="/en/work/itau-empreendedor" element={<ItauEmpreendedorPage />} />
          <Route path="/trabalhos/3ph-hrcrs-digital-ecosystem" element={<ThreePHHrcrsPage />} />
          <Route path="/en/work/3ph-hrcrs-digital-ecosystem" element={<ThreePHHrcrsPage />} />
          <Route path="/kihon" element={<DesignSystemPage />} />
          <Route path="/en/kihon" element={<DesignSystemPage />} />
          <Route path="/design-system" element={<Navigate to="/kihon" replace />} />
          <Route path="/en/design-system" element={<Navigate to="/en/kihon" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <FloatingActions />
      </LanguageProvider>
    </BrowserRouter>
  )
}
