import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Hello from './pages/Hello';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
      </Routes>
    </BrowserRouter>
  );
}
