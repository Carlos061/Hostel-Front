import React from 'react';
import './Card.css';

const Card = ({ image, title, description, price }) => (
 <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="price">UGX {price} per semester</p>
 </div>
);

const App = () => (
 <>
      <div className="app">
    <Card
      image="https://i.pinimg.com/474x/64/12/10/64121069b5fc37e1fb979f1604ceb675.jpg"
      title="Olympia Hostel"
      description="This is the description for card 1."
      price={560000}
    />
    <Card
      image="https://i.pinimg.com/474x/be/32/b5/be32b5b75a2c40db1a9905f50d6921a7.jpg"
      title="Dream world Hostel"
      description="This is the description for card 2."
      price={560000}
    />
    <Card
      image="https://i.pinimg.com/474x/95/2c/0e/952c0ef5a8b60efe89fcdbf2a7baa12f.jpg"
      title="Douglas Villa Hostel"
      description="This is the description for card 3."
      price={560000}
    />
 </div>
 </>
 
);

export default App;