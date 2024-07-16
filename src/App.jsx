import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar1 from './components/Navbar1';
import Addblog1 from './components/pages/Addblog1';
import Home1 from './components/pages/Home1';

function App() {
  return (
    <>
  <Navbar1/>
  <Routes>
    <Route path="/" element={<Home1/>}/>
    <Route path="/addblog" element={<Addblog1/>}/>
   
  </Routes>
    </>
  )
}

export default App;
