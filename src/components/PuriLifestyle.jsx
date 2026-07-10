import anugrahaImg from '../assets/aakash-india/anugraha.webp';
import sannidhyaImg from '../assets/aakash-india/sannidhya.webp';
import paramparaImg from '../assets/aakash-india/parampara.webp';
import sanskaraImg from '../assets/aakash-india/sanskara.webp';
import sangamaImg from '../assets/aakash-india/sangama.webp';

const spiritualSections = [
  {
    label: 'Blessings',
    heading: 'अनुग्रह | ANUGRAHA',
    text: 'Every blessing has a way of finding you.',
    description: 'Jagannath temple with a fluttering flag. A family with kids, parents & grandparents standing next to the temple.',
    image: anugrahaImg,
  },
  {
    label: 'Divine Presence',
    heading: 'सान्निध्य | SANNIDHYA',
    text: 'To live close to the divine is a blessing in itself.',
    description: 'Idol of Lord Jagannath, Subhadra & Balaram with family bowing to the idol.',
    image: sannidhyaImg,
  },
  {
    label: 'Living Traditions',
    heading: 'परम्परा | PARAMPARA',
    text: 'Traditions are the memories of a civilisation.',
    description: 'A family with grandparents doing aarti of Lord Jagannath.',
    image: paramparaImg,
  },
  {
    label: 'Values & Legacy',
    heading: 'संस्कार | SANSKARA',
    text: 'What we leave behind is what truly lives on.',
    description: 'A family with grandparents giving Khaja as prasad to kids',
    image: sanskaraImg,
  },
  {
    label: 'Sacred Confluence',
    heading: 'संगम | SANGAMA',
    text: 'Where the sea, the sacred and your story become one.',
    description: 'The grandparents sitting with kids making sand castle. The young couple watches them with love filled eyes.',
    image: sangamaImg,
  },
];

const PuriLifestyle = () => {
  return (
    <section className="puriLifestyleSec" id="lifestyle">
      <div className="container">
        <div className="lifestyleRows">
          {spiritualSections.map((sec, index) => {
            const isLeftImage = index % 2 === 0;
            return (
              <div
                key={index}
                className={`lifestyleRow ${isLeftImage ? 'even-row' : 'odd-row'}`}
              >
                <div className="lifestyleImgWrap">
                  <img
                    className="lifestyleImg"
                    src={sec.image}
                    alt={sec.description}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>

                {/* Text Content */}
                <div className="lifestyleTextCol">
                  <span className="section-label">{sec.label}</span>
                  <h3 className="section-title">{sec.heading}</h3>
                  <p className="section-desc">{sec.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PuriLifestyle;
