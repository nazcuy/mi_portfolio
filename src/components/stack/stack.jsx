import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import teclado from '../../assets/images/teclado.jpg';
import './stack.css';

const stackData = [
  {
    id: 1,
    category: 'Frontend',
    icons: [
      { src: "https://img.icons8.com/color/48/html-5--v1.png", alt: "HTML" },
      { src: "https://img.icons8.com/color/48/css3.png", alt: "CSS" },
      { src: "https://img.icons8.com/color/48/react-native.png", alt: "React" },
      { src: "https://img.icons8.com/color/48/javascript--v1.png", alt: "JS" },
      { src: "https://img.icons8.com/color/48/bootstrap--v2.png", alt: "Bootstrap" },
    ],
  },
  {
    id: 2,
    category: 'Backend',
    icons: [
      { src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-shadow-tal-revivo.png", alt: "Node.js" },
      { src: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png", alt: "Java" },
      { src: "https://img.icons8.com/color/48/spring-logo.png", alt: "Spring" },
      { src: "https://img.icons8.com/color/48/python--v1.png", alt: "Python" },
      { src: "https://img.icons8.com/nolan/96/flask.png", alt: "Flask" },
      { src: "https://img.icons8.com/fluency/48/my-sql.png", alt: "MySql" },
    ],
  },
  {
    id: 3,
    category: 'Aplicaciones Móviles',
    icons: [
      { src: "https://img.icons8.com/nolan/48/react-native.png", alt: "React" },
      { src: "https://img.icons8.com/color/96/expo.png", alt: "Expo" },
      { src: "https://img.icons8.com/color/48/javascript--v1.png", alt: "JS" },
      { src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-color-tal-revivo.png", alt: "Firebase" },
      { src: "https://img.icons8.com/arcade/48/android-os.png", alt: "Android" },
    ],
  },
  {
    id: 4,
    category: 'Integración IoT',
    icons: [
      { src: "https://img.icons8.com/fluency/48/arduino.png", alt: "Arduino" },
      { src: "https://img.icons8.com/color/48/python--v1.png", alt: "Python" },
      { src: "https://img.icons8.com/stickers/48/arduino-uno-board.png", alt: "UNO" },
    ],
  }
];

function Stack() {
  const [activeCard, setActiveCard] = useState(null);
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    delay: 300,
  });

  const handleCardClick = (cardId) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
    }
  };


  return (
    <section id="stack" className="section-stack">
      <div className="stack-container">
        <h2 className="stack-main-title">Stack Tecnológico</h2>
        
        <div className="stack-cards-container" ref={cardsRef}>
          <div className="stack-cards">
            {stackData.map((item, index) => (
              <div 
                key={item.id}
                className={`stack-rectangle ${activeCard === item.id ? 'active' : ''} ${cardsInView ? 'slide-in' : ''}`}
                onClick={() => handleCardClick(item.id)}
                style={{ 
                  transitionDelay: cardsInView ? `${index * 0.5}s` : '0s'
                }}
              >
                <h3 className="stack-rectangle-title">{item.category}</h3>
                <div className={`stack-icons-row ${activeCard === item.id ? 'visible' : ''}`}>
                  {item.icons.map((icon, idx) => (
                    <img 
                      key={idx}
                      width="50" 
                      height="50" 
                      src={icon.src} 
                      alt={icon.alt}
                      className="stack-icon-hover"
                      title={icon.alt}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="stack-image-section" ref={imageRef}>
          <div className={`stack-image-container ${imageInView ? 'slide-up' : ''}`}>
            <img 
              src={teclado} 
              alt="Stack Tecnológico"
              className="stack-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;