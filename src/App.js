import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import ProjectDetail from './pages/projectDetail/projectDetail';

import './index.css';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = decodeURIComponent(hash.substring(1));

      const timeoutId = setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);

      return () => clearTimeout(timeoutId);
    }

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToHash />

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;