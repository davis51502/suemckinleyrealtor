import React from "react";
import "./AboutSue.css";


const AboutSue = () => {
  return (
    <div className="about-container">
      {/* Top Section */}
      <div className="about-top">
        <img src="/Sue2015-e1431579249438.jpg" alt="Sue McKinley" className="about-photo" />
        <div className="about-header">
          <h1>Meet Sue McKinley</h1>
          <h2>A Full-Time Residential Realtor working since 1984.</h2>
          <p>
            <strong>
              I provide a wealth of skill, professionalism, experience & an endless list
              of HAPPY CLIENTS! I look forward to making you my next HAPPY CLIENT!
            </strong>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="about-bottom">
        {/* Left Text */}
        <div className="about-description">
          <p>
            Living in the San Francisco Bay Area since 1975, I serve Buyers & Sellers
            with emphasis in Pleasanton, Dublin, Livermore, San Ramon, Danville, Alamo &
            Blackhawk. I also service the Fremont, Newark and Union City areas as well
            as many other cities in the Bay Area. I've experienced ALL Real Estate
            cycles, (Buyers & Sellers Markets), Short Sales/Foreclosures; am a Relocation
            Specialist working with all Relocation Companies & their Clients & have vast
            experience in just about every market there is! I am dedicated to a high
            caliber of excellence with each and every transaction I do.
          </p>
          <p>
            I am PASSIONATE about helping my clients and they will tell you I go "OVER
            AND ABOVE" their expectations! Part of my service to Sellers is helping
            coordinate staging, window, carpet and house cleaning, painting, inspections,
            etc...everything a seller needs to get their home "market ready" & my clients
            often remark on the quality of my carefully chosen network of financial,
            legal, logistical & other specialists.
          </p>
          <p>
            With Buyers, I help them with the lending process to make sure they are fully
            pre-approved and ready to go when they find "just the right home." I share my
            wide knowledge regarding schools, and other community amenities. I also have
            extremely strong negotiating skills that are put into play throughout the
            entire Real Estate transaction.
          </p>
          <p>
            I've been a top-selling agent every year & have won numerous Sales Awards in
            the Real Estate Industry. I let my clients know THEY are important and work
            very hard on each & every detail of the transaction so they don't have to! My
            clients know they are my #1 Priority! I have been involved in local school
            curriculum & activities; & have a strong commitment to my community &
            church. My relationships & experience "Open the Door" for my clients to "Be
            Home Anywhere".
          </p>
        </div>

        {/* Right Video + List */}
        <div className="about-video">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/dF94HheqJyA"
              title="Sue McKinley Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h3>Watch the Sue McKinley Video</h3>
          <h4>Designations:</h4>
          <ul>
            <li>Graduate Realtor Institute (GRI)</li>
            <li>Internet Professional (ePro)</li>
            <li>Quality Service Certified (QSC)</li>
            <li>Distressed Property Certified</li>
            <li>Senior Real Estate Specialist (SRES)</li>
            <li>Relocation Specialist</li>
            <li>30+ Years Real Estate Experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSue;
