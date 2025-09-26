import { useState, useEffect } from "react";
import { useLanguage } from "./useLanguage";

// Mock brand data - in a real app, this would come from an API
const getBrandsData = (language) => [
  {
    id: 1,
    name: "Chance",
    category: "luxury",
    description: language === "en" 
      ? "A whirlwind of energy and vitality, Chance is an unexpected floral fragrance that sweeps you into its world of happiness and fantasy" 
      : "ენერგიისა და სიცოცხლისუნარიანობის ქარიშხალი, Chance არის მოულოდნელი ყვავილოვანი სურნელი, რომელიც გიყვანთ ბედნიერებისა და ფანტაზიის სამყაროში",
    heritage: "2002",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 25,
    newArrivals: 5,
    featured: true,
    country: "France",
    foundedBy: "Jacques Polge"
  },
  {
    id: 2,
    name: "Chanel Chance",
    category: "luxury",
    description: language === "en" 
      ? "An enchanting fragrance that captures the essence of youth and spontaneity with sparkling citrus and soft florals" 
      : "მომხიბლავი სურნელი, რომელიც იჭერს ახალგაზრდობისა და სპონტანურობის არსს ელვარე ციტრუსითა და რბილი ყვავილებით",
    heritage: "2002",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 28,
    newArrivals: 4,
    country: "France",
    foundedBy: "Chanel"
  },
  {
    id: 3,
    name: "Coco Chanel",
    category: "luxury",
    description: language === "en" 
      ? "An oriental fragrance with mysterious depth, celebrating the passionate and liberated spirit of Gabrielle Chanel" 
      : "აღმოსავლური სურნელი საიდუმლო სიღრმით, რომელიც აღნიშნავს გაბრიელ შანელის ვნებიან და გათავისუფლებულ სულს",
    heritage: "1984",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 32,
    newArrivals: 3,
    country: "France",
    foundedBy: "Jacques Polge"
  },
  {
    id: 4,
    name: "Daisy",
    category: "designer",
    description: language === "en" 
      ? "A charming and whimsical fragrance that captures the spirit of youth with fresh florals and fruity notes" 
      : "მომხიბვლელი და ფანტაზიური სურნელი, რომელიც იჭერს ახალგაზრდობის სულს ახალი ყვავილებითა და ხილის ნოტებით",
    heritage: "2007",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 22,
    newArrivals: 6,
    country: "USA",
    foundedBy: "Alberto Morillas"
  },
  {
    id: 5,
    name: "Dolce & Gabbana",
    category: "designer",
    description: language === "en" 
      ? "Passionate Italian romance with Mediterranean warmth, embodying the essence of Italian luxury and craftsmanship" 
      : "ვნებიანი იტალიური რომანტიკა ხმელთაშუაზღვისპირული სითბოთი, რომელიც განასახიერებს იტალიური ლუქსისა და ხელოსნობის არსს",
    heritage: "1985",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 19,
    newArrivals: 7,
    country: "Italy",
    foundedBy: "Domenico Dolce & Stefano Gabbana"
  },
  {
    id: 6,
    name: "Versace Eros",
    category: "designer",
    description: language === "en" 
      ? "A bold and seductive fragrance inspired by Greek mythology, combining fresh mint, Italian lemon and green apple" 
      : "თამამი და მაცდუნებელი სურნელი, შთაგონებული ბერძნული მითოლოგიით, აერთიანებს ახალ პიტნას, იტალიურ ლიმონსა და მწვანე ვაშლს",
    heritage: "2012",
    image: "/api/placeholder/300/200",
    logo: "/api/placeholder/150/80",
    bestsellers: 26,
    newArrivals: 5,
    country: "Italy",
    foundedBy: "Aurelien Guichard"
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