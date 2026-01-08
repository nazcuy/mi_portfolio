import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import tecladoNeon from '../../assets/images/teclado-neon.jpg';
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
  const { ref: containerRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleCardClick = (cardId) => {
    if (activeCard === cardId) {
      // Si la tarjeta ya está activa, la cerramos
      setActiveCard(null);
    } else {
      // Si no, la abrimos (esto cierra cualquier otra abierta)
      setActiveCard(cardId);
    }
  };

  const handleCardHover = (cardId) => {
    // Solo activa en hover si no hay ninguna activa por click
    // Para que el hover no interfiera con el estado de click
    // Comentado por ahora para usar solo click
    // setActiveCard(cardId);
  };


  return (
    <section id="stack" className="section-stack">
      <div className="stack-container">
        <h2 className="stack-main-title">Stack Tecnológico</h2>
        
        <div className="stack-content" ref={containerRef}>
          <div className="stack-left">
            {stackData.map((item, index) => (
              <div 
                key={item.id}
                className={`stack-rectangle ${activeCard === item.id ? 'active' : ''} ${inView ? 'slide-in' : ''}`}
                onClick={() => handleCardClick(item.id)}
                onMouseEnter={() => handleCardHover(item.id)}
                style={{ 
                  transitionDelay: inView ? `${index * 0.15}s` : '0s'
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
          
          {/* Lado derecho - Imagen */}
          <div className="stack-right">
            <div 
              className={`stack-image-container ${inView ? 'slide-in' : ''}`}
              style={{ transitionDelay: inView ? '0.6s' : '0s' }}
            >
              <img 
                src={tecladoNeon} 
                alt="Stack Tecnológico"
                className="stack-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;