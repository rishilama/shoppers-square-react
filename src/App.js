import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SneakerZone from './pages/SneakerZone/SneakerZone';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/sneakerzone' element={<SneakerZone />} />
      </Routes>
    </Router>
  );
}

export default App;
