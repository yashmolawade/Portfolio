import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');

  // ...existing code...
useEffect(() => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) { // lowered threshold
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: [0.1], rootMargin: '0px' } // removed rootMargin
  );

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;