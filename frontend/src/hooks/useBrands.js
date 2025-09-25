import { useState, useEffect } from "react";
import { useLanguage } from "./useLanguage";

// Mock brand data - in a real app, this would come from an API
const getBrandsData = (language) => [
  {
    id: 1,
    name: "Chanel",
    category: "luxury",
    description: language === "en" 
      ? "Timeless elegance and sophistication in every bottle" 
      : "უდროო ელეგანტურობა და სოფისტიკურობა ყველა ბოთლში",
    heritage: "1910",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 25,
    newArrivals: 5,
    featured: true,
    country: "France",
    foundedBy: "Gabrielle Chanel"
  },
  {
    id: 2,
    name: "Tom Ford",
    category: "luxury",
    description: language === "en" 
      ? "Bold and luxurious modern fragrances for the contemporary individual" 
      : "თამამი და ლუქსუსური თანამედროვე სუნამოები თანამედროვე ინდივიდისთვის",
    heritage: "2006",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 18,
    newArrivals: 3,
    country: "USA",
    foundedBy: "Tom Ford"
  },
  {
    id: 3,
    name: "Dior",
    category: "designer",
    description: language === "en" 
      ? "French luxury and artistry meets modern perfumery" 
      : "ფრანგული ლუქსი და ხელოვნება თანამედროვე პარფიუმერიასთან",
    heritage: "1947",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 22,
    newArrivals: 4,
    country: "France",
    foundedBy: "Christian Dior"
  },
  {
    id: 4,
    name: "Creed",
    category: "niche",
    description: language === "en" 
      ? "Artisanal excellence and traditional craftsmanship since 1760" 
      : "ხელოსნური სრულყოფილება და ტრადიციული ხელოსნობა 1760 წლიდან",
    heritage: "1760",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 12,
    newArrivals: 2,
    country: "England",
    foundedBy: "James Henry Creed"
  },
  {
    id: 5,
    name: "Versace",
    category: "designer",
    description: language === "en" 
      ? "Italian glamour and boldness in luxurious fragrances" 
      : "იტალიური გლამური და თამამი სტილი ლუქსუსურ სუნამოებში",
    heritage: "1978",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 15,
    newArrivals: 6,
    country: "Italy",
    foundedBy: "Gianni Versace"
  },
  {
    id: 6,
    name: "Gucci",
    category: "popular",
    description: language === "en" 
      ? "Contemporary luxury with rich Italian heritage and innovative design" 
      : "თანამედროვე ლუქსი მდიდარი იტალიური მემკვიდრეობითა და ინოვაციური დიზაინით",
    heritage: "1921",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 20,
    newArrivals: 7,
    country: "Italy",
    foundedBy: "Guccio Gucci"
  },
  {
    id: 7,
    name: "Maison Margiela",
    category: "niche",
    description: language === "en" 
      ? "Avant-garde and innovative scents that challenge conventional perfumery" 
      : "ავანგარდული და ინოვაციური სუნები, რომლებიც აჩუქებს ჩვეულებრივ პარფიუმერიას",
    heritage: "1988",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 8,
    newArrivals: 3,
    country: "Belgium",
    foundedBy: "Martin Margiela"
  },
  {
    id: 8,
    name: "Yves Saint Laurent",
    category: "designer",
    description: language === "en" 
      ? "Parisian chic and modernity with revolutionary spirit" 
      : "პარიზული შიკი და თანამედროვეობა რევოლუციური სულისკვეთებით",
    heritage: "1961",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 16,
    newArrivals: 4,
    country: "France",
    foundedBy: "Yves Saint Laurent"
  },
  {
    id: 9,
    name: "Armani",
    category: "popular",
    description: language === "en" 
      ? "Sophisticated Italian elegance with modern sensibility" 
      : "სოფისტიკური იტალიური ელეგანტურობა თანამედროვე მგრძნობელობით",
    heritage: "1975",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 19,
    newArrivals: 5,
    country: "Italy",
    foundedBy: "Giorgio Armani"
  },
  {
    id: 10,
    name: "Hermès",
    category: "luxury",
    description: language === "en" 
      ? "French luxury craftsmanship and timeless sophistication" 
      : "ფრანგული ლუქსუსური ხელოსნობა და უდროო სოფისტიკურობა",
    heritage: "1837",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 14,
    newArrivals: 2,
    country: "France",
    foundedBy: "Thierry Hermès"
  },
  {
    id: 11,
    name: "Byredo",
    category: "niche",
    description: language === "en" 
      ? "Modern Swedish minimalism meets luxury fragrance artistry" 
      : "თანამედროვე შვედური მინიმალიზმი ლუქსუსურ სუნამოების ხელოვნებასთან",
    heritage: "2006",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 11,
    newArrivals: 4,
    country: "Sweden",
    foundedBy: "Ben Gorham"
  },
  {
    id: 12,
    name: "Dolce & Gabbana",
    category: "designer",
    description: language === "en" 
      ? "Passionate Italian romance and Mediterranean luxury" 
      : "ვნებიანი იტალიური რომანტიკა და ხმელთაშუაზღვისპირული ლუქსი",
    heritage: "1985",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 17,
    newArrivals: 6,
    country: "Italy",
    foundedBy: "Domenico Dolce & Stefano Gabbana"
  }
];

export function useBrands() {
  const { language } = useLanguage();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchBrands = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const brandsData = getBrandsData(language);
        setBrands(brandsData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, [language]);

  // Filter function
  const filterBrands = (searchTerm = "", category = "all") => {
    return brands.filter(brand => {
      const matchesCategory = category === "all" || brand.category === category;
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           brand.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  // Get featured brand
  const getFeaturedBrand = () => {
    return brands.find(brand => brand.featured);
  };

  // Get brands by category
  const getBrandsByCategory = (category) => {
    return brands.filter(brand => brand.category === category);
  };

  // Get brand statistics
  const getBrandStats = () => {
    const totalBrands = brands.length;
    const totalBestsellers = brands.reduce((sum, brand) => sum + brand.bestsellers, 0);
    const totalNewArrivals = brands.reduce((sum, brand) => sum + brand.newArrivals, 0);
    const countries = [...new Set(brands.map(brand => brand.country))].length;

    return {
      totalBrands,
      totalBestsellers,
      totalNewArrivals,
      countries
    };
  };

  return {
    brands,
    loading,
    error,
    filterBrands,
    getFeaturedBrand,
    getBrandsByCategory,
    getBrandStats
  };
}