import './App.css'
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import SignIn from './pages/signin'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>        
        <Route path="/about" element={<About/>}/>        
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>        
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
