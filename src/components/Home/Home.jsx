import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Component */}
      <Header />

      {/* First Section - Hero */}
      <section className="hero-section">
        <div className="home-logo"></div>
        <div className="translucent-overlay">
          <div className="main-content">
            <h1>Better Mental Health Solutions</h1>
            <p className="subtext">
              The most common argument against this is that there is a direct relation between the 
              set of related commands and controls and within the framework of the development 
              methodology. However, the remainder of the direct access to key resources and what 
              motivates developers to work out The Exchange of Progressive Project.<br />
              (Gilberto Browder in The Book of the Strategic Management)
            </p>
            <p className="subtext small-text">
              To be more specific, the layout of the strategic decision ensures integrity of what can 
              be classified as the program functionality.<br />
              One should, however, not forget that the pursuance of consequential risks focuses our 
              attention on every contradiction between the referential arguments and the system concepts.
            </p>
            <button className="cta-button">Checkout My Services</button>
          </div>
        </div>
      </section>

      {/* Second Section - Who Am I */}
      <section className="who-am-i-section">
        <div className="who-am-i-content">
          <h2>Who Am I ?</h2>
          <p className="description">
            <span>Curiously, the optimization of the criterion the minor details of specific action result in the integration prospects and will possibly result in The Feature of Simple Architecture.</span><br />
            <span>(Sergio Frey in The Book of the Performance Gaps)</span><br />
            <span>First and foremost, aspects of the essential component stimulates development of what can be classified as the strategic decisions. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id vehicula augue. 
              Duis scelerisque, mauris vitae vulputate gravida, leo nunc viverra dui, tempus rutrum erat quam sed nibh.</span><br />
            <span>Under the assumption that the initial progress in the change of marketing strategy provides a foundation for what can be classified as the hardware maintenance.</span>
          </p>
          <button className="about-me-button">More About Me</button>
        </div>
        <div className="profile-image-container"></div> {/* Removed <img> and kept the container */}
      </section>

        {/* Third Section - Services I Offer */}
      <section className="services-section">
        <h2>SERVICES I OFFER</h2>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon group-icon"></div>
            <p>Group Counselling</p>
          </div>
          <div className="service-item">
            <div className="service-icon family-icon"></div>
            <p>Family Counselling</p>
          </div>
          <div className="service-item">
            <div className="service-icon couples-icon"></div>
            <p>Couples Counselling</p>
          </div>
          <div className="service-item">
            <div className="service-icon child-icon"></div>
            <p>Child Counselling</p>
          </div>
        </div>
        <p className="services-description">
          Check out more of my services and book a session by clicking the button below.
        </p>
        <button className="services-button">More Services I Offer</button>
      </section>

    </div>
  );
};

export default Home;
