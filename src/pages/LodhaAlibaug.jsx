import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SectionNav from '../components/SectionNav';
import AboutSections from '../components/AboutSections';
import LocationSection from '../components/LocationSection';
import PuriLifestyle from '../components/PuriLifestyle';
// import FinestDevelopments from '../components/FinestDevelopments';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';
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
        <SectionNav />
        <AboutSections />
        <LocationSection />
        <PuriLifestyle />
        {/* <FinestDevelopments /> */}
        <Breadcrumb />
        <EnquiryForm isOpen={enquiryOpen} onClose={closeEnquiry} />
        <StickyMobileFooter onEnquireClick={openEnquiry} />
      </main>
      <Footer />
    </>
  );
};

export default LodhaAlibaug;

