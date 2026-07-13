import { Phone } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glass-card">
        <div className="contact-header">
          <span className="section-subtitle">TAILORED FOR YOU</span>
          <h2 className="section-title">Book an Appointment</h2>
          <p className="contact-desc">
            Our design representatives will visit your home to take precision measurements, assess space layouts, and showcase catalog fabrics. Call us directly to secure a slot.
          </p>
          <div className="contact-call-action">
            <a href="tel:+918955535550" className="btn-section-call">
              <Phone size={20} className="phone-icon-bounce" />
              <span>Call for Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
