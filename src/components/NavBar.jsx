import React, {useState} from "react";

function NavBar() {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="NavBar">
      <header>
        <a href="/" className="logo">
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
              <a href="/">About</a>
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
