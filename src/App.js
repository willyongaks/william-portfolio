import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about"  element={ <About />}/>
          <Route path="contact"  element={ <Contact /> }/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
