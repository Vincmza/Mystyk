import * as React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
//pages
// import {News, Host, Bands, Band, Contact} from "./pages"
import News from "./pages/News"
import Host from "./pages/Host"
import Bands from "./pages/Bands"
import Band from "./pages/Band"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/host" element={<Host/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/bands" element={<Bands/>}/>
          <Route path="/band/:bandId" element={<Band/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
