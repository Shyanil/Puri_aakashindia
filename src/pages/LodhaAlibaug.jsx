import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SectionNav from '../components/SectionNav';
import AboutSections from '../components/AboutSections';
import LocationSection from '../components/LocationSection';
import FinestDevelopments from '../components/FinestDevelopments';
import ReraSection from '../components/ReraSection';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';
import ReraSlideOut from '../components/ReraSlideOut';
import StickyMobileFooter from '../components/StickyMobileFooter';

const LodhaAlibaug = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const openEnquiry = () => setEnquiryOpen(true);
  const closeEnquiry = () => setEnquiryOpen(false);

  return (
    <>
      <Header onEnquireClick={openEnquiry} />
      <main>
        <Hero />
        <ReraSlideOut />
        <SectionNav onEnquireClick={openEnquiry} />
        <AboutSections />
        <LocationSection />
        <FinestDevelopments />
        <ReraSection />
        <Breadcrumb />
        <EnquiryForm isOpen={enquiryOpen} onClose={closeEnquiry} />
        <StickyMobileFooter onEnquireClick={openEnquiry} />
      </main>
      <Footer />
    </>
  );
};

export default LodhaAlibaug;
