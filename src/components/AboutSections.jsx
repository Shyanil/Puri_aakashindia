import rathyatraBanner from '../assets/aakash-india/rathyatra-banner.webp';
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
                title="A Sanctuary of Peace and Serenity"
              />
            </div>
            <div className="textDiv">
              <div className="ourPromiseTextDiv ContentText">
                <h2 className="headingH1">A Sanctuary of Peace and Serenity</h2>
                <p>
                  Every day here is a blessing. Experience a life of comfort and tranquility where the gentle coastal breeze meets spiritual harmony, keeping you connected to your family and a peaceful everyday rhythm.
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
