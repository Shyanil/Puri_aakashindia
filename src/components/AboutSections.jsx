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
            <p>Not merely a home in Puri. A blessing from it.</p>
            
            <div className="about-stats-container">
              <div className="about-stat-item">
                <div className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3z" />
                    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                  </svg>
                </div>
                <span>6.34 Acres Land</span>
              </div>

              <div className="about-stat-item">
                <div className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span>689 Apartments</span>
              </div>

              <div className="about-stat-item">
                <div className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="10" width="7" height="12" rx="1" />
                    <rect x="14" y="3" width="7" height="19" rx="1" />
                    <path d="M6 14h1M6 18h1M17 7h1M17 11h1M17 15h1M17 19h1" />
                  </svg>
                </div>
                <span>2 Towers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row textImgGrid evenRow">
          {/* USP 1 */}
          <div className="textImgDiv">
            <div className="imgDiv">
              <img
                src={rathyatraBanner}
                className="img-fluid"
                alt="Jagannath temple with a fluttering flag. A family with kids standing next to the temple."
                title="अनुग्रह | ANUGRAHA & सान्निध्य | SANNIDHYA"
              />
            </div>
            <div className="textDiv">
              <div className="ourPromiseTextDiv ContentText">
                <h2 className="headingH1">अनुग्रह | ANUGRAHA & सान्निध्य | SANNIDHYA</h2>
                <p>
                  Every blessing has a way of finding you. To live close to the divine is a blessing in itself. A life where faith feels near, family feels rooted, and every day begins with the sacred presence of Lord Jagannath.
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
                alt="A family with grandparents performing aarti and giving Khaja prasad to kids."
                title="परम्परा | PARAMPARA & संस्कार | SANSKARA"
              />
            </div>
            <div className="textDiv">
              <div className="ourPromiseTextDiv ContentText">
                <h2 className="headingH1">परम्परा | PARAMPARA & संस्कार | SANSKARA</h2>
                <p>
                  Traditions are the memories of a civilisation, passed gently from one generation to another. From aarti to prasad, every ritual becomes a reminder of what we carry, what we cherish, and what truly lives on.
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
                alt="Grandparents and kids building sandcastles at the beach while a young couple watches with love."
                title="संगम | SANGAMA"
              />
            </div>
            <div className="textDiv">
              <div className="ourPromiseTextDiv ContentText">
                <h2 className="headingH1">संगम | SANGAMA</h2>
                <p>
                  Where the sea, the sacred, and your story become one. A place where childhood, family, devotion, and quiet moments come together to create a life filled with meaning, memory, and love.
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
