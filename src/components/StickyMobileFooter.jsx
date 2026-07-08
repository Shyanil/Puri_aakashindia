import enquireIcon from '../assets/lodha-alibaug/enquire.svg';

const StickyMobileFooter = ({ onEnquireClick }) => {
  return (
    <div className="stickyHeader">
      <ul className="staticlinksUl">
        <li>
          <a href="javascript:void(0);" onClick={onEnquireClick}>
            <img src={enquireIcon} alt="Enquire" className="img-fluid" loading="lazy" width="18" height="18" />
            Enquire
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StickyMobileFooter;
