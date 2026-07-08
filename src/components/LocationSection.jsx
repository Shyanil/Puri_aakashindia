import { useState } from 'react';
import webIcons from '../assets/lodha-alibaug/Web-Icons.webp';

const connectivityData = [
  { name: 'Mandwa Jetty', time: '5 mins' },
  { name: 'Mandwa Beach', time: '5 mins' },
  { name: 'Gateway of India', time: '25 mins' },
  { name: 'South Mumbai', time: '25 mins' },
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
    <section className="lifeStyleSec bgColorGrey exploreSec">
      <div className="container">
        <div className="row">
          <div className="textListDiv">
            <div className="ContentText">
              <h2 className="headingH1">
                A world apart yet moments away from South Mumbai
              </h2>
              <p>
                Aakash India redefines South Mumbai's legacy, offering a serene haven just 20
                minutes by boat from SoBo and 5 minutes from Mandwa Jetty. It's not about leaving
                SoBo—it's about expanding, enhancing, and elevating it. Nestled away from the city's
                chaos yet seamlessly connected, this exclusive enclave offers the perfect blend of
                tranquility and accessibility.
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
              x
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