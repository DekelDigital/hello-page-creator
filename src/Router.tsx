import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import ImagePerformanceManager from './components/ImagePerformanceManager';
import Hello from './pages/Hello';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AboutUs from './pages/AboutUs';
import DesignedAds from './pages/DesignedAds';
import OurResults from './pages/OurResults';
import Contact from './pages/Contact';
import CampaignManagement from './pages/CampaignManagement';
import ScrollToTop from './components/ScrollToTop';

export default function Router() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ImagePerformanceManager />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ads" element={<DesignedAds />} />
          <Route path="/results" element={<OurResults />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaigns" element={<CampaignManagement />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
