import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LanguageProvider from './contexts/LanguageContext.jsx';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GiftSets from './pages/GiftSets.jsx';
import BrandPage from './pages/BrandPage';
import ProductPage from './pages/ProductPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import Contacts from './pages/Contacts.jsx';

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
                  <Route path="/brand" element={<BrandPage />} />
                  <Route path="/product/:brandSlug" element={<ProductPage />} />
                  <Route path="/men" element={<MenPage />} />
                  <Route path="/women" element={<WomenPage />} />
                  <Route path="/gift_sets" element={<GiftSets />} />
                  <Route path="/contacts" element={<Contacts />} />
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
