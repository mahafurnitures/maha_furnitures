import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award, Users, Phone } from 'lucide-react';
import founderImage from '../assets/new_founder.png';
import './HeroSection.css';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const founderRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial states
    gsap.set(founderRef.current, { y: 40, opacity: 0, scale: 0.98 });
    gsap.set(titleRef.current, { y: -20, opacity: 0 });
    gsap.set(leftTextRef.current, { x: -100, opacity: 0 });
    gsap.set(rightTextRef.current, { x: 100, opacity: 0 });
    if (iconsRef.current) {
      gsap.set(iconsRef.current.children, { scale: 0, opacity: 0, rotation: -30 });
    }

    tl.to(founderRef.current, { y: 0, opacity: 1, scale: 1, duration: 1.2 })
      .to(titleRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
      .to(leftTextRef.current, { x: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .to(rightTextRef.current, { x: 0, opacity: 1, duration: 0.8 }, "-=0.8");

    if (iconsRef.current) {
      tl.to(iconsRef.current.children, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.6");
    }
  }, []);

  return (
    <section className="brave-hero-section" ref={containerRef}>
      {/* Dark Green Slatted Wall Background */}
      <div className="brave-hero-slats"></div>

      <div className="brave-hero-content">
        {/* Top Centered Text */}
        <div className="brave-text-header" ref={titleRef}>
          <h1 className="brave-headline">Maha Furnitures</h1>
          <p className="brave-subtitle">BHOOMESH - Metpally | CHARY - Jagtial</p>
          <div className="brave-badges-container">
            <div className="brave-badge">
              <Award className="badge-icon" size={18} />
              <span className="badge-text">7+ Years Experience</span>
            </div>
            <div className="brave-badge">
              <Users className="badge-icon" size={18} />
              <span className="badge-text">1,00,000+ Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Lower Content */}
        <div className="brave-lower-content">
          <div className="brave-text-left" ref={leftTextRef}>
            <h2>Best Quality<br />Best Price</h2>
          </div>

          <div className="brave-founder-container">
            <img src={founderImage} alt="Lakkakula Brothers" className="brave-founder-img" ref={founderRef} />
          </div>

          <div className="brave-text-right" ref={rightTextRef}>
            <p className="brave-desc">Design Your custom<br />Furniture for your<br />home</p>
            <button className="brave-cta-btn" onClick={onExploreClick}>
              BOOK SITE VISIT
              <span className="brave-arrow-icon">
                <Phone size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
