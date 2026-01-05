import React from "react";
import "./aboutMe.css";
import Stack from "../galeria/galeria";
import img1 from '../../assets/images/images-galeria/1.JPG';
import img2 from '../../assets/images/images-galeria/2.jpg';
import img3 from '../../assets/images/images-galeria/3.JPG';
import img4 from '../../assets/images/images-galeria/4.jpg';

export default function AboutMe() {
  const images = [img1, img2, img3, img4];

  return (
    <section id="about-me" className="section about-me">
      <div className="about-container">
        <h2 className="section-title">Sobre Mí</h2>
        <p className="about-text">Hola — soy Nico, desarrollador frontend con interés en animaciones y UI.</p>

        <div style={{ width: 360, height: 360, margin: '36px auto' }}>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`card-${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
