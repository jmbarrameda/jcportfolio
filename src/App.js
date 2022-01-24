import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Section from './components/Section';
import About from './components/sections/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section bgColor='#fffefc' waveColor='#ECE5DB'>
        <About />
      </Section>
      <Section bgColor='#ECE5DB' waveColor='#CAE6EA'></Section>
      <Section bgColor='#CAE6EA' waveColor='#00C5CE'></Section>
      <Section bgColor='#00C5CE' waveColor='#028ABC'></Section>
      <Section bgColor='#028ABC' waveColor='#004775'></Section>
      <Footer bgColor='#004775' />
    </>
  );
}

export default App;
