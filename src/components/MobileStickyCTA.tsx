import { Phone } from 'lucide-react';
import './MobileStickyCTA.css';

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a href="tel:+918955535550" className="btn-mobile-call-cta">
        <Phone size={18} className="phone-icon-pulse" />
        <span>Call for Appointment</span>
      </a>
    </div>
  );
}
