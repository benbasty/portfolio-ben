import './App.css';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Qualifications from './Qualifications';
import Services from './Services';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './Footer';
import ScrollUp from './ScrollUp';


function App() {
  return (
      <>
        <Nav />
        <Header />
        {/* <Skills />
        <Qualifications />
        <Services /> */}
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollUp />
      </>
  );
}

export default App;
