import { useState } from 'react';
import { submitEnquiry } from '../utils/submitEnquiry';

const LandingEnquiryForm = () => {
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
      await submitEnquiry({ ...formData, source: 'Landing Page Inline Form' });
      alert('Thank you for your enquiry!');
      setFormData({ name: '', phone: '', email: '' });
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="landingEnquirySec" id="enquire">
        <div className="landingEnquiryWrap">
          <div className="landingEnquiryText">
            <span className="section-label">Early Access Now Live</span>
            <h2 className="headingH1">Limited Units at Pre-Launch Pricing</h2>
          </div>
          <form className="landingEnquiryForm" onSubmit={handleSubmit}>
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
            <button type="submit" className="submitBtn landingSubmitBtn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Enquire Now'}
            </button>
          </form>
        </div>
    </div>
  );
};

export default LandingEnquiryForm;
