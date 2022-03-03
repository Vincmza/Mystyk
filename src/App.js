import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
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

function App() {
  //PAGE CLICKED STATE
  const [isPageClicked, setIsPageClicked]=useState([])
  const checkMenu = ()=>{
    let menuKey = localStorage.getItem("menu")
    if(isPageClicked.length === 0){
      setIsPageClicked([menuKey.toString()])
    }
  }
  checkMenu()
  console.log("state header", isPageClicked)
  return (
    <div className="App">
      <BrowserRouter>
        <Header isPageClicked={isPageClicked} setIsPageClicked={setIsPageClicked} />
          <Routes>
            <Route path="/" element={<Host isPageClicked={isPageClicked} setIsPageClicked={setIsPageClicked} />}/>
            <Route path="/shows" element={<Shows/>}/>
            <Route path="/news" element={<News isPageClicked={isPageClicked} setIsPageClicked={setIsPageClicked}/>}/>
            <Route path="/bands" element={<Bands/>}/>
            <Route path="/band/:bandId" element={<Band/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
