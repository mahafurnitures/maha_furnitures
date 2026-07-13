import { useRef } from 'react';
import { Award, Star, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './TrustSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up title
    gsap.fromTo(titleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Stagger cards
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section className="trust-section" id="trust" ref={containerRef}>
      <div className="trust-container">
        
        {/* Section Header */}
        <div className="section-header" ref={titleRef} style={{ marginBottom: '50px' }}>
          <span className="section-subtitle">MAHA FURNITURES ADVANTAGE</span>
          <h2 className="section-title">Why Choose Us</h2>
        </div>

        <div className="trust-grid" ref={cardsRef}>
          
          {/* Card 1: Experienced Staff */}
          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <Award size={32} className="trust-icon" />
            </div>
            <div className="trust-content">
              <span className="trust-badge">OUR EXPERTS</span>
              <h3 className="trust-stat">Experienced Staff</h3>
              <p className="trust-description">
                Our in-house master carpenters and detail-oriented upholstery artisans bring years of dedicated furniture-crafting expertise to every design.
              </p>
            </div>
          </div>

          {/* Card 2: 7+ Years of Experience */}
          <div className="trust-card highlighted">
            <div className="trust-icon-wrapper">
              <Star size={32} className="trust-icon" />
            </div>
            <div className="trust-content">
              <span className="trust-badge gold">LEGACY OF QUALITY</span>
              <h3 className="trust-stat">7+ Years of Experience</h3>
              <p className="trust-description">
                Building a legacy of trust and premium quality since 2019, delivering bespoke furniture crafted with Teak wood and premium materials.
              </p>
            </div>
          </div>

          {/* Card 3: 1 Lakh+ Customers Served */}
          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <Heart size={32} className="trust-icon" />
            </div>
            <div className="trust-content">
              <span className="trust-badge">OUR COMMUNITY</span>
              <h3 className="trust-stat">1 Lakh+ Customers Served</h3>
              <p className="trust-description">
                Deemed a trusted choice for home and office furnishings, having proudly served over one lakh satisfied customers across Telangana.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
