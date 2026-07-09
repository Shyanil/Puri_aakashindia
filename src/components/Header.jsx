import { useState, useEffect } from 'react';
import logo from '../assets/aakash-india/aakash-india-logo-white.webp';
import callIcon from '../assets/lodha-alibaug/call.svg';
import closeIcon from '../assets/lodha-alibaug/close.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`mainHeader ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="row">
            {/* Logo */}
            <a
              href="https://aakashindia.in/"
              className="brandLogo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="Aakash India" />
            </a>

            {/* Desktop Nav + Action Buttons */}
            <div className="linksDiv">
              <ul className="linksUl">
                <li><a href="https://aakashindia.in/about-us/">About us</a></li>
                <li><a href="https://aakashindia.in/portfolio/">Projects</a></li>
              </ul>

              <ul className="staticlinksUl">
                <li>
                  <a href="tel:7859055648" className="headerCtaBtn">
                    <img src={callIcon} alt="Call" />
                    7859055648
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Controls */}
            <div className="mobMenu">
              <a href="tel:7859055648" className="mobCallLink" aria-label="Call 7859055648">
                <img
                  src={callIcon}
                  alt="Call"
                  className="mobCallIcon"
                />
              </a>
              <div
                className="burgerMenu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobileMenuOverlay ${mobileMenuOpen ? 'open' : ''}`}>
        <img
          src={closeIcon}
          alt="Close"
          className="closeBtn"
          onClick={() => setMobileMenuOpen(false)}
        />
        <ul>
          <li>
            <a href="https://aakashindia.in/about-us/" onClick={() => setMobileMenuOpen(false)}>
              About us
            </a>
          </li>
          <li>
            <a href="https://aakashindia.in/portfolio/" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li className="mobileMenuCallLi">
            <a href="tel:7859055648" className="headerCtaBtn" onClick={() => setMobileMenuOpen(false)}>
              <img src={callIcon} alt="Call" />
              7859055648
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

