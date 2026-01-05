import React from 'react';
import './stack.css';

const stackData = [
  {
    id: 1,
    date: '1',
    title: 'Backend',
    excerpt: 'He mejorado nuestra infraestructura backend implementando microservicios que permiten una mayor escalabilidad y mantenimiento de nuestras aplicaciones.'
  },
  {
    id: 2,
    date: '2',
    title: 'Frontend',
    excerpt: 'He implementado nuevas prácticas de desarrollo ágil que han mejorado significativamente la eficiencia de nuestros equipos y la calidad de nuestros productos finales.'
  },
  {
    id: 3,
    date: '3',
    title: 'Desarrollo Móvil',
    excerpt: 'Mi proyecto de sistema de gestión para cooperativas fue reconocido en el reciente encuentro nacional de empresas tecnológicas.'
  },
    {
    id: 4,
    date: '4',
    title: 'Integración IoT',
    excerpt: 'Estoy implementando tecnologías de Internet de las Cosas (IoT) para ofrecer soluciones innovadoras en la monitorización y control de dispositivos conectados.'
  }
];

function Stack() {
  return (
    <section id="stack" className="section-stack">
      <div className="stack-container">
        <h2 className="section-title">Stack Tecnológico</h2>
        <div className="stack-grid">
          {stackData.map(stack => (
            <article key={stack.id} className="stack-card">
              <p className="stack-date">{stack.date}</p>
              <h3 className="stack-title">{stack.title}</h3>
              <p className="stack-excerpt">{stack.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
