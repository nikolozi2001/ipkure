# Ipkure - Multilingual Perfume E-commerce Website

A modern, responsive perfume e-commerce website built with React and Vite, featuring bilingual support (English/Georgian), dynamic title system, and elegant design.

## 🌟 Features

### 🌍 Multilingual Support
- **English** and **Georgian** language support
- URL-based language routing (`/en` and `/ge`)
- Default language: Georgian
- Automatic font switching based on language
- Complete translation system for all content
- **Dynamic document titles** that change based on language and page

### 🎨 Design & Styling
- **Custom Color Palette**: Golden brown, warm beige, dark brown theme
- **Typography**: 
  - English: Poppins font family
  - Georgian: BPG Nino Mtavruli for headers, Noto Sans Georgian for body text
- **Modern Sass** with `@use` syntax (no deprecation warnings)
- **SCSS/Sass** support for advanced styling
- **Tailwind CSS** for utility-first styling
- **Responsive Design** for all screen sizes
- **Interactive elements** with smooth hover effects

### 🏪 E-commerce Features
- **Product showcase cards** with hover effects and animations
- **Dynamic product buttons** with golden-brown hover states
- Shopping cart integration ready
- Search functionality (UI ready)
- User account system (UI ready)
- Wishlist functionality (UI ready)

### 🚀 Technical Features
- **React 19.1.1** with modern hooks
- **Vite 7.1.6** for fast development and building
- **React Router DOM** for navigation
- **Custom Language Context** for state management
- **Dynamic Document Title System** for SEO and UX
- **CSS Variables** for consistent theming
- **Local Font Loading** for better performance
- **Network accessibility** configuration for team development

## 📋 Dynamic Title System

### 🏷️ Language-Aware Titles
- **Georgian**: `იპკურე` (base) / `მთავარი - იპკურე` (with page)
- **English**: `IPKURE` (base) / `Home - IPKURE` (with page)

### 📄 Page-Specific Titles
| Page | Georgian Title | English Title |
|------|---------------|---------------|
| Home | `მთავარი - იპკურე` | `Home - IPKURE` |
| Brand | `ბრენდი - იპკურე` | `Brand - IPKURE` |
| Men | `მამაკაცი - იპკურე` | `Men - IPKURE` |
| Women | `ქალი - იპკურე` | `Women - IPKURE` |
| Gift Sets | `სასაჩუქრე ნაკრები - იპკურე` | `Gift Sets - IPKURE` |
| Contact | `კონტაქტი - იპკურე` | `Contact Us - IPKURE` |

### 🔄 Auto-Detection
- **URL-based**: Automatically detects page from route
- **Language switching**: Maintains page context when changing languages
- **Fallback system**: Graceful handling of unknown pages

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikolozi2001/ipkure.git
   cd ipkure
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - **Local**: `http://localhost:5000`
   - **Network**: `http://[YOUR_IP]:5000` (accessible from other devices)
   - Default route redirects to `/ge` (Georgian)

## 📁 Project Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/          # Product and banner images
│   │   ├── styles/
│   │   │   └── fonts.scss   # Font definitions
│   │   └── fonts/           # Local font files
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   └── Layout.jsx       # Page layout wrapper
│   ├── contexts/
│   │   └── LanguageContext.jsx  # Language context
│   ├── hooks/
│   │   ├── useLanguage.js   # Language hook
│   │   └── useDocumentTitle.js  # Dynamic title hook
│   ├── pages/
│   │   └── HomePage.jsx     # Main homepage
│   ├── App.jsx             # Main app component
│   ├── App.scss            # Global styles and variables
│   └── main.jsx            # App entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Color Palette

```scss
:root {
  --golden-brown: #c99c50;     /* Primary brand color */
  --warm-beige: #ccb195;       /* Secondary color */
  --dark-brown: #582d0e;       /* Accent color */
  --deep-coffee: #391800;      /* Text dark */
  --background-light: #faf9f7; /* Light background */
}
```

## 🌐 Language System

