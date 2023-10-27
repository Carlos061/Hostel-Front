import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Rate.css'; // Create this CSS file for styling
import { Card } from 'react-bootstrap';

const reviews = [
  {
    id: 1,
    user: 'John Doe',
    avatar: 'https://i.pinimg.com/474x/99/72/82/997282cb1ac48f7e4fb9eab06e8a5afc.jpg',
    comment: 'Book easy hostel made my stay memorable. The service was excellent, and the facilities were top-notch.',
  },
  {
    id: 2,
    user: 'Jane Smith',
    avatar: 'https://i.pinimg.com/474x/b8/5f/3a/b85f3a28fd572685b0dab45537113294.jpg',
    comment: "I've traveled to many places, and Book easy hostel stands out. The staff is friendly, and the atmosphere is fantastic.",
  },
  {
    id: 3,
    user: 'Bob Johnson',
    avatar: 'https://i.pinimg.com/474x/e8/66/37/e8663740c995d084ad5310a95a7a4282.jpg',
    comment: 'Great experience! The rooms are clean, the location is convenient, and the booking process is easy and hassle-free.',
  },
  {
    id: 4,
    user: 'John Doe',
    avatar: 'https://i.pinimg.com/474x/b4/46/22/b44622ed5fe74d2062244466e1d7b1c3.jpg',
    comment: 'Book easy hostel made my stay memorable. The service was excellent, and the facilities were top-notch.',
  },
  {
    id: 5,
    user: 'Jane Smith',
    avatar: 'https://i.pinimg.com/474x/d3/3e/40/d33e40af46b01ab55a36f71d6b166120.jpg',
    comment: "I've traveled to many places, and Book easy hostel stands out. The staff is friendly, and the atmosphere is fantastic.",
  },
  {
    id: 6,
    user: 'Bob Johnson',
    avatar: 'https://i.pinimg.com/474x/a5/cf/04/a5cf0440b49c897fb5d61911da8308ca.jpg',
    comment: 'Great experience! The rooms are clean, the location is convenient, and the booking process is easy and hassle-free.',
  },
  // Add more reviews as needed
];

const ReviewSwiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
        <Slider {...settings} className="review-swiper">
        {reviews.map((review) => (
            <div key={review.id} className="review">
            <img src={review.avatar} alt={`${review.user}'s Avatar`} className="avatar" />
            <h3>{review.user}</h3>
            <blockquote>{review.comment}</blockquote>
            </div>
        ))}
        </Slider>
    </>
  );
};

export default ReviewSwiper;
