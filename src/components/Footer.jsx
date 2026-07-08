import { useState } from 'react';
import footerLogo from '../assets/aakash-india/aakash-india-logo-white.webp';
import igIcon from '../assets/lodha-alibaug/IG.svg';
import ytIcon from '../assets/lodha-alibaug/YT.svg';
import liIcon from '../assets/lodha-alibaug/LI.svg';
import arrowDown from '../assets/lodha-alibaug/arrowDown.svg';

const Footer = () => {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <footer>
      <div className="mainFooterMenu">
        <div className="container">
          <div className="row">
            <div className="footerLinksWrapper">
              <div className="footerLinksDiv">
                <ul>
                  <li><a href="/our-story">Our Story</a></li>
                  <li><a href="/esg-sustainablity-environmental-social-governance">Our Impact</a></li>
                  <li><a href="/all-projects">Our Developments</a></li>
                  <li><a href="/brand-experience">Experiences</a></li>
                  <li><a href="/signature-hospitality">Signature Hospitality</a></li>
                  <li><a href="/newsroom">Press Room</a></li>
                  <li><a href="/awards">Awards</a></li>
                  <li><a href="/blogs">Blogs</a></li>
                </ul>
              </div>
              <div className="footerLinksDiv">
                <ul>
                  <li><a href="/nri">NRI</a></li>
                  <li><a href="/investor-relations">Investor Relations</a></li>
                  <li><a href="/hr/why-lodha">Careers</a></li>
                  <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                  <li><a href="/disclaimer">Disclaimer</a></li>
                  <li><a href="/contact-us">Contact Us</a></li>
                  <li><a href="https://smartodr.in/login">SMART ODR</a></li>
                </ul>
              </div>
            </div>
            <div className="footerAddressDiv">
              <a href="https://aakashindia.in/" className="footerLogo">
                <img src={footerLogo} alt="Aakash India" className="img-fluid" loading="lazy" width="220" height="82" />
              </a>
              <ul>
                <li>
                  <a href="https://www.instagram.com/lodha" target="_blank" rel="noopener noreferrer">
                    <img src={igIcon} alt="Instagram" className="img-fluid" width="27" height="27" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/thelodhagroup" target="_blank" rel="noopener noreferrer">
                    <img src={ytIcon} alt="youtube" className="img-fluid" width="27" height="27" />
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/lodha-group" target="_blank" rel="noopener noreferrer">
                    <img src={liIcon} alt="linkedin" className="img-fluid" width="27" height="27" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src={arrowDown}
          alt="Arrow"
          className="img-fluid downArrow"
          width="18"
          height="12"
          onClick={() => setShowHidden(!showHidden)}
          style={{ cursor: 'pointer', transform: showHidden ? 'rotate(180deg)' : 'none' }}
        />
      </div>

      <div className={`hiddenLinks ${showHidden ? 'show' : ''}`}>
        <div className="container">
          <h5>Residential Properties</h5>
          <ul>
            <li><a href="https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-bella">Casa Bella</a></li>
            <li><a href="https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-bella-gold">Casa Bella Gold</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-mumbai/lodha-altamount">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-mumbai/lodha-alibaug">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-mumbai/lodha-bellevue-mahalaxmi">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-mumbai/lodha-bellissimo">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-mumbai/lodha-malabar">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-worli/lodha-park">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-mumbai/lodha-sea-face">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-worli/lodha-world-one">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-worli/lodha-world-towers">Aakash India</a></li>
            <li><a href="https://www.lodhagroup.com/projects/residential-property-in-london/no1-grosvenor-square">No.1 Grosvenor Square</a></li>
          </ul>

          <div className="footerBottomLinks">
            <div className="linkDivFooter">
              <h5>Residential Localities</h5>
              <ul>
                <li><a href="https://www.lodhagroup.com/residential-properties-in-south-mumbai">South Mumbai</a></li>
                <li><a href="https://www.lodhagroup.com/residential-properties-in-western-suburbs-mumbai">Western Suburbs Mumbai</a></li>
                <li><a href="https://www.lodhagroup.com/residential-properties-in-eastern-suburbs-mumbai">Eastern Suburbs Mumbai</a></li>
                <li><a href="https://www.lodhagroup.com/residential-projects-in-thane">Thane</a></li>
                <li><a href="https://www.lodhagroup.com/residential-projects-in-kalyan-dombivali">Kalyan Dombivali</a></li>
                <li><a href="https://www.lodhagroup.com/residential-property-in-pune">Pune</a></li>
                <li><a href="https://www.lodhagroup.com/residential-projects-in-bangalore">Bangalore</a></li>
              </ul>
            </div>
            <div className="linkDivFooter">
              <h5>Commercial Properties</h5>
              <ul>
                <li><a href="https://www.lodhagroup.com/projects/commercial-property-in-mumbai/lodha-excelus">Aakash India</a></li>
                <li><a href="https://www.lodhagroup.com/projects/commercial-property-in-mumbai/lodha-promina-worli">Aakash India</a></li>
                <li><a href="https://www.lodhagroup.com/projects/commercial-property-in-pune/lodha-signet-kharadi">Aakash India</a></li>
                <li><a href="https://www.lodhagroup.com/projects/commercial-property-in-mumbai/one-lodha-place">One Lodha Place</a></li>
              </ul>
            </div>
            <div className="linkDivFooter">
              <h5>Commercial Localities</h5>
              <ul>
                <li><a href="https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Chennai">Chennai</a></li>
                <li><a href="https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Mumbai">Mumbai</a></li>
                <li><a href="https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Pune">Pune</a></li>
                <li><a href="https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Bangalore">Bangalore</a></li>
                <li><a href="https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Thane">Thane</a></li>
              </ul>
            </div>
            <div className="linkDivFooter">
              <h5>BHK</h5>
              <ul>
                <li><a href="https://www.lodhagroup.com/all-projects?bedrooms=5%2B+Beds">5+ Beds</a></li>
                <li><a href="https://www.lodhagroup.com/all-projects?bedrooms=4+Beds">4 Beds</a></li>
                <li><a href="https://www.lodhagroup.com/all-projects?bedrooms=3+Beds">3 Beds</a></li>
                <li><a href="https://www.lodhagroup.com/all-projects?bedrooms=2+Beds">2 Beds</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
