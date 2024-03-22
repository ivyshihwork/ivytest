import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

const Welcome = () => {
  return <p>Welcome!</p>
}

// JSX = JavaScript XML
function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <footer>
        <p>&copy; Ivy 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
