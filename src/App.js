import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/AboutUs' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;