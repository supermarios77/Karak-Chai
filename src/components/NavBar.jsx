import React, {useState} from "react";
// import logo from "../assets/logo.png"

function NavBar() {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="NavBar">
      <header>
        <a href="/" className="logo">
        {/* <img src={logo} alt="logo" className="logo-img"/> */}
          Karak Chai
        </a>
        <div className="group">
          <ul id="navigation" className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <ion-icon name="close-outline"></ion-icon>  :  <ion-icon name="menu-outline"></ion-icon>}
        </button>
      </header>
    </div>
  );

}

export default NavBar;
