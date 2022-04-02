import About from './Components/About/About';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Testimonials from './Components/Testimonials/Testimonials';
import Skills from './Components/Skills/Skills';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects/>
      <Testimonials />
      <Skills />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}

export default App;
