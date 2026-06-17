import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import logoIcon from '../assets/new_logo_without_bg.png';

import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest('.brand-navbar-container') && !target.closest('.nav-dropdown-menu')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleLinkClick = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = id;
    }
  };

  return (
    <header className={`brand-navbar-wrapper ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="brand-navbar-container">
        {/* Left Logo Container */}
        <div className="nav-logo-container" onClick={() => handleLinkClick('home')}>
          <img src={logoIcon} className="nav-logo-img" alt="MAHA Furnitures Logo" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-links">
          <button className="nav-desktop-link" onClick={() => handleLinkClick('about')}>
            About Us
          </button>
          <button className="nav-desktop-link" onClick={() => handleLinkClick('products')}>
            Products
          </button>
          <button className="nav-desktop-link" onClick={() => handleLinkClick('branches')}>
            Branches
          </button>
        </nav>

        {/* Desktop Scrolled CTA Button */}
        <button
          className="nav-desktop-cta"
          onClick={() => handleLinkClick('contact')}
        >
          <span className="cta-text">Book Site visit</span>
          <span className="cta-arrow-circle">
            <ArrowRight className="cta-arrow-icon" size={14} />
          </span>
        </button>

        {/* Hamburger Menu Toggle (On the Right) */}
        <button
          className={`nav-menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>

        {/* Compact Dropdown Menu */}
        <div className={`nav-dropdown-menu ${menuOpen ? 'open' : ''}`}>
          <div className="dropdown-links-stack">
            <button className="dropdown-link" onClick={() => handleLinkClick('products')}>
              Products
            </button>
            <button className="dropdown-link" onClick={() => handleLinkClick('branches')}>
              Branches
            </button>
            <button className="dropdown-link" onClick={() => handleLinkClick('about')}>
              About Us
            </button>
          </div>

          {/* Book Site Visit CTA inside Dropdown */}
          <button
            className="dropdown-cta-button"
            onClick={() => handleLinkClick('contact')}
          >
            <span className="cta-text">Book Site visit</span>
            <span className="cta-arrow-circle">
              <ArrowRight className="cta-arrow-icon" size={14} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;





