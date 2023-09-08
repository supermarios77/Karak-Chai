import React from "react";
import About_Img from "../assets/about-image.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="image-section">
        <img src={About_Img} alt="Cinnamon and apple tea" />
      </div>
      <div className="about-text">
        <h3>About Us</h3>
        <p>
          Karak Chai is a tea shop that combines the art of tea with a world of
          flavors. We believe tea is more than just a beverage; it's an
          experience. Our diverse range of handcrafted teas showcases the rich
          tapestry of tea traditions from around the globe. We carefully
          source the finest tea leaves and botanicals, ensuring each cup is a
          symphony of flavors and aromas. Karak Chai is dedicated to
          customization, offering an array of chai blends and brewing methods to
          tailor your experience. We also aim to create a community where tea
          lovers gather, share stories, and create memories. Their warm and
          inviting tea houses are designed to be your oasis in a busy world.
        </p>
      </div>
    </div>
  );
};

export default About;
