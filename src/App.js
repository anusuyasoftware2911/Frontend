import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='/AboutUs' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
