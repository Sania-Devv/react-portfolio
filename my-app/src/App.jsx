import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contactus';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
<Projects />
<Contact/>
<Footer />
    </div>
  );
}