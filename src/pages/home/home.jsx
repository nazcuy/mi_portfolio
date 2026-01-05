import React from 'react';
import Presentation from '../../components/presentation/presentation';
import Stack from '../../components/stack/stack';
import Projects from '../../components/projects/projects';
import AboutMe from '../../components/aboutMe/AboutMe';
import './home.css';

function Home() {
  return (
    <div className="home">
      <Presentation />
      <Projects />
      <Stack />
      <AboutMe />
    </div>
  );
}

export default Home;
