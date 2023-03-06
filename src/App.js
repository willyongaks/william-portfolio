import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Menu from './components/navigation/Menu';
import Projects from './components/pages/projects/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/about"  element={ <About />}/>
          <Route path="/contact"  element={ <Contact /> }/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
