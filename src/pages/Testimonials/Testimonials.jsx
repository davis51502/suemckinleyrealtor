import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y'; // Accessibility module

// import required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import './Testimonials.css';

// Data for our testimonials (can be in a separate file)
const testimonialsData = [
  {
    id: 1,
    quote: "I had the privilege of working with Sue Mckinley on both the purchase of my plot and later the sale of the home I built on it. From start to finish, she demonstrated exceptional professionalism, dedication, and expertise. I am truly grateful for her support at every step of the journey. If you are looking for a realtor who is knowledgeable, reliable, and committed to her clients’ success, I highly recommend Sue!",
    author: "Ramprasad Srirama",
    avatar: "https://via.placeholder.com/80/007BFF/FFFFFF?text=RS"
  },
  {
    id: 2,
    quote: "Working with this team was a dream. They made the entire process of selling our home incredibly smooth and stress-free. Their market knowledge is second to none, and we got an offer above our asking price in less than a week!",
    author: "Jane & John Doe",
    avatar: "https://via.placeholder.com/80/28A745/FFFFFF?text=JD"
  },
  {
    id: 3,
    quote: "As a first-time homebuyer, I was nervous and had a million questions. Sue was patient, answered every single one, and guided me through each step with care. I couldn't have asked for a better guide in my home-buying journey.",
    author: "Michael Chen",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
];


const Testimonials = () => (
  <div className="content-container">
    <div className="page-content">
      <h1>Testimonials</h1>


      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-slide">
              <img src={testimonial.avatar} alt={`Avatar of ${testimonial.author}`} className="testimonial-avatar" />
              <blockquote>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <footer>- {testimonial.author}</footer>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Testimonials;