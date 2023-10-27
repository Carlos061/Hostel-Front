import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from "./Sidebar";
import Nam from "./components/name"
import map from "./components/Super";
import Welcome from "./components/Welcome";
import Card from "./Card";
import Rate from "./components/Rate"
import Header from "./components/Header";

const App = () => {
  return (
    //  <div className="container-fluid bg-secondary min-vh-100">
    //   <div className="row">
    //     <div className="col-2 bg-white vh-100">
    //     <Sidebar/>
    //     </div>
    //     <div className='col-auto'>

    //     </div>
    //   </div>
    //  </div>
    <>
    {/* <Welcome name='Bastard'/>
    <Nam name="Trusty"/>
    <Nam name="Luke"/>
    <Nam name="Thoams"/> */}
    <map> </map>
    <Header/>
    <Card/>
    <Rate/>
    </>
  );
};

export default App;
