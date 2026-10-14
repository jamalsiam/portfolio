import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Portfolio Sections
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Experience from './components/portfolio/Experience';
import Projects from './components/portfolio/Projects';
import Architecture from './components/portfolio/Architecture';
import Skills from './components/portfolio/Skills';
import Contact from './components/portfolio/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Architecture />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
