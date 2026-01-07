import React from 'react';
import './stack.css';

const stackData = [
  {
    id: 1,
    category: 'Frontend',
    icons: [
      { src: "https://img.icons8.com/arcade/64/html-5.png", alt: "HTML" },
      
      { src: "https://img.icons8.com/nolan/96/react-native.png", alt: "React" },
      { src: "https://img.icons8.com/arcade/64/javascript.png", alt: "JS" }
      
    ],
    excerpt: 'Creación de interfaces modernas, responsivas y optimizadas utilizando React y ecosistemas de JavaScript moderno.'
  },
  {
    id: 2,
    category: 'Backend',
    icons: [
      { src: "https://img.icons8.com/nolan/96/node-js.png", alt: "Node.js" },
      { src: "https://img.icons8.com/nolan/96/my-sql.png", alt: "MySql" },
      { src: "https://img.icons8.com/fluency/48/my-sql.png", alt: "PostgreSQL" },
      { src: "https://img.icons8.com/?size=100&id=W3gfKnMhfM6h&format=png&color=000000", alt: "Node.js" }
    ],
    excerpt: 'Diseño de arquitecturas escalables y APIs robustas, con foco en la seguridad y el rendimiento del servidor.'
  },  {
    id: 1,
    category: 'Aplicaciones Moviles',
    icons: [
      { src: "https://img.icons8.com/nolan/96/react-native.png", alt: "React" },
      { src: "https://img.icons8.com/arcade/64/javascript.png", alt: "JS" },
      { src: "https://img.icons8.com/arcade/64/android-os.png", alt: "Android" }
    ],
    excerpt: 'Creación de interfaces modernas, responsivas y optimizadas utilizando React y ecosistemas de JavaScript moderno.'
  },
  {
    id: 2,
    category: 'Integración IoT',
    icons: [
      { src: "https://img.icons8.com/wired/64/node-js.png", alt: "Node.js" },
      { src: "https://img.icons8.com/wired/64/postgre-sql.png", alt: "PostgreSQL" }
    ],
    excerpt: 'Diseño de arquitecturas escalables y APIs robustas, con foco en la seguridad y el rendimiento del servidor.'
  }
  
];

function Stack() {
  return (
    <section id="stack" className="section-stack">
      <div className="stack-container">
        <h2 className="section-title">Stack Tecnológico</h2>
        <div className="stack-grid">
          {stackData.map(item => (
            <article key={item.id} className="stack-card">
              <div className="stack-icons-container">
                {item.icons.map((icon, index) => (
                  <img 
                    key={index}
                    width="48" 
                    height="48" 
                    src={icon.src} 
                    alt={icon.alt} 
                    className="stack-icon"
                  />
                ))}
              </div>
              <h3 className="stack-title">{item.category}</h3>
              <p className="stack-excerpt">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
