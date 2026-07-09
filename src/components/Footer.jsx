import footerLogo from '../assets/aakash-india/aakash-india-logo-white.webp';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Left Column: Logo, Tagline, SEO Keywords */}
          <div className="footer-brand-col">
            <a href="https://aakashindia.in/" className="footerLogo">
              <img 
                src={footerLogo} 
                alt="Aakash India" 
                loading="lazy" 
                width="220" 
                height="82" 
              />
            </a>
            <p className="tagline">
              A Legacy of Excellence – Transforming Dreams into Reality for Last 55 Years.
            </p>
            <p className="seo-keywords">
              Aakash India projects in Jamshedpur | <a href="https://aakashindia.in/flat-in-jamshedpur/">Flats Jamshedpur</a> | Premium Project Mango, Jamshedpur | 2/3 bhk in Jamshedpur | Flats in Dobo | Flats in Sonari | Property in Dimna main road
            </p>
          </div>

          {/* Middle Column 1: Company Info Links */}
          <div className="footer-links-col">
            <h4>Company info</h4>
            <ul>
              <li><a href="https://aakashindia.in/about-us/" className="footer-link">About Us</a></li>
              <li><a href="https://aakashindia.in/project/" className="footer-link">Our Projects</a></li>
              <li><a href="https://aakashindia.in/land-development/" className="footer-link">Land Development</a></li>
              <li><a href="https://aakashindia.in/leasing-opportunities/" className="footer-link">Leasing Opportunities</a></li>
              <li><a href="https://aakashindia.in/newsletter" className="footer-link">Newsletters</a></li>
              <li><a href="https://aakashindia.in/faq/" className="footer-link">FAQ</a></li>
            </ul>
          </div>

          {/* Middle Column 2: Useful Links */}
          <div className="footer-links-col">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="https://aakashindia.in/blog/" className="footer-link">Blog</a></li>
              <li><a href="https://aakashindia.in/home-loan-emi-calculator/" className="footer-link">Home Loan EMI Calculator</a></li>
              <li><a href="https://aakashindia.in/contact-us/" className="footer-link">Contact</a></li>
              <li><a href="https://aakashindia.in/privacy-policy/" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Right Column: Get In Touch */}
          <div className="footer-contact-col">
            <h4>GET IN TOUCH</h4>
            <p>
              <a href="https://maps.app.goo.gl/RArUZKFj7j4RLkEB7" target="_blank" rel="noopener noreferrer" className="contact-address-link">
                Corporate Office : Payal Cinema Complex, Mango, Jamshedpur - 831012, India
              </a>
            </p>
            <p>
              <a href="tel:7859055648" className="phone-link">7859055648</a>
            </p>
            <p>
              <a href="mailto:info@aakashindia.in" className="email-link">info@aakashindia.in</a>
            </p>
            
            {/* Social Icons */}
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/AakashIndiaprojects/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/aakashindiap/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@aakashindiagroup" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Youtube">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://in.linkedin.com/company/aakash-india-projects-and-builders-pvt-ltd" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom-bar">
          <p>
            © 2026 – Aakash India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
