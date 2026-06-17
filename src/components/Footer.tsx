import { Shield, Percent, Phone, Mail, MapPin } from 'lucide-react';
import logoIcon from '../assets/new_logo_without_bg.png';
import './Footer.css';

export default function Footer() {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="brand-footer">
      <div className="footer-container">
        <div className="footer-brand-column">
          <div className="footer-logo-row">
            <img src={logoIcon} className="footer-logo-img" alt="MAHA Furnitures" />
          </div>
          <p className="footer-tagline">
            Crafting premium bespoke living experiences for homes in Jagtial, Metpally, and nearby areas. High-quality materials and unbeatable direct-from-factory pricing.
          </p>
          <div className="footer-badges">
            <div className="footer-badge-item">
              <Shield size={14} className="badge-icon" />
              <span>Premium Quality</span>
            </div>
            <div className="footer-badge-item">
              <Percent size={14} className="badge-icon" />
              <span>Best Prices</span>
            </div>
          </div>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-col-title">Quick Navigation</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => handleLinkClick('home')} className="footer-btn-link">Home</button></li>
            <li><button onClick={() => handleLinkClick('products')} className="footer-btn-link">Products</button></li>
            <li><button onClick={() => handleLinkClick('about')} className="footer-btn-link">Our Process</button></li>
            <li><button onClick={() => handleLinkClick('branches')} className="footer-btn-link">Showrooms</button></li>
            <li><button onClick={() => handleLinkClick('contact')} className="footer-btn-link">Book Visit</button></li>
          </ul>
        </div>

        <div className="footer-contact-column">
          <h4 className="footer-col-title">Central Inquiries</h4>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <Phone size={14} />
              <a href="tel:+918121659727">+91 81216 59727 (Jagtial)</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} />
              <a href="tel:+919849313939">+91 98493 13939 (Metpally)</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <a href="mailto:info@mahafurnitures.com">info@mahafurnitures.com</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={14} />
              <span>Jagtial & Metpally, Telangana</span>
            </div>
          </div>
          <div className="footer-social-row">
            <a href="https://wa.me/918121659727" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-btn whatsapp">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M17.472 14.382c-.022-.079-.186-.208-.432-.332-.246-.124-1.455-.718-1.68-.8-.223-.08-.387-.12-.551.124-.165.245-.639.8-.782.964-.143.165-.287.186-.532.063-.247-.124-1.042-.384-1.986-1.223-.733-.653-1.229-1.46-1.373-1.706-.143-.245-.015-.378.109-.5.112-.11.246-.287.37-.43.123-.143.165-.245.247-.408.082-.166.04-.31-.02-.432-.061-.124-.551-1.328-.755-1.82-.2-.482-.4-.417-.551-.425-.143-.008-.308-.01-.472-.01s-.432.062-.658.308c-.226.246-.865.845-.865 2.062 0 1.218.887 2.396.995 2.551.109.155 1.743 2.66 4.22 3.731.59.255 1.05.408 1.41.522.593.189 1.134.162 1.562.097.477-.071 1.456-.595 1.662-1.17.206-.576.206-1.07.145-1.171zM12 2C6.477 2 2 6.477 2 12c0 2.13.67 4.102 1.812 5.738L2.03 21.97l4.38-1.15A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.84 0-3.568-.535-5.027-1.462l-.36-.228-2.6 1.362.715-2.723-.255-.386C3.535 15.114 3 13.623 3 12c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-row">
        <p>© {new Date().getFullYear()} MAHA Furnitures. All rights reserved. Crafted for Premium Bespoke Living.</p>
      </div>
    </footer>
  );
}
