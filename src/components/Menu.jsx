import React from "react";
import Header from "../assets/Header.png";
import PakistaniTea from "../assets/Pakistani-Chai.jpg";
import KashmiriChai from "../assets/Kashmiri-Chai.jpg";

const Menu = () => {
  return (
    <section className="menu">

      <div className="heading">
        <img src={Header} alt="facility header" />
        <h3> Our Menu </h3>
      </div>

      <div className="box-container">

        <div className="box">
          <img src={PakistaniTea} alt="Tea" />
          <h3> Pakistani Chai <span className="price">2£</span> </h3>
        </div>

        <div className="box">
          <img src={KashmiriChai} alt="Tea" />
          <h3> Kashmiri Chai <span className="price">2£</span> </h3>
        </div>

      </div>

    </section>
  );
};

export default Menu;
