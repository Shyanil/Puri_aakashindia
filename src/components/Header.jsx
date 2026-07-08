import { useState, useEffect } from 'react';
import logo from '../assets/aakash-india/aakash-india-logo-white.webp';
import searchIcon from '../assets/lodha-alibaug/search.svg';
import enquireIcon from '../assets/lodha-alibaug/enquire.svg';
import callIcon from '../assets/lodha-alibaug/call.svg';
import chatIcon from '../assets/lodha-alibaug/chat.svg';
import closeIcon from '../assets/lodha-alibaug/close.svg';

const Header = ({ onEnquireClick }) => {
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
                <li><a href="https://www.lodhagroup.com/our-story">Our Story</a></li>
                <li><a href="/esg-sustainablity-environmental-social-governance">Our Impact</a></li>
                <li><a href="javascript:void(0);">Our Projects</a></li>
              </ul>

              <ul className="staticlinksUl">
                <li>
                  <a
                    href="#enquire"
                    onClick={(e) => {
                      e.preventDefault();
                      onEnquireClick?.();
                    }}
                  >
                    <img src={enquireIcon} alt="Enquire" />
                    Enquire
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src={callIcon} alt="Call" />
                    Call
                  </a>
                </li>
                <li>
                  <a href="#chat">
                    <img src={chatIcon} alt="chat" />
                    chat
                  </a>
                </li>
                <li>
                  <a href="#search">
                    <img src={searchIcon} alt="Search" />
                    Search
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Controls */}
            <div className="mobMenu">
              <img
                src={searchIcon}
                alt="Search"
                className="mobSearch"
              />
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
            <a href="https://www.lodhagroup.com/our-story" onClick={() => setMobileMenuOpen(false)}>
              Our Story
            </a>
          </li>
          <li>
            <a href="/esg-sustainablity-environmental-social-governance" onClick={() => setMobileMenuOpen(false)}>
              Our Impact
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" onClick={() => setMobileMenuOpen(false)}>
              Our Projects
            </a>
          </li>
          <li>
            <a
              href="#enquire"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onEnquireClick?.();
              }}
            >
              Enquire
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" onClick={() => setMobileMenuOpen(false)}>
              Call
            </a>
          </li>
          <li>
            <a href="#chat" onClick={() => setMobileMenuOpen(false)}>
              chat
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
