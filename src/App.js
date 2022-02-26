import * as React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
//pages
import News from "./pages/News"
import Host from "./pages/Host"
import Bands from "./pages/Bands"
import Band from "./pages/Band"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Error from "./pages/Error";
//components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Host/>}/>
            <Route path="/news" element={<News/>}/>
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
