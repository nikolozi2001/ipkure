// src/contexts/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
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
};