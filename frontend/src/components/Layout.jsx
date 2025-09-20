// src/components/Layout.jsx
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const { language } = useLanguage();
  
  // Set base title (will be overridden by page-specific titles)
  useDocumentTitle();

  // Update the data-lang attribute on the document element
  useEffect(() => {
    document.documentElement.setAttribute('data-lang', language);
  }, [language]);

  return (
    <div className="min-h-screen bg-white" data-lang={language}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}