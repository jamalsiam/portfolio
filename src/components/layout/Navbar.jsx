import React, { useState, useEffect } from 'react';
import Container from './Container';
import ThemeCustomizer from '../common/ThemeCustomizer';
import LanguageToggle from '../common/LanguageToggle';
import { useLanguage } from '../../hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const navLinks = [
    { name: content.nav.about, href: '#about' },
    { name: content.nav.experience, href: '#experience' },
    { name: content.nav.projects, href: '#projects' },
    { name: content.nav.architecture, href: '#architecture' },
    { name: content.nav.skills, href: '#skills' },
    { name: content.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Container className="navbar-container">
        <div className="navbar-logo">
          <a href="#" className="logo-link" aria-label="Jamal Abu Siam Homepage">
            <span className="logo-emblem">JS</span>
            <div className="logo-text">
              <span className="logo-name">{content.name.split(' ')[0]}</span>
              <span className="logo-role">{content.roleShort || 'Lead Architect'}</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href} className={link.href === '#contact' ? 'nav-item-contact' : ''}>
                <a href={link.href} className="nav-link-item">{link.name}</a>
              </li>
            ))}
          </ul>
          
          <div className="nav-actions">
            <ThemeCustomizer />
            <a href="#contact" className="btn btn-primary btn-sm nav-cta-btn">
              {content.nav.letsTalk}
            </a>
          </div>
        </nav>

        {/* Mobile Quick Action & Hamburger */}
        <div className="mobile-toggle">
          <button
            type="button"
            className="mobile-quick-lang-btn"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            aria-label="Switch Language"
            title={language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
          >
            <Globe size={13} />
            <span>{language === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          <button 
            className="menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className="btn btn-primary w-full"
                onClick={toggleMobileMenu}
              >
                {content.nav.letsTalk}
              </a>
            </li>
          </ul>

          {/* Dedicated mobile drawer controls */}
          <div className="mobile-drawer-controls">
            <div className="mobile-drawer-section">
              <span className="mobile-drawer-section-title">
                <Globe size={14} /> {language === 'ar' ? 'لغة الموقع' : 'Language'}
              </span>
              <LanguageToggle inline={true} onAction={toggleMobileMenu} />
            </div>

            <ThemeCustomizer inline={true} onAction={toggleMobileMenu} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