### Supported Languages
- **English** (`/en`): Default for international users
- **Georgian** (`/ge`): Default language and primary target audience

### Adding New Translations

1. **Update translation objects** in components:
   ```javascript
   const translations = {
     en: {
       key: "English text"
     },
     ge: {
       key: "ქართული ტექსტი"
     }
   };
   ```

2. **Use the translation** in JSX:
   ```javascript
   const { language } = useLanguage();
   const t = translations[language];
   
   return <div>{t.key}</div>;
   ```

## 🔤 Typography

### Font Loading
- **Local fonts** stored in `src/assets/fonts/`
- **SCSS imports** in `src/assets/styles/fonts.scss`
- **CSS variables** for easy font switching

### Font Families
```scss
--font-primary-en: 'Poppins', sans-serif;
--font-primary-ge: 'Noto Sans Georgian', sans-serif;
--font-header-ge: 'BPG Nino Mtavruli', 'Noto Sans Georgian', sans-serif;
```

## � Development Configuration

### 🌐 Network Accessibility
- **Host**: `0.0.0.0` (accessible from all network interfaces)
- **Port**: `5000` (custom port configuration)
- **Cross-device testing**: Access from mobile devices on same network
- **Team collaboration**: Share development server with colleagues

### 📱 Dynamic Title Management
```javascript
// Usage in any page component
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function MyPage() {
  useDocumentTitle('brand'); // For predefined pages
  // or
  useDocumentTitle(); // Auto-detects from URL
  
  return <div>Page content</div>;
}
```

## �🛒 Available Scripts

```bash
# Development
npm run dev          # Start development server on port 5000

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Grid layouts** adapt to screen size
- **Typography scaling** for readability

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📋 Todo / Roadmap

### ✅ Completed Features
- [x] Dynamic document title system with language support
- [x] Multilingual content translation system
- [x] Modern Sass configuration with `@use` syntax
- [x] Interactive product cards with hover animations
- [x] Network-accessible development server
- [x] Responsive design implementation
- [x] Custom font loading system
- [x] Color palette and theming system

### 🔄 In Progress
- [ ] Additional page components (Brand, Men, Women, etc.)
- [ ] Enhanced product showcase functionality

### 📅 Planned Features
- [ ] Shopping cart functionality
- [ ] User authentication system
- [ ] Product detail pages
- [ ] Payment gateway integration
- [ ] Advanced product search and filtering
- [ ] Wishlist functionality
- [ ] Product reviews system
- [ ] SEO optimization and meta tags
- [ ] Performance optimization
- [ ] Additional language support (Russian, Turkish)
- [ ] Admin dashboard for content management

### 🔧 Technical Improvements
- [ ] Unit testing implementation
- [ ] E2E testing with Cypress/Playwright
- [ ] PWA features (offline support, push notifications)
- [ ] Image optimization and lazy loading
- [ ] Bundle size optimization

## 🐛 Known Issues

- None at the moment

## 🆕 Recent Updates

### Version 2.0 (Latest)
- ✨ **Dynamic Document Titles**: Language-aware page titles that change automatically
- 🔧 **Modern Sass**: Updated to use `@use` syntax, eliminating deprecation warnings
- 🎨 **Enhanced UI**: Improved product card animations and hover effects
- 🌐 **Network Access**: Development server accessible from all network interfaces
- � **Better UX**: Smoother language switching with maintained page context
- 🚀 **Performance**: Optimized font loading and reduced bundle warnings

### Previous Versions
- v1.0: Initial release with basic multilingual support and responsive design

## �📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nikolozi** - [GitHub Profile](https://github.com/nikolozi2001)

## 🙏 Acknowledgments

- **Poppins** font by Google Fonts
- **BPG Nino Mtavruli** Georgian font
- **Noto Sans Georgian** for Georgian text support
- **Tailwind CSS** for utility classes
- **React** team for the amazing framework
- **Vite** for the fast build tool and hot module replacement

---

## 📞 Support

For support, create an issue in the GitHub repository or contact the development team.

---

**Made with ❤️ for perfume lovers in Georgia and beyond** 🇬🇪