import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}