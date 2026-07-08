import { useState } from 'react';
import qrCode from '../assets/lodha-alibaug/Townhouses_RERA_QR_code.webp';

const ReraSlideOut = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`slide-out ${isOpen ? 'open' : ''}`}>
      <div className="slide-out-tab" onClick={() => setIsOpen(!isOpen)}>
        <span>Click here for <br />RERA details</span>
      </div>
      <div className="slide-out-content">
        <p>
          MahaRERA registration numbers:&nbsp;<br />
          P52000078856<br />
          <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer">
            https://maharera.maharashtra.gov.in
          </a>
        </p>
        <img
          src={qrCode}
          alt="QR Code"
          style={{ width: 80, height: 80, marginTop: 12, float: 'right' }}
        />
      </div>
    </div>
  );
};

export default ReraSlideOut;
