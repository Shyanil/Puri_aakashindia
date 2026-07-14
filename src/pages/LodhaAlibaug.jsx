import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSections from '../components/AboutSections';
import LocationSection from '../components/LocationSection';
import LandingEnquiryForm from '../components/LandingEnquiryForm';
// import FinestDevelopments from '../components/FinestDevelopments';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';
import StickyMobileFooter from '../components/StickyMobileFooter';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const LodhaAlibaug = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const openEnquiry = () => setEnquiryOpen(true);
  const closeEnquiry = () => setEnquiryOpen(false);

  return (
    <>
      <Header onEnquireClick={openEnquiry} />
      <main>
        <Hero />
        <AboutSections />
        <LocationSection />
        <LandingEnquiryForm
          id="location-enquire"
          eyebrow="Priority Registrations Open"
          heading="Enquire now to avail exciting offers!"
        />
        {/* <FinestDevelopments /> */}
        <Breadcrumb />
        <EnquiryForm isOpen={enquiryOpen} onClose={closeEnquiry} />
        <StickyMobileFooter onEnquireClick={openEnquiry} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default LodhaAlibaug;
