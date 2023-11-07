import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Entry from "./components/home/Entry";
import Services from "./components/Services";
import Ratings from "./components/Ratings";
import MyBookings from "./components/About";
import Footer from "./components/footer/footer";
import Admin from "./components/Admin";
import Header from "./components/header/Header";
import Hostels from "./components/Hostels";
import Gallery from "./components/Gallery";
import Search from "./components/Search/search";
import Results from "./components/Search/results";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/ratings" element={<Ratings />} /> */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
      {/* <div className="foden">
        <Search setResults={setResults} />
        <Results results={results} />
      </div> */}
    </div>
  );
}

export default App;
