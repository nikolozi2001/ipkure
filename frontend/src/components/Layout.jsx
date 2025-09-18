// src/components/Layout.jsx
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Header from './Header';

export default function Layout({ children }) {
  const { language } = useLanguage();

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
    </div>
  );
}