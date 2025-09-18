import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LanguageProvider from './contexts/LanguageContext.jsx';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BrandPage from './pages/BrandPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root to /ge */}
          <Route path="/" element={<Navigate to="/ge" replace />} />
          
          {/* Language-specific routes */}
          <Route path="/:lang/*" element={
            <LanguageProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/brand" element={<BrandPage />} />
                  <Route path="/men" element={<MenPage />} />
                  <Route path="/women" element={<WomenPage />} />
                  <Route path="/about" element={<AboutPage />} />
                </Routes>
              </Layout>
            </LanguageProvider>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
