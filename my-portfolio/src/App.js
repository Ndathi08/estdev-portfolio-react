import './App.css';
import Header from './components/pages/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Scrollbutton from './components/pages/Scrollbutton';
import Skills from './components/pages/Skills';
import Footer from './components/pages/Footer';
import ChuckNorrisJoke from './components/pages/jokes';

function App() {
  return (
    <>
    <Header/>
    <Scrollbutton/>
    <Home/>
    <About/>
    <Skills/>
    <ChuckNorrisJoke/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
