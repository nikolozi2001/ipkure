// src/contexts/LanguageContext.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ge');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Extract language from URL path
    const pathSegments = location.pathname.split('/');
    const langFromPath = pathSegments[1];
    
    if (langFromPath === 'ge' || langFromPath === 'en') {
      setLanguage(langFromPath);
    } else {
      // Default to Georgian and redirect
      const newPath = '/ge' + location.pathname;
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  const switchLanguage = (newLang) => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(ge|en)/, '');
    const newPath = `/${newLang}${pathWithoutLang}`;
    navigate(newPath);
  };

  const value = {
    language,
    switchLanguage,
    isGeorgian: language === 'ge',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}