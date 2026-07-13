import { useRef } from 'react';
import { Clock, Phone, Navigation, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import showroomJagtial from '../assets/showroom_jagtial.png';
import showroomMetpally from '../assets/showroom_metpally.png';
import './BranchesSection.css';

gsap.registerPlugin(ScrollTrigger);

const branchesData = [
  {
    id: 'jagtial',
    name: 'Jagtial Showroom',
    isPrimary: true,
    tag: 'Living Room & Luxury Dining',
    image: showroomJagtial,
    address: '1, 5-33, opp. RK Nursury, Chelgal, Hasnabad, Telangana 505455',
    timings: 'Open Daily: 9:30 AM - 9:00 PM',
    phones: ['+91 89555 35550', '+91 89555 35551'],
    directionsUrl: 'https://www.google.com/maps/place/Maha+furnitures/@18.8033595,78.8768484,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcd130020784663:0x5be9daae940e454!8m2!3d18.8033595!4d78.8794233!16s%2Fg%2F11y0qskjjt?entry=ttu',
    callUrl: 'tel:+918955535550'
  },
  {
    id: 'metpally',
    name: 'Metpally Showroom',
    tag: 'Bespoke Beds & Wardrobes',
    image: showroomMetpally,
    address: 'RJWP+GQ3, Main road, Metpally, Telangana 505325',
    timings: 'Open Daily: 9:30 AM - 9:00 PM',
    phones: ['+91 97000 63333', '+91 97000 73333'],
    directionsUrl: 'https://maps.google.com/?q=MAHA+Furnitures+Metpally+Telangana',
    callUrl: 'tel:+919700063333'
  },
  {
    id: 'factory',
    name: 'Maha Woodcraft Workshop',
    isFactory: true,
    tag: 'Bespoke Carpentry & Framing',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    address: 'H.No: 4-12, Industrial Area, Chelgal, Jagtial, Telangana 505455',
    timings: 'Open Daily: 9:00 AM - 7:00 PM',
    phones: ['+91 89555 35550'],
    directionsUrl: 'https://share.google/yV2Vio7VBLkakXPVh',
    callUrl: 'tel:+918955535550'
  }
];

export default function BranchesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up section header
    gsap.fromTo(headerRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Stagger fade-up + slide-in for branch cards
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section className="branches-section" id="branches" ref={containerRef}>
      <div className="section-header" ref={headerRef}>
        <span className="section-subtitle">OUR RETAIL & PRODUCTION SPACES</span>
        <h2 className="section-title">Visit Our Premium Showrooms</h2>
        <p className="section-desc">
          Come touch, feel, and experience the highest standard of furniture craftsmanship in our retail spaces and woodworking factory.
        </p>
      </div>

      <div className="branches-grid" ref={gridRef}>
        {branchesData.map((branch) => (
          <div key={branch.id} id={branch.id} className={`branch-card ${branch.isPrimary ? 'featured' : ''} ${branch.isFactory ? 'factory' : ''}`}>
            <div className="branch-image-wrapper">
              <img src={branch.image} alt={branch.name} className="branch-img" />
              <span className="branch-tag">
                {branch.tag}
              </span>
              {branch.isPrimary && (
                <div className="branch-featured-badge">
                  <Star size={10} fill="currentColor" />
                  <span>Primary Store</span>
                </div>
              )}
            </div>
            <div className="branch-details">
              <div className="branch-header-row">
                <h3 className="branch-name">{branch.name}</h3>
                {branch.isPrimary && <span className="branch-year">Main Branch</span>}
                {branch.isFactory && <span className="branch-year factory-label">Workshop</span>}
              </div>
              <p className="branch-address">
                {branch.address}
              </p>
              <div className="branch-info-rows">
                <div className="branch-info-row">
                  <Clock size={16} className="info-icon" />
                  <span>{branch.timings}</span>
                </div>
                <div className="branch-info-row">
                  <Phone size={16} className="info-icon" />
                  <a href={branch.callUrl} className="info-link">{branch.phones.join(', ')}</a>
                </div>
              </div>
              <div className="branch-actions">
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-branch-direction"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </a>
                <a href={branch.callUrl} className="btn-branch-call">
                  <Phone size={16} />
                  <span>Call Branch</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
