import { useEffect } from 'react';
import './StickyBanner.css';

const StickyBanner = () => {
  useEffect(() => {
    document.body.classList.add('banner-visible');
    return () => {
      document.body.classList.remove('banner-visible');
    };
  }, []);

  return (
    <div className={`sticky-banner visible`}>
      <div className="sticky-banner-content">
        <span className="sticky-banner-badge">NEW</span>
        <p className="sticky-banner-text">
          Explore our new premium furniture collection with up to <span className="sticky-banner-highlight">20% off</span>.
        </p>
        <button className="sticky-banner-btn">
          Shop Now <span className="sticky-banner-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
