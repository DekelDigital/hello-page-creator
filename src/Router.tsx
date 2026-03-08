import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Hello from './pages/Hello';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}
