import rathyatraBanner from '../assets/aakash-india/rathyatra-banner.webp';
import riveraFront from '../assets/aakash-india/rivera-front.webp';
import poolCam from '../assets/aakash-india/pool-cam-2.webp';
import logo from '../assets/aakash-india/aakash-india-logo-color.webp';

const AboutSections = () => {
  return (
    <section className="ourStorySec" id="about">
      <div className="container">
        <div className="row">
          <div className="ContentText text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
            <img
              src={logo}
              alt="Aakash India"
              className="img-fluid logo_pro"
              width="300"
              loading="lazy"
            />
            <p>Where your <i>Joie de Vivre</i> begins.</p>
          </div>
        </div>

        <div className="row textImgGrid evenRow">
          {/* USP 1 */}
          <div className="textImgDiv">
            <div className="imgDiv">
              <img
                src={rathyatraBanner}
                className="img-fluid"
                alt="Aakash India Rathyatra banner"
                title="Aakash India Rathyatra"
              />
            </div>
            <div className="textDiv">
              <div className="ourPromiseTextDiv ContentText">
                <h2 className="headingH1">More than a destination - a way of life</h2>
                <p>
                  Imagine basking in the tranquility of nature, just minutes from Mumbai. Imagine
                  escaping to a haven of luxury. Imagine elegance as a lifestyle. Imagine connections
                  grounded in the remarkable. Now turn your dream into a reality. From imagine to
                  living <i>La Belle Vie</i>.
                </p>
              </div>
            </div>
          </div>

          {/* USP 2 */}
          <div className="textImgDiv">
            <div className="imgDiv">
              <img
                src={riveraFront}
                className="img-fluid"
                alt="Aakash Rivera front elevation"
                title="Aakash Rivera"
              />
            </div>
            <div className="textDiv">
              <div className="ourPromiseTextDiv ContentText">
                <h2 className="headingH1">A world of immediate connections</h2>
                <p>
                  Just a breezy 20-minute speedboat ride from South Mumbai and only 5 minutes from
                  Mandwa Jetty, Aakash India is an oasis where exclusivity meets effortless
                  accessibility. A private sanctuary embraced by nature, yet seamlessly connected to
                  the city's vitality.
                </p>
              </div>
            </div>
          </div>

          {/* USP 3 */}
          <div className="textImgDiv">
            <div className="imgDiv">
              <img
                src={poolCam}
                className="img-fluid"
                alt="Aakash India pool view"
                title="Aakash India Pool"
              />
            </div>
            <div className="textDiv">
              <div className="ourPromiseTextDiv ContentText">
                <h2 className="headingH1">
                  A vibrant <i>Art de Vivre</i>
                </h2>
                <p>
                  Life at Aakash India is an ode to refined living. Here, every moment is designed
                  to inspire connection—with oneself, with others, and with the sublime surroundings.
                  A world where art, culture, and beauty converge, crafting an unparalleled lifestyle
                  for those who seek the extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
