import { useEffect, useState } from 'react';

const StickyMobileFooter = ({ onEnquireClick }) => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');

    if (!footer || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.02 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`stickyHeader ${footerVisible ? 'is-hidden' : ''}`}>
      <ul className="staticlinksUl">
        <li>
          <button type="button" className="stickyEnquireBtn" onClick={onEnquireClick}>
            Enquire Now
          </button>
        </li>
      </ul>
    </div>
  );
};

export default StickyMobileFooter;