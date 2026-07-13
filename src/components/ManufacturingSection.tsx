import { useRef } from 'react';
import { Factory, Hammer, Layers, ClipboardCheck, Sparkles, Phone, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ManufacturingSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ManufacturingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up title and subtitle
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
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

    // Left side image slide in from left
    gsap.fromTo(leftRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Right side cards stagger fade in
    if (rightRef.current) {
      gsap.fromTo(rightRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Bottom full-width card fade up
    gsap.fromTo(bottomCardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bottomCardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: containerRef });

  const handleVisitClick = () => {
    const factoryEl = document.getElementById('factory');
    if (factoryEl) {
      factoryEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="manufacturing-section" id="manufacturing" ref={containerRef}>
      <div className="manufacturing-container">
        
        {/* Section Header */}
        <div className="section-header" ref={titleRef}>
          <span className="section-subtitle">IN-HOUSE CRAFTSMANSHIP</span>
          <h2 className="section-title">Our Manufacturing Unit</h2>
          <p className="section-desc">
            Every customized furniture piece is proudly crafted in our own manufacturing unit by experienced craftsmen using premium-quality materials.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="manufacturing-grid">
          
          {/* Left Side: Image Showcase */}
          <div className="manufacturing-left" ref={leftRef}>
            <div className="manufacturing-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop" 
                alt="Maha Furnitures Manufacturing Unit" 
                className="factory-img"
              />
              <div className="floating-badge">
                <Sparkles size={16} className="badge-star-icon" />
                <div className="badge-text">
                  <span className="badge-number">7+ Years</span>
                  <span className="badge-sub">Manufacturing Exp.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="manufacturing-right" ref={rightRef}>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Factory size={24} className="feature-icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">In-house Manufacturing</h3>
                <p className="feature-description">
                  We manufacture furniture ourselves instead of outsourcing.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Layers size={24} className="feature-icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Premium Materials</h3>
                <p className="feature-description">
                  We use carefully selected wood, plywood, foam, fabric and accessories.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Hammer size={24} className="feature-icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Skilled Craftsmen</h3>
                <p className="feature-description">
                  Our experienced craftsmen build every piece with precision and care.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ClipboardCheck size={24} className="feature-icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Quality Inspection</h3>
                <p className="feature-description">
                  Every product goes through strict quality checks before delivery.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Highlight Card */}
        <div className="manufacturing-bottom-card" ref={bottomCardRef}>
          <div className="bottom-card-icon-wrap">
            <Factory size={36} className="bottom-card-icon" />
          </div>
          <div className="bottom-card-info">
            <h3 className="bottom-card-heading">Made in Our Own Manufacturing Unit</h3>
            <p className="bottom-card-text">
              Every customized furniture order is designed, manufactured, finished, and quality-tested in our own production facility. This allows us to maintain premium quality, better customization, faster delivery, and complete customer satisfaction.
            </p>
            <div className="bottom-card-actions">
              <button className="btn-visit-factory" onClick={handleVisitClick}>
                <Calendar size={18} />
                <span>Visit Factory</span>
              </button>
              <a href="tel:+918955535550" className="btn-call-enquiry">
                <Phone size={18} />
                <span>Call for Manufacturing Enquiry</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
