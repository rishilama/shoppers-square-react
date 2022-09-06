import { useState } from 'react'


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SneakerZone from './pages/SneakerZone/SneakerZone';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Watchex from './pages/Watchex/Watchex';
// import SwankyBags from './pages/SwankyBags/SwankyBags';
// import NewAgeGadgets from './pages/NewAgeGadgets/NewAgeGadgets';


import SneakerProductPage from '../src/dummy data/ProductPage/SneakerProductPage'


function App() {


  const [data, setData] = useState(SneakerProductPage);

  const filterResult = (catItem) => {
      const result = Object.values(SneakerProductPage).filter((currData)=>{
          return currData.category === catItem
      });
      setData(result)

      console.log(result)
      console.log(catItem)
  }

  const filterBrands = (brandItem) => {
      const brandResult = SneakerProductPage.filter((brandCurrData)=>{
          return brandCurrData.brand === brandItem
      })
      setData(brandResult)
  }


  return (
    <Router>
      <Navbar filterResult={filterResult} setData={setData}  filterBrands={filterBrands} data={data} />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/sneakerzone' element={<SneakerZone filterResult={filterResult} setData={setData}  filterBrands={filterBrands} data={data} />} />
        <Route path='/watchex' element={<Watchex />} />
        {/* <Route path='/swankybags' element={<SwankyBags />} />
        <Route path='/newagegadgets' element={<NewAgeGadgets />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
