# Ipkure - Multilingual Perfume E-commerce Website

A modern, responsive perfume e-commerce website built with React and Vite, featuring bilingual support (English/Georgian) and elegant design.

## 🌟 Features

### 🌍 Multilingual Support
- **English** and **Georgian** language support
- URL-based language routing (`/en` and `/ge`)
- Default language: Georgian
- Automatic font switching based on language
- Complete translation system for all content

### 🎨 Design & Styling
- **Custom Color Palette**: Golden brown, warm beige, dark brown theme
- **Typography**: 
  - English: Poppins font family
  - Georgian: BPG Nino Mtavruli for headers, Noto Sans Georgian for body text
- **SCSS/Sass** support for advanced styling
- **Tailwind CSS** for utility-first styling
- **Responsive Design** for all screen sizes

### 🏪 E-commerce Features
- Product showcase cards with hover effects
- Shopping cart integration ready
- Search functionality (UI ready)
- User account system (UI ready)
- Wishlist functionality (UI ready)

### 🚀 Technical Features
- **React 19.1.1** with modern hooks
- **Vite 7.1.6** for fast development and building
- **React Router DOM** for navigation
- **Custom Language Context** for state management
- **CSS Variables** for consistent theming
- **Local Font Loading** for better performance

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
   - Navigate to `http://localhost:5173`
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
│   │   └── useLanguage.js   # Language hook
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

## 🛒 Available Scripts

```bash
# Development
npm run dev          # Start development server

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

- [ ] Add shopping cart functionality
- [ ] Implement user authentication
- [ ] Add product detail pages
- [ ] Integrate payment gateway
- [ ] Add product search and filtering
- [ ] Implement wishlist functionality
- [ ] Add product reviews system
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Add more language support

## 🐛 Known Issues

- None at the moment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nikolozi** - [GitHub Profile](https://github.com/nikolozi2001)

## 🙏 Acknowledgments

- **Poppins** font by Google Fonts
- **BPG Nino Mtavruli** Georgian font
- **Tailwind CSS** for utility classes
- **React** team for the amazing framework
- **Vite** for the fast build tool

---

## 📞 Support

For support, email your-email@example.com or create an issue in the GitHub repository.

---

**Made with ❤️ for perfume lovers**