import callIcon from '../assets/lodha-alibaug/call.svg';

const connectivityTimes = [
  { time: '5 mins', place: 'Shree Shree Omkareshwar Temple' },
  { time: '16 mins', place: 'Jagannath Temple' },
  { time: '16 mins', place: 'Sun Temple' },
  { time: '4 mins', place: 'Muhana Beach' },
  { time: '10 mins', place: 'Swargadwar Sea Beach' },
  { time: '14 mins', place: 'Puri Sea Beach' },
  { time: '5 mins', place: 'Sunrise View Point' },
  { time: '7 mins', place: 'New Marine Drive Road' },
];

const LocationSection = () => {
  return (
    <section className="lifeStyleSec bgColorGrey exploreSec" id="location">
      <div className="container">
        <div className="row">
          <div className="textListDiv">
            {/* Left Side: Heading, Description, Connectivity Times, Call Us CTA */}
            <div className="ContentText" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h2 className="headingH1" style={{ marginBottom: '10px' }}>Aakash India | Puri</h2>
                <p style={{ fontSize: '15px', color: 'var(--color-lodha-text-light)', lineHeight: '1.6' }}>
                  Your new address brings coastal calm, spiritual comfort, local art, and joyful traditions together in Puri.
                </p>
              </div>

              <div className="connectivityListDiv">
                <div className="connectivityList">
                  {connectivityTimes.map((item, idx) => (
                    <div className="connectivityCard" key={idx}>
                      <span className="placeName">{item.place}</span>
                      <strong className="timeText">{item.time}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="tel:7859055648"
                  className="goldenBorderBtn"
                  style={{
                    marginTop: '10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <img
                    src={callIcon}
                    alt="Call"
                    style={{ width: '16px', height: '16px', filter: 'brightness(0)' }}
                    className="ctaCallIcon"
                  />
                  Call Us
                </a>
              </div>
            </div>

            {/* Right Side: Embedded Google Map */}
            <div
              className="mapDiv"
              style={{
                flex: 1,
                minHeight: '380px',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3754.108795709179!2d85.78886!3d19.792984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQ3JzM0LjciTiA4NcKwNDcnMTkuOSJF!5e0!3m2!1sen!2sin!4v1783580646268!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Aakash India Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;