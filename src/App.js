import { useState } from 'react'


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SneakerZone from './pages/SneakerZone/SneakerZone';
import Header from '../src/components/Header/Header'
import HomePage from './pages/HomePage/HomePage';
import Watchex from './pages/Watchex/Watchex';
// import SwankyBags from './pages/SwankyBags/SwankyBags';
// import NewAgeGadgets from './pages/NewAgeGadgets/NewAgeGadgets';


import AllProductData from '../src/dummy data/AllProductData/AllProductData'


function App() {

  

  const [data, setData] = useState(AllProductData);

  const filterResult = (catItem) => {
      const result = AllProductData.filter((currData)=>{
          return currData.category === catItem
      });
      setData(result)

      console.log("This is DAta in app.js", data)
      console.log("This is result",result)
      console.log(catItem)
  }

  const filterBrands = (brandItem) => {
      const brandResult = AllProductData.filter((brandCurrData)=>{
          return brandCurrData.brand === brandItem
      })
      setData(brandResult)
  }


    return (
    <Router>
        <Header />
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
