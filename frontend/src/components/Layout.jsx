// src/components/Layout.jsx
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}