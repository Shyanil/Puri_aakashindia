import { useState } from 'react';
import qrCode from '../assets/lodha-alibaug/Townhouses_RERA_QR_code.webp';

const ReraSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="faqSec">
      <div className="container">
        <div className="row">
          <div className="accordionMain" style={{ width: '100%' }}>
            <div className="accordionWrapper">
              <h3
                className={`accordionHeading ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                Aakash India &nbsp; RERA
              </h3>
              <div className={`accordionContent ${isOpen ? 'show' : ''}`}>
                <div className="qrDiv">
                  <img
                    src={qrCode}
                    alt="QR"
                    className="img-fluid qrImg"
                    loading="lazy"
                  />
                  <div>
                    <p>
                      Aakash India has been registered via MahaRERA registration number:
                      P52000078856 is available on the website https://maharera.maharashtra.gov.in/
                      under registered projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReraSection;
