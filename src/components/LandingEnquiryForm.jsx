import { useState } from 'react';
import { submitEnquiry } from '../utils/submitEnquiry';

const LandingEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsappOptIn: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitEnquiry({ ...formData, source: 'Landing Page Inline Form' });
      alert('Thank you for your enquiry!');
      setFormData({ name: '', phone: '', whatsappOptIn: false });
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="landingEnquirySec" id="enquire">
      <div className="container">
        <div className="landingEnquiryWrap">
          <div className="landingEnquiryText">
            <span className="section-label">Enquire Now</span>
            <h2 className="headingH1">Request a call back</h2>
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
            <div className="formControlsCheck whatsappOptIn">
              <input
                type="checkbox"
                id="landing-whatsapp-opt-in"
                name="whatsappOptIn"
                checked={formData.whatsappOptIn}
                onChange={handleChange}
              />
              <label htmlFor="landing-whatsapp-opt-in">Send updates on WhatsApp</label>
            </div>
            <button type="submit" className="submitBtn landingSubmitBtn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Enquire Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LandingEnquiryForm;