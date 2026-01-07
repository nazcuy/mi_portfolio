import React from 'react';
import jinja_icon from '../../assets/icons/jinja_icon.png';
import { useInView } from 'react-intersection-observer';
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
    excerpt: 'Creación de interfaces modernas, responsivas y optimizadas utilizando React y ecosistemas de JavaScript moderno.'
  },
  {
    id: 2,
    category: 'Backend',
    icons: [
      { src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-shadow-tal-revivo.png", alt: "Node.js" },
      { src: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png", alt: "Java" },
      { src: "https://img.icons8.com/color/48/spring-logo.png", alt: "Spring" },
      { src: "https://img.icons8.com/color/48/python--v1.png", alt: "Python" },
      { src: jinja_icon, alt: "Jinja" },
      { src: "https://img.icons8.com/nolan/96/flask.png", alt: "Flask" },
      { src: "https://img.icons8.com/fluency/48/my-sql.png", alt: "MySql" },
    ],
    excerpt: 'Diseño de arquitecturas escalables y APIs robustas, con foco en la seguridad y el rendimiento del servidor.'
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
    excerpt: 'Desarrollo de aplicaciones móviles nativas y cross-platform con React Native y tecnologías modernas.'
  },
  {
    id: 4,
    category: 'Integración IoT',
    icons: [
      { src: "https://img.icons8.com/fluency/48/arduino.png", alt: "Arduino" },
      { src: "https://img.icons8.com/color/48/python--v1.png", alt: "Python" },
      { src: "https://img.icons8.com/stickers/48/arduino-uno-board.png", alt: "UNO" },
    ],
    excerpt: 'Implementación de soluciones IoT con hardware programable y sistemas embebidos para automatización.'
  }
];

function Stack() {
  return (
    <section id="stack" className="section-stack">
      <div className="stack-container">
        <h2 className="section-title">Stack Tecnológico</h2>
        <div className="stack-grid">
          {stackData.map((item, index) => (
            <AnimatedCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
function AnimatedCard({ item, index }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.7,
    delay: index * 100,
  });

  return (
    <article 
      ref={ref}
      className={`stack-card ${inView ? 'stack-card-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h3 className="stack-title">{item.category}</h3>
      <div className="stack-icons-container">
        {item.icons.map((icon, idx) => (
          <div key={idx} className="icon-wrapper">
            <img 
              width="50" 
              height="50" 
              src={icon.src} 
              alt={icon.alt} 
              className="stack-icon"
            />
            <span className="icon-label">{icon.alt}</span>
          </div>
        ))}
      </div>
      <p className="stack-excerpt">{item.excerpt}</p>
    </article>
  );
}

export default Stack;