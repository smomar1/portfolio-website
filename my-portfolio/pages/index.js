// pages/index.js
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
