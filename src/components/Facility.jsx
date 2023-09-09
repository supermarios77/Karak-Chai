import React from "react";
import facilityHeader from "../assets/Facility-Header.png";
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
            Percolator affogato single origin organic grounds mazagran macchiato
            extraction. Aroma seasonal decaffeinated espresso single shot breve
          </p>
        </div>

        <div className="box">
          <img src={tea} alt="tea" />
          <h3>Best Quality</h3>
          <p>
            Percolator affogato single origin organic grounds mazagran macchiato
            extraction. Aroma seasonal decaffeinated espresso single shot breve
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
