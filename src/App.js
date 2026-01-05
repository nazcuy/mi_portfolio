import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import ProjectDetail from './pages/projectDetail/projectDetail';
import './index.css';

function App() {
  return (
    <div className="app">
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
