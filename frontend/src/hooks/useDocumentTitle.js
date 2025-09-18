// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './useLanguage';

export const useDocumentTitle = (pageTitle = '') => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // Base title translations
    const baseTitles = {
      en: 'IPKURE',
      ge: 'იპკურე'
    };

    // Page title translations
    const pageTitles = {
      en: {
        home: 'Home',
        brand: 'Brand',
        men: 'Men',
        women: 'Women',
        giftSets: 'Gift Sets',
        contact: 'Contact Us'
      },
      ge: {
        home: 'მთავარი',
        brand: 'ბრენდი',
        men: 'მამაკაცი',
        women: 'ქალი',
        giftSets: 'სასაჩუქრე ნაკრები',
        contact: 'კონტაქტი'
      }
    };

    // Auto-detect page from URL if no pageTitle provided
    let currentPageTitle = pageTitle;
    if (!currentPageTitle) {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      // Remove language segment (ge/en) to get the actual page
      const pagePath = pathSegments.length > 1 ? pathSegments[1] : 'home';
      
      // Map URL paths to page title keys
      const pathToPageMap = {
        '': 'home',
        'brand': 'brand',
        'men': 'men', 
        'women': 'women',
        'gift-sets': 'giftSets',
        'contact': 'contact'
      };
      
      currentPageTitle = pathToPageMap[pagePath] || 'home';
    }

    const baseTitle = baseTitles[language];
    
    if (currentPageTitle && pageTitles[language][currentPageTitle]) {
      document.title = `${pageTitles[language][currentPageTitle]} - ${baseTitle}`;
    } else if (currentPageTitle) {
      document.title = `${currentPageTitle} - ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }

    // Also update the html lang attribute
    document.documentElement.lang = language;
  }, [language, pageTitle, location.pathname]);
};