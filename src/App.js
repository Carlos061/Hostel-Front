
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Entry from "./components/Entry";
import Services from "./components/Services";
import Ratings from "./components/Ratings";
import MyBookings from "./components/About";
import Footer from "./components/footer/footer";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Hostels from "./components/Hostels";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Entry />}/>
        <Route path='/hostels' element={< Hostels />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/ratings' element={< Ratings />}/>
        <Route path='/admin' element={< Admin/>} />
        
      </Routes>
      
      <Footer/> 
    </div>
  );
}

export default App;
