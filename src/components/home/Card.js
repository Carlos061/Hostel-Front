import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, price, link, rating, accountability }) => (
 <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <StarRating rating={rating} />
    <p className="accountability">{accountability}</p>
    <p className="price">UGX {price} per semester</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="details-link">
      <Link to={"/hostels"}>View Details</Link>
    </a>
 </div>
);

// New component for rendering stars based on a rating
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
  ));
  return <div className="star-rating">{stars}</div>;
};

const App = () => (
 <>
    <h2 class = "product-category">Recomended Hostels<p></p></h2>
      <div className="tap">
    <Card
      image="https://i.pinimg.com/474x/64/12/10/64121069b5fc37e1fb979f1604ceb675.jpg"
      title="Olympia Hostel"
      description="This is the description for card 1."
      price={560000}
      rating={3}  // Add rating
      accountability="Double and Single rooms available"  // Add accountability information
      // link="https://i.pinimg.com/474x/50/fa/32/50fa322e7195ff101b81dc300b802923.jpg"  // Add link for more details
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
 <div className="tap">
    <Card
      image="https://i.pinimg.com/474x/64/12/10/64121069b5fc37e1fb979f1604ceb675.jpg"
      title="Olympia Hostel"
      description="This is the description for card 1."
      price={560000}
      rating={3}  // Add rating
      accountability="Double and Single rooms available"  // Add accountability information
      // link="https://i.pinimg.com/474x/50/fa/32/50fa322e7195ff101b81dc300b802923.jpg"  // Add link for more details
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