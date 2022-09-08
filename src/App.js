import { useEffect, useState } from 'react'


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SneakerZone from './pages/SneakerZone/SneakerZone';
import Header from '../src/components/Header/Header'
import HomePage from './pages/HomePage/HomePage';
import Watchex from './pages/Watchex/Watchex';
// import SwankyBags from './pages/SwankyBags/SwankyBags';
// import NewAgeGadgets from './pages/NewAgeGadgets/NewAgeGadgets';


// import AllProductData from '../src/dummy data/AllProductData/AllProductData'


function App() {

  const [apiData, setAPIData] = useState({});

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-product-shopperssquare.herokuapp.com/AllProductData')
        if (!response.ok){
          throw new Error("Server responds with error!")
        }

        const res = await response.json();
        setAPIData(res)
      }
      catch{
        console.log("err")
      }
    }
    fetchData();
  }, [])

  console.log("API DATA", apiData)


  const [data, setData] = useState(apiData);

  const filterResult = (catItem) => {
      const result = Object.values(apiData).filter((currData)=>{
          return currData.category === catItem
      });
      setData(result)

      console.log(result)
      console.log(catItem)
  }

  const filterBrands = (brandItem) => {
      const brandResult = apiData.filter((brandCurrData)=>{
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
