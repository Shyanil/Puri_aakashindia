import { useState } from 'react';
import webIcons from '../assets/lodha-alibaug/Web-Icons.webp';

const locationHighlights = [
  { icon: '~', title: 'Sea-kissed serenity.', text: 'Beach, sea shells, and a calmer everyday rhythm.' },
  { icon: 'J', title: 'Soulful spirituality.', text: 'Close to the sacred spirit of Lord Jagannath.' },
  { icon: 'O', title: 'Timeless artistry.', text: 'Inspired by the grace and heritage of Odissi dance.' },
  { icon: 'K', title: 'Joyful traditions.', text: 'Celebrating Puri through the sweetness of Khaja.' },
];

const connectivityData = [
  { name: 'Puri Beach', time: 'Coastal calm' },
  { name: 'Shree Jagannath Temple', time: 'Spiritual landmark' },
  { name: 'Odissi Heritage', time: 'Cultural rhythm' },
  { name: 'Khaja Traditions', time: 'Local sweetness' },
];

const mapSrc = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3754.108795709179!2d85.78886!3d19.792984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQ3JzM0LjciTiA4NcKwNDcnMTkuOSJF!5e0!3m2!1sen!2sin!4v1783504613985!5m2!1sen!2sin';

const LocationSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const openMap = (event) => {
    event.preventDefault();
    setMapOpen(true);
  };

  return (
    <section className="lifeStyleSec bgColorGrey exploreSec" id="location">
      <div className="container">
        <div className="row">
          <div className="locationIntro ContentText text-center">
            <h2 className="headingH1">Aakash India | Puri</h2>
            <p>Your New Address</p>
          </div>
        </div>

        <div className="locationHighlights" aria-label="Puri lifestyle highlights">
          {locationHighlights.map((item) => (
            <div className="locationHighlight" key={item.title}>
              <span className="locationHighlightIcon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="textListDiv">
            <div className="ContentText">
              <h2 className="headingH1">Aakash India | Puri</h2>
              <p>
                Your new address brings coastal calm, spiritual comfort, local art, and joyful traditions together in Puri.
              </p>
              <div className="mNone" style={{ marginTop: 24 }}>
                <a href="#location-map" className="goldenBorderBtn" onClick={openMap}>
                  View Location
                </a>
              </div>
            </div>
            <div className="listDiv">
              <ul>
                {connectivityData.map((item, index) => (
                  <li key={index} className="loadData">
                    <div>
                      <img
                        src={webIcons}
                        alt={item.name}
                        className="img-fluid"
                        loading="lazy"
                        width="24"
                        height="24"
                      />
                      <p>
                        {item.name}
                        <strong>{item.time}</strong>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', paddingTop: 16, justifyContent: 'flex-start' }}>
                <a
                  href="javascript:void(0);"
                  className="goldenLineBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? 'View Less' : 'View More'}
                </a>
              </div>
              <div
                className="m-flex-important"
                style={{
                  display: 'none',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 16,
                  width: '100%',
                  marginTop: 32,
                }}
              >
                <a href="#location-map" className="goldenBorderBtn" onClick={openMap}>
                  View Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mapOpen && (
        <div className="mapModalOverlay" role="dialog" aria-modal="true" aria-label="Aakash India location map">
          <div className="mapModal">
            <button className="mapModalClose" type="button" aria-label="Close map" onClick={() => setMapOpen(false)}>
              X
            </button>
            <iframe
              id="location-map"
              src={mapSrc}
              title="Aakash India location map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default LocationSection;