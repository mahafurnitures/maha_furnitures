import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'jagtial',
    requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', branch: 'jagtial', requirements: '' });
      }, 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glass-card">
        <div className="contact-header">
          <span className="section-subtitle">TAILORED FOR YOU</span>
          <h2 className="section-title">Book a Free Site Measurement</h2>
          <p className="contact-desc">
            Fill out the form below. Our design representatives will contact you to confirm a home visit slot, take measurements, and show fabric catalogs.
          </p>
        </div>

        {isSubmitted ? (
          <div className="form-success-container">
            <CheckCircle className="success-icon" size={48} />
            <h3>Measurement Visit Booked!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Our design consultant will call you at <strong>{formData.phone}</strong> shortly to coordinate our visit.
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="booking-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="e.g. Sainath Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="branch" className="form-label">Preferred Showroom / Service</label>
                <select 
                  id="branch" 
                  value={formData.branch}
                  onChange={(e) => setFormData({...formData, branch: e.target.value})}
                  className="form-select"
                >
                  <option value="jagtial">Jagtial Showroom Consultation</option>
                  <option value="metpally">Metpally Showroom Consultation</option>
                  <option value="home">Home Measurement & Design Catalog Visit</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="requirements" className="form-label">What are you looking for? (Optional)</label>
                <textarea 
                  id="requirements" 
                  rows={3}
                  placeholder="e.g. L-Shape Sofa in custom color, hydraulic storage beds, marble dining table size..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  className="form-textarea"
                />
              </div>
            </div>

            <button type="submit" className="btn-submit-form">
              <span>Confirm Free Consultation</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
