import { useState } from 'react';
import { submitEnquiry } from '../utils/submitEnquiry';

const EnquiryForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitEnquiry({ ...formData, source: 'Popup Enquiry Form' });
      alert('Thank you for your enquiry!');
      setFormData({ name: '', phone: '', email: '' });
      onClose();
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                autoComplete="name"
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
                autoComplete="tel"
              />
            </div>
            <div className="formControls">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <button type="submit" className="submitBtn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Enquire Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
