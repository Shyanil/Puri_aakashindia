import blogEmiHome from '../assets/aakash-india/blog-emi-home.webp';
import blogCommercialJamshedpur from '../assets/aakash-india/blog-commercial-jamshedpur.webp';
import blogLuxuryApartments from '../assets/aakash-india/blog-luxury-apartments.webp';

const slides = [
  {
    img: blogEmiHome,
    href: 'https://aakashindia.in/buying-a-home-is-not-difficult-emi-is-your-new-bff/',
    text: "Let's be honest. When most people in hear the word 'EMI', they picture a long, heavy commitment that eats into their salary every month for two decades.",
  },
  {
    img: blogCommercialJamshedpur,
    href: 'https://aakashindia.in/why-commercial-spaces-in-jamshedpur-are-becoming-a-smart-investment/',
    text: 'Jamshedpur has always had strong economic roots - that part is not new. What is new is what the city is growing into. Beyond its industrial identity,',
  },
  {
    img: blogLuxuryApartments,
    href: 'https://aakashindia.in/the-rise-of-luxury-apartments-in-jamshedpur/',
    text: 'Jamshedpur, The Steel City of India, is built on industry, discipline and planned urban growth - the city has now entered a new phase of lifestyle evolution.',
  },
];

const FinestDevelopments = () => {
  return (
    <section className="lifeStyleSec">
      <div className="container">
        <div className="row">
          <div className="textListDiv" style={{ justifyContent: 'center' }}>
            <div className="ContentText text-center" style={{ maxWidth: 700, margin: '0 auto 50px' }}>
              <h2 className="headingH1">
                Creating the world's <i>finest</i> developments
              </h2>
            </div>
          </div>
        </div>
        <div className="ourPrideSliderDiv">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div className="swiper-slide" key={index}>
                <a
                  href={slide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="ourPrideImgDiv">
                    <picture>
                      <source media="(min-width:767px)" srcSet={slide.img} />
                      <img
                        src={slide.img}
                        className="img-fluid"
                        loading="lazy"
                        width="374"
                        height="286"
                        alt={`Development ${index + 1}`}
                      />
                    </picture>
                  </div>
                  <p className="text-center" style={{ maxWidth: 350, margin: '0 auto' }}>
                    {slide.text}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinestDevelopments;