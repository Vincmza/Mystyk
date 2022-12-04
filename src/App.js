import * as React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { bands } from "./data/bands";
//PAGES
import News from "./pages/News"
import Shows from "./pages/Shows";
import Host from "./pages/Host"
import Bands from "./pages/Bands"
import Band from "./pages/Band"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Error from "./pages/Error";
//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //SORT ALL BANDS BY NAME
  const strSort = (array)=> {
    return array.sort((x,y) => {
      return x.name.toString().localeCompare(y.name.toString());
    });
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Host/>}/>
            <Route path="/shows" element={<Shows/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/bands" element={<Bands bands={strSort(bands)}/>}/>
            <Route path="/bands/:bandId" element={<Band bands={strSort(bands)}/>}/>
            <Route path="/shop" element={<Shop bands={strSort(bands)}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
