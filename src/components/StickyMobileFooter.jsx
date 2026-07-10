import { useEffect, useState } from 'react';
import callIcon from '../assets/lodha-alibaug/call.svg';

const StickyMobileFooter = () => {
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
          <a href="tel:7859055648" aria-label="Call 7859055648">
            <img src={callIcon} alt="" className="img-fluid" loading="lazy" width="18" height="18" />
            Call 7859055648
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StickyMobileFooter;
