import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './StickyBanner.css';

const messages = [
  {
    text: "📞 Call Jagtial: +91 89555 35550 | Metpally: +91 97000 63333",
    actionText: "Call Now",
    actionUrl: "tel:+918955535550"
  },
  {
    text: "📸 Follow us on Instagram for latest collections",
    actionText: "@maha_furnitures",
    actionUrl: "https://instagram.com"
  },
  {
    text: "⭐ Google Rating 4.9/5 Stars - The Mark of Trust",
    actionText: "Read Reviews",
    actionUrl: "https://www.google.com/maps/place/Maha+furnitures/@18.8033595,78.8768484,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcd130020784663:0x5be9daae940e454!8m2!3d18.8033595!4d78.8794233!16s%2Fg%2F11y0qskjjt?entry=ttu"
  },
  {
    text: "👥 1,00,000+ Happy Customers & Beautiful Homes Decorated",
    actionText: "View Products",
    actionUrl: "#products"
  },
  {
    text: "🏆 7+ Years Experience & Trusted Bespoke Wood Craftsmanship",
    actionText: "Explore Designs",
    actionUrl: "#products"
  },
  {
    text: "✨ Professional Staff & Free Precision On-Site Measurements",
    actionText: "Book Visit",
    actionUrl: "#contact"
  }
];

const StickyBanner = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    document.body.classList.add('banner-visible');
    
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => {
      document.body.classList.remove('banner-visible');
      clearInterval(interval);
    };
  }, []);

  const currentMsg = messages[currentIdx];

  return (
    <div className="sticky-banner visible">
      <div className="sticky-banner-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            className="sticky-banner-slide"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <span className="sticky-banner-badge">INFO</span>
            <p className="sticky-banner-text">{currentMsg.text}</p>
            <a href={currentMsg.actionUrl} className="sticky-banner-btn">
              {currentMsg.actionText} <span className="sticky-banner-arrow">→</span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StickyBanner;
