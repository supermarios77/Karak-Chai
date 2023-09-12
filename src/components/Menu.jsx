import React from "react";
import Header from "../assets/Header.png";
import PakistaniTea from "../assets/images-menu/Pakistani-Chai.jpg";
import KashmiriChai from "../assets/images-menu/Kashmiri-Chai.jpg";
import AfghaniChai from "../assets/images-menu/afghani-chai.jpg";
import MasalaChai from "../assets/images-menu/Masala-Chai.jpg";
import KarakChai from "../assets/images-menu/Karak-Chai.jpg";
import TurkishTea from "../assets/images-menu/Turkish-Tea.jpg";
import BlackTea from "../assets/images-menu/Black-Tea.jpg";
import GingerTea from "../assets/images-menu/Ginger-Tea.jpg";
import GreenTea from "../assets/images-menu/Green-Tea.jpg";
import MintTea from "../assets/images-menu/Mint-Tea.jpg";
import CardamomTea from "../assets/images-menu/Cardamom-Tea.jpg";
import CinnamonTea from "../assets/images-menu/Cinnamon-Tea.jpg";
import ChamomileTea from "../assets/images-menu/chamomile-tea.jpg";
import OolongTea from "../assets/images-menu/oolong-tea.jpg";
import PersianTea from "../assets/images-menu/persian-tea.jpg";

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
          <h3>
            {" "}
            Pakistani Chai <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={KashmiriChai} alt="Tea" />
          <h3>
            {" "}
            Kashmiri Chai <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={AfghaniChai} alt="Tea" />
          <h3>
            {" "}
            Afghani Chai <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={MasalaChai} alt="Tea" />
          <h3>
            {" "}
            Masala Chai <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={KarakChai} alt="Tea" />
          <h3>
            {" "}
            Karak Chai <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={TurkishTea} alt="Tea" />
          <h3>
            {" "}
            Turkish Çay <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={BlackTea} alt="Tea" />
          <h3>
            {" "}
            Black Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={CinnamonTea} alt="Tea" />
          <h3>
            {" "}
            Cinnamon Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={CardamomTea} alt="Tea" />
          <h3>
            {" "}
            Cardamom Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={ChamomileTea} alt="Tea" />
          <h3>
            {" "}
            Chamomile Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={MintTea} alt="Tea" />
          <h3>
            {" "}
            Mint Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={GreenTea} alt="Tea" />
          <h3>
            {" "}
            Green Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={GingerTea} alt="Tea" />
          <h3>
            {" "}
            Ginger Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={OolongTea} alt="Tea" />
          <h3>
            {" "}
            Oolong Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

        <div className="box">
          <img src={PersianTea} alt="Tea" />
          <h3>
            {" "}
            Persian Tea <span className="price">3£</span>{" "}
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Menu;
