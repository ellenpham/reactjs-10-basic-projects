import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
