import React from 'react';
import './stack.css';

const stackData = [
  {
    id: 1,
    date: '15 de Diciembre, 2025',
    title: 'Ampliación de Servicios de Desarrollo Móvil',
    excerpt: 'Nos complace anunciar que hemos expandido nuestra oferta de servicios para incluir desarrollo de aplicaciones móviles nativas e híbridas, respondiendo a la creciente demanda del mercado.'
  },
  {
    id: 2,
    date: '28 de Noviembre, 2025',
    title: 'Nueva Alianza Estratégica con Empresa Local',
    excerpt: 'Hemos establecido una colaboración estratégica con una empresa líder en automatización industrial para desarrollar soluciones de software integradas.'
  },
  {
    id: 3,
    date: '10 de Noviembre, 2025',
    title: 'Reconocimiento a la Innovación Tecnológica',
    excerpt: 'Nuestro proyecto de sistema de gestión para cooperativas fue reconocido en el reciente encuentro nacional de empresas tecnológicas.'
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
