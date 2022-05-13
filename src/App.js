import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { bands } from "./data/bands";
//pages
import News from "./pages/News"
import Shows from "./pages/Shows";
import Host from "./pages/Host"
import Bands from "./pages/Bands"
import Band from "./pages/Band"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Error from "./pages/Error";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //PAGE CLICKED STATE
  const [isPageClicked, setIsPageClicked]=useState([])
  const checkMenu = ()=>{
    let menuKey = localStorage.getItem("menu")
    if(isPageClicked.length === 0 && menuKey !== null){
      setIsPageClicked([menuKey.toString()])
    }
  }
  checkMenu()
  //SORT ALL BANDS BY NAME
  const strSort = (array)=> {
    return array.sort((x,y) => {
      return x.name.toString().localeCompare(y.name.toString());
    });
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header isPageClicked={isPageClicked} setIsPageClicked={setIsPageClicked} />
          <Routes>
            <Route path="/" element={<Host isPageClicked={isPageClicked} setIsPageClicked={setIsPageClicked} />}/>
            <Route path="/shows" element={<Shows isPageClicked={isPageClicked} setIsPageClicked={setIsPageClicked}/>}/>
            <Route path="/news" element={<News isPageClicked={isPageClicked} setIsPageClicked={setIsPageClicked}/>}/>
            <Route path="/bands" element={<Bands bands={strSort(bands)}/>}/>
            <Route path="/band/:bandId" element={<Band bands={strSort(bands)}/>}/>
            <Route path="/shop" element={<Shop bands={strSort(bands)}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
