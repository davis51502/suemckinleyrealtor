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
    quote: "I had the privilege of working with Sue Mckinley on both the purchase of my plot and later the sale of the home I built on it. From start to finish, she demonstrated exceptional professionalism, dedication, and expertise.  Sue was not only instrumental in helping me secure the plot but also went above and beyond by representing me at a city council meeting, ensuring my interests were always well presented. When it came time to sell my home, she coordinated everything seamlessly — from staging and cleaners to marketing and scheduling showings.  Sue's deep market knowledge, strong communication skills, and consistent follow-ups gave me complete confidence throughout the process. She skillfully negotiated on my behalf, and her proactive approach led to an early closing, which exceeded my expectations.  I am truly grateful for her support at every step of the journey. If you are looking for a realtor who is knowledgeable, reliable, and committed to her clients’ success, I highly recommend Sue!",
    author: "Ramprasad Srirama",
    avatar: "https://via.placeholder.com/80/007BFF/FFFFFF?text=RS"
  },
  {
    id: 2,
    quote: "Sue McKinley was our seller’s agent in the first months of 2025 in Pleasanton.  She was at our side during the whole process as we prepared our house for the market and got it listed.  She was quick to price the house at a point that would get potential buyers to view it.  She gave useful recommendations for painters and cleaners and how to stage the house. She produced a beautiful brochure for viewers to pick up outside and at three open houses. Sue was diligent in assessing the current market in our area.  We were able to sell the house at a very good price within a few weeks and close escrow the same day our new home escrow closed.  We highly recommend Sue for anyone who needs an experienced, professional, amiable and patient realtor to buy or sell their home.",
    author: "Sally Drummond",
    avatar: "https://via.placeholder.com/80/28A745/FFFFFF?text=JD"
  },
  {
    id: 3,
    quote: "If you are interested in buying a home, we highly recommend you to contact Sue! Sue is an extremely talented agent that has a deep understanding of the Tri-valley real estate market and community. When we first started to work with Sue, she was able to connect us with several brokers/bankers to help us find the best financing options and ease the loan process. As foreigners, this was a huge plus! Sue’s network was a clear differentiator compared to other agents we met. Most often, she was able to arrange visits before homes went on the market. This was the first time we were involved in buying a home. Sue greatly supported us through the entire purchasing process. Her expertise and experience were very valuable in helping answer our questions or concerns. Sue also provided very valuable advice at critical times, particularly on the bidding process. In addition, Sue was always there to step in when necessary, especially when we had to be out of town right after signing our offer. She planned and attended all inspections and gave us clear explanations from the reports. She also ensured we were able to review and sign all documents remotely during that period. Finally, Sue provided great support even after the closing, helping us find contractors to start remodeling our home. What we very much liked with Sue is that she never pressured to buy any of the homes we visited, despite the significant number of competitive buyers engaged in the process. She has always been very patient with us and of tremendous support when needed. We therefore highly and warmly recommend her!",
    author: "Frederic & Karine Havard",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 4,
    quote: "Buying a home is a scary step in life but Sue made this process seem so easy and smooth! Sue, I want to thank you again for helping us find our first home. All questions were answered right away and you were always attentive to us making sure we were comfortable and happy with our decisions. Your knowledge in the area was impeccable and enabled us to find the perfect place to call home. I would highly recommend you to anyone who is looking to purchase a house.",
    author: "Emily Liszewski",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 5,
    quote: "I met Sue when I was in the process of relocating from Texas to the Bay Area. I decided to visit for a house hunting trip about 6 weeks before my arrival. Sue and I talked on the phone and through email prior to my visit. I did a phone interview with her and other Realtors. She was most impressive because she could articulate the issues I would encounter during relocation. In addition, I am also a single woman and she was quite attuned to finding the right house for me in the best of neighborhoods. My goal was to be under contract by the end of my 5 day visit and Sue worked it out. She previewed homes that I thought looked good online to narrow our search for an efficient use of my limited time. She gave keen advice about those we saw and helped me make the best decision. Sue is attentive, personable and incredibly hard working. I’ve never experienced a more stress-FREE experience buying a home. I have been in my home for just shy of a month now and am completely pleased with Sue’s hard work, expertise and advice. Anyone in the area looking to buy or sell a home will do well when working with Sue McKinley. Thank you, Sue for everything you do on my behalf. You are a true professional.",
    author: "Deborah Diaz",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 6,
    quote: "After a poor past experience, we were hesitant to work with a Realtor again. Meeting Sue changed everything. She was genuine, prioritizing our family's needs and budget over a quick sale. Sue made our home search stress-free, flawlessly handling a complex dual-agency transaction with professionalism and fairness. A year later, her expert advice and marketing sold our rental townhome in under 72 hours for well above the asking price. Sue restored our faith in the home buying process. Her integrity, market knowledge, and dedication are unmatched. We recommend her without hesitation for any real estate needs.",
    author: "Joseph Janakes",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 7,
    quote: "Sue guided Chad through the entire process, from loan pre-qualification to searching for houses to making the offer and closing the deal. We credit Sue with a smooth, stress-free home-buying experience. This was my Son’s first purchase of property. Sue was wonderful with my son and it made what could be a stressful situation into a very exciting and pleasurable experience.  Sue McKinley is savvy, personable and knows the market inside and out. With Sue’s knowledge Chad was able to buy his dream house.  He could not have done that without her. To reiterate, we are nothing but pleased with Sue McKinley and her expertise and we recommend her to everyone.",
    author: "Paulette Ramirez & Chad Cheskiewicz",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 8,
    quote: "Thank-you for all your help with selling our house and making this whole transition as pleasant as possible. You did a great job helping us get everything ready and setting up repairs that needed to happen and pricing the home just right so that the house sold quickly. I also have to mention that the brochure for the house was spectacular! Very impressive.We had a lot of family issues that developed during this whole process as well, and I am so grateful for your genuine caring and compassion in our time of need. You were professional and above all showed the highest level of integrity which is often not the case in business dealings. What a blessing it was to us to have you as our Realtor and I will be forever grateful for all you did for our family.",
    author: "Dianna Fife",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 9,
    quote: "My wife and I hired Sue to help us find our first home. As I write this recommendation I am sitting said wonderful home. Sue is always available for her clients. She is professional, courteous, and has extremely high integrity. She helped us win bids in difficult situations. For example, we won a bid over 15 people due to Sue's creativity and expertise. In the end she went through a Short Sale process with us and got us a wonderful home. We love her and would recommend her for all of your real estate needs.",
    author: "Kevin Andrus",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 10,
    quote: "It has been several months since you helped us sell our home in Pleasanton. We look back on the experience with satisfaction largely due to your insights and experience. It was such a help to receive your guidance in preparing the building, patios and gardens and knowing what is important to a buyer and what they might prefer to change themselves. Your suggestions for contractors resulted in work that helped make the home attractive, sound and livable. We also appreciated your guidance on showing the house in the best possible light and making it easier for potential buyers to visualize it as their home with their possessions. Your guidance on pricing was right on the mark. Your leadership in combating the mountains of forms and details helped us feel comfortable knowing the every “t” had been crossed and every “i” had been dotted. At our time of life those are importance issues.",
    author: "David & Lola Cummings",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 11,
    quote: "Sue McKinley is the best, most professional and personal realtor west of the Mississippi. Alaska names mountains after her. Donald Trump trembles when she negotitates. Whether you are a buyer or seller, Sue is superwoman. She is faster than a speeding bullet and can leap tall buildings in a single bound. Look! Up in the sky- its a bird--its a plane--no... its SUE McKinley!",
    author: "Christy Johansen",
    avatar: "https://via.placeholder.com/80/DC3545/FFFFFF?text=MC"
  },
    {
    id: 12,
    quote: "Making a big life change such as moving can be full of emotion and stress. Sue McKinley made our move from New England to California a smooth and positive experience. Her turnaround time was unbelievable; she is prompt and efficient in her return phone calls, texts, or emails. She listened to what we wanted and was always willing and exhaustive in her efforts to stand in as a proxy for us when distance created a gap. Sue’s personality is the number one reason I would recommend her. She is a rare blend of helpful and friendly while being completely efficient, direct, and a 'tiger' to get the job done. It was obvious she was our greatest advocate. She put in countless hours and was literally by our sides guiding us through the stresses. I would recommend Sue to all who are looking to find not just a house but also a good experience to go along with that search.",
    author: "Jeremy & Becca McFadden",
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