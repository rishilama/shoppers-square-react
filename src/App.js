import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SneakerZone from './pages/SneakerZone/SneakerZone';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Watchex from './pages/Watchex/Watchex';
import SwankyBags from './pages/SwankyBags/SwankyBags';
import NewAgeGadgets from './pages/NewAgeGadgets/NewAgeGadgets';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/sneakerzone' element={<SneakerZone />} />
        <Route path='/watchex' element={<Watchex />} />
        <Route path='/swankybags' element={<SwankyBags />} />
        <Route path='/newagegadgets' element={<NewAgeGadgets />} />
      </Routes>
    </Router>
  );
}

export default App;
