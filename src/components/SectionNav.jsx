import { useState } from 'react';

const SectionNav = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className='secodaryNav'>
      <div className='container'>
        <div className='row'>
          <ul>
            <li>
              <a href='#about' className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About</a>
            </li>
            <li>
              <a href='#location' className={activeTab === 'location' ? 'active' : ''} onClick={() => setActiveTab('location')}>Location</a>
            </li>
          </ul>
          <ul className='mNone'>
            <li>
              <a href='tel:7859055648' className='enquireForm'>Call Us: 7859055648</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionNav;