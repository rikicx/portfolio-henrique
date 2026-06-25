import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage'
import NotFoundPage from './pages/NotFoundPage'
import QiPlatformPage from './pages/cases/QiPlatformPage'
import EmrIntegrationPage from './pages/cases/EmrIntegrationPage'
import GerdauStoreroomPage from './pages/cases/GerdauStoreroomPage'
import GerdauSmartlogPage from './pages/cases/GerdauSmartlogPage'
import ItauEmpreendedorPage from './pages/cases/ItauEmpreendedorPage'
import ThreePHHrcrsPage from './pages/cases/ThreePHHrcrsPage'
import BackToTopButton from './components/BackToTopButton'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/trabalhos" element={<WorksPage />} />
        <Route path="/trabalhos/qi-platform" element={<QiPlatformPage />} />
        <Route path="/trabalhos/emr-integration" element={<EmrIntegrationPage />} />
        <Route path="/trabalhos/gerdau-storeroom" element={<GerdauStoreroomPage />} />
        <Route path="/trabalhos/gerdau-smartlog" element={<GerdauSmartlogPage />} />
        <Route path="/trabalhos/itau-empreendedor" element={<ItauEmpreendedorPage />} />
        <Route path="/trabalhos/3ph-hrcrs-digital-ecosystem" element={<ThreePHHrcrsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <BackToTopButton />
    </BrowserRouter>
  )
}
