import { useEffect } from 'react';
import gsap from 'gsap';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import StickyBanner from './components/StickyBanner';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import CustomizedSection from './components/CustomizedSection';
import BranchesSection from './components/BranchesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Animate navbar container entrance on mount
    gsap.fromTo(
      '.brand-navbar-container',
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    );
  }, []);

  const handleExploreClick = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Preloader />
      <StickyBanner />
      <Navbar />
      
      <main className="main-content">
        <HeroSection onExploreClick={handleExploreClick} />
        <ProductsSection />
        <CustomizedSection />
        <BranchesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
