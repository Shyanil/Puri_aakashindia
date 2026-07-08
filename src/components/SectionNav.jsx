const SectionNav = ({ onEnquireClick }) => {
  return (
    <section className='secodaryNav'>
      <div className='container'>
        <div className='row'>
          <ul>
            <li>
              <a href='#about' className='active'>About</a>
            </li>
            <li>
              <a href='https://www.lodhagroup.com/projects/residential-property-in-mumbai/lodha-alibaug/location'>Location</a>
            </li>
          </ul>
          <ul className='mNone'>
            <li>
              <a href='javascript:void(0);' className='enquireForm' onClick={onEnquireClick}>Enquire</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionNav;
