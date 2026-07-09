const spiritualSections = [
  {
    heading: 'अनुग्रह | ANUGRAHA',
    text: 'Every blessing has a way of finding you.',
    description: 'Jagannath temple with a fluttering flag. A family with kids, parents & grandparents standing next to the temple.',
  },
  {
    heading: 'सान्निध्य | SANNIDHYA',
    text: 'To live close to the divine is a blessing in itself.',
    description: 'Idol of Lord Jagannath, Subhadra & Balaram with family bowing to the idol.',
  },
  {
    heading: 'परम्परा | PARAMPARA',
    text: 'Traditions are the memories of a civilisation.',
    description: 'A family with grandparents doing aarti of Lord Jagannath.',
  },
  {
    heading: 'संस्कार | SANSKARA',
    text: 'What we leave behind is what truly lives on.',
    description: 'A family with grandparents giving Khaja as prasad to kids',
  },
  {
    heading: 'संगम | SANGAMA',
    text: 'Where the sea, the sacred and your story become one.',
    description: 'The grandparents sitting with kids making sand castle. The young couple watches them with love filled eyes.',
  },
];

const PuriLifestyle = () => {
  return (
    <section className="puriLifestyleSec" id="lifestyle">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {spiritualSections.map((sec, index) => {
            const isLeftImage = index % 2 === 0;
            return (
              <div
                key={index}
                className={`lifestyleRow ${isLeftImage ? 'even-row' : 'odd-row'}`}
              >
                {/* Visual Placeholder Box representing the image */}
                <div className="lifestyleImgPlaceholder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="box-title">Visual Box</p>
                  <p className="box-desc">"{sec.description}"</p>
                </div>

                {/* Text Content */}
                <div className="lifestyleTextCol">
                  <span className="section-label">Section {index + 1}</span>
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
