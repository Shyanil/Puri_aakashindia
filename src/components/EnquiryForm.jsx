import { useState } from 'react';

const EnquiryForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry!');
    onClose();
  };

  return (
    <div className={`enquirePopupWrapper ${isOpen ? 'show' : ''}`}>
      <div className="popupContent">
        <button className="closed" type="button" aria-label="Close enquiry form" onClick={onClose}>
          X
        </button>
        <div className="getInTouchForm">
          <div className="ContentText" style={{ textAlign: 'center' }}>
            <h2 className="headingH1" style={{ color: '#c9a84c' }}>
              Request a call back
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="formControls">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                pattern="^[a-zA-Z ]+$"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="formControls">
              <input
                type="email"
                name="email"
                placeholder="E-Mail ID*"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="formControls phoneField">
              <span className="country-code">+91</span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Mobile Number*"
                required
                value={formData.phone}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="formControlsCheck">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <label htmlFor="consent">
                By checking this box you confirm that you have read and agree to our terms of
                service, and that you have read our privacy policy
              </label>
            </div>
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;