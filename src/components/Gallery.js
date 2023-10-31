// import React, { useState } from 'react';
// import { Card, Carousel, Button, Row, Col } from 'react-bootstrap';
// import { GoogleMap, Marker, StandaloneSearchBox } from '@react-google-maps/api';

// const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

// const HostelDetails = () => {
//  const [amenities] = useState([
//     // ... Add your hostel's amenities here
//  ]);

//  const [location, setLocation] = useState({ lat: 0, lng: 0 });

//  const onLoad = (ref) => {
//     ref.map.setZoom(14);
//     setLocation({
//       lat: ref.map.getCenter().lat(),
//       lng: ref.map.getCenter().lng(),
//     });
//  };

//  const onStandaloneSearchBoxLoad = (ref) => {
//     ref.getPlaces();
//  };

//  const onPlacesChanged = () => {
//     const places = searchBoxRef.current.getPlaces();
//     const newLocation = {
//       lat: places[0].geometry.location.lat(),
//       lng: places[0].geometry.location.lng(),
//     };
//     setLocation(newLocation);
//  };

//  const searchBoxRef = React.createRef();

//  return (
//     <div>
//       <Row>
//         <Col md={6}>
//           <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/300" />
//             <Card.Body>
//               <Card.Title>Hostel Name</Card.Title>
//               <Card.Text>Hostel Details...</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <h3>Amenities</h3>
//           <ul>
//             {amenities.map((amenity, index) => (
//               <li key={index}>{amenity}</li>
//             ))}
//           </ul>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={6}>
//           <h3>Map</h3>
//           <GoogleMap
//             id="map"
//             mapContainerStyle="mapContainer"
//             center={location}
//             zoom={14}
//             onLoad={onLoad}
//           >
//             <Marker position={location} />
//           </GoogleMap>
//         </Col>
//         <Col md={6}>
//           <h3>Pricing</h3>
//           <p>Price Details...</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={6}>
//           <h3>Hygiene Rating</h3>
//           <p>Rating: 4.5/5</p>
//         </Col>
//         <Col md={6}>
//           <h3>Gallery</h3>
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="https://via.placeholder.com/300"
//                 alt="First slide"
//               />
//             </Carousel.Item>
//             {/* ... Add more carousel items here */}
//           </Carousel>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={6}>
//           <h3>Book Now</h3>
//           <Button variant="primary">Book</Button>
//         </Col>
//       </Row>
//     </div>
//  );
// };

// export default HostelDetails;