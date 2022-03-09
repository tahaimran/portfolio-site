import About from './Components/About/About';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Testimonials from './Components/Testimonials/Testimonials';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className='bg-[#0d1477]'>
      <Header />
      <Intro/>
      <About />
      <Testimonials/>
      <Skills/>
    </div>
  );
}

export default App;
