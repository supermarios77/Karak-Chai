import React from "react";
import facilityHeader from "../assets/Header.png";
import tea from "../assets/tea.png";

const Facility = () => {
  return (
    <section className="Facility">
      <div className="heading">
        <img src={facilityHeader} alt="facility header" />
        <h3> Our Facility </h3>
      </div>

      <div className="box-container">
        <div className="box">
          <img src={tea} alt="tea" />
          <h3>Varieties Of Tea</h3>
          <p>
            Karak Chai offers a diverse range of teas, from traditional black to
            herbal blends and various chai's, catering to different tastes. Our
            carefully sourced and expertly crafted teas provide a delightful and
            authentic experience, making them perfect for both morning and
            evening consumption.
          </p>
        </div>

        <div className="box">
          <img src={tea} alt="tea" />
          <h3>Best Quality</h3>
          <p>
            Karak Chai guarantees high-quality tea with a robust flavour, using
            carefully handpicked leaves from top tea gardens, expertly processed
            and blended for full-bodied, aromatic tea.
          </p>
        </div>

        <div className="box">
          <img src={tea} alt="tea" />
          <h3>Ready On Order</h3>
          <p>
            Percolator affogato single origin organic grounds mazagran macchiato
            extraction. Aroma seasonal decaffeinated espresso single shot breve
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facility;
