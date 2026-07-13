import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import StickyBanner from './components/StickyBanner';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import CustomizedSection from './components/CustomizedSection';
import ManufacturingSection from './components/ManufacturingSection';
import TrustSection from './components/TrustSection';
import ReviewsSection from './components/ReviewsSection';
import BranchesSection from './components/BranchesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Animate navbar container entrance on mount
    gsap.fromTo(
      '.brand-navbar-container',
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    );

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.6, // Cushion scroll speed for smoother visual triggers
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, // Slightly dampened velocity
    });

    // Setup Lenis requestAnimationFrame loop
    const rafLoop = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(rafLoop);
    };
    requestAnimationFrame(rafLoop);

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Direct GSAP ticker integration
    const tickHandler = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickHandler);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickHandler);
    };
  }, []);

  const handleExploreClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
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
        <ManufacturingSection />
        <TrustSection />
        <ReviewsSection />
        <BranchesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
