import { MapPin, Clock, Phone } from 'lucide-react';
import showroomJagtial from '../assets/showroom_jagtial.png';
import showroomMetpally from '../assets/showroom_metpally.png';
import './BranchesSection.css';

export default function BranchesSection() {
  return (
    <section className="branches-section" id="branches">
      <div className="section-header">
        <span className="section-subtitle">OUR RETAIL DESTINATIONS</span>
        <h2 className="section-title">Visit Our Premium Showrooms</h2>
        <p className="section-desc">
          Come touch, feel, and experience the highest standard of furniture craftsmanship in our showrooms.
        </p>
      </div>

      <div className="branches-grid">
        {/* Metpally Branch */}
        <div className="branch-card">
          <div className="branch-image-wrapper">
            <img src={showroomMetpally} alt="Metpally Showroom" className="branch-img" />
            <span className="branch-tag">Bespoke Beds & Wardrobes</span>
          </div>
          <div className="branch-details">
            <div className="branch-header-row">
              <h3 className="branch-name">Metpally Showroom</h3>
            </div>
            <p className="branch-address">
              RJWP+GQ3, Main road, Metpally, Telangana 505325
            </p>
            <div className="branch-info-rows">
              <div className="branch-info-row">
                <Clock size={16} className="info-icon" />
                <span>Open Daily: 9:30 AM - 9:00 PM</span>
              </div>
              <div className="branch-info-row">
                <Phone size={16} className="info-icon" />
                <a href="tel:+919700063333" className="info-link">+91 97000 63333, +91 97000 73333</a>
              </div>
            </div>
            <div className="branch-actions">
              <a
                href="https://maps.google.com/?q=MAHA+Furnitures+Metpally+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-branch-direction"
              >
                <MapPin size={16} />
                <span>Get Directions</span>
              </a>
              <a href="tel:+919700063333" className="btn-branch-call">
                <Phone size={16} />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Jagtial Branch */}
        <div className="branch-card">
          <div className="branch-image-wrapper">
            <img src={showroomJagtial} alt="Jagtial Showroom" className="branch-img" />
            <span className="branch-tag">Living Room & Luxury Dining</span>
          </div>
          <div className="branch-details">
            <div className="branch-header-row">
              <h3 className="branch-name">Jagtial Showroom</h3>
            </div>
            <p className="branch-address">
              1, 5-33, opp. RK Nursury, Chelgal, Hasnabad, Telangana 505455
            </p>
            <div className="branch-info-rows">
              <div className="branch-info-row">
                <Clock size={16} className="info-icon" />
                <span>Open Daily: 9:30 AM - 9:00 PM</span>
              </div>
              <div className="branch-info-row">
                <Phone size={16} className="info-icon" />
                <a href="tel:+918955535550" className="info-link">+91 89555 35550, +91 8955535551</a>
              </div>
            </div>
            <div className="branch-actions">
              <a
                href="https://www.google.com/maps/place/Maha+furnitures/@18.8033595,78.8768484,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcd130020784663:0x5be9daae940e454!8m2!3d18.8033595!4d78.8794233!16s%2Fg%2F11y0qskjjt?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-branch-direction"
              >
                <MapPin size={16} />
                <span>Get Directions</span>
              </a>
              <a href="tel:+918955535550" className="btn-branch-call">
                <Phone size={16} />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
