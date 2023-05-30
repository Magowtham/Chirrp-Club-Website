import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactDOM } from "react";
import "../CSS/Navbar.css";
import SidebarOverlay from "./SidebarOverlay";
function Navbar({ setOverlay, isSubPage }) {
  const [media, setMedia] = useState(true);
  const [click, setClick] = useState(true);
  const toggleBtn = () => {
    setClick(!click);
    if (!isSubPage) {
      setOverlay(!click);
    }
  };
  const mediaScreen = () => {
    if (window.innerWidth <= 1300) {
      setMedia(false);
    } else {
      setMedia(true);
    }
  };
  window.addEventListener("resize", mediaScreen);
  useEffect(() => {
    mediaScreen();
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className={media ? `navbar-container` : `navbar-container-media`}>
          <ul className={media ? `navitems-ul` : `navitems-ul-media`}>
            <li className="navbar-item">
              <Link to="/" className="navbar-links">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-links">
                About Club
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="birds" className="navbar-links">
                Bird Collection
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-links">
                Our Gallery
              </Link>
            </li>
          </ul>
          <div className={`navbar-logo ${media ? `` : `navbar-logo-media`}`}>
            <img src="/Media/Alvas-logo.png" alt="" className="" />
          </div>
          <ul className={media ? `navitems-ul` : `navitems-ul-media`}>
            <li className="navbar-item">
              <Link to="/" className="navbar-links">
                About Club
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-links">
                Team
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-links">
                Our Gallery
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-links">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="navbar-btn">
            <div
              className={media ? `hamburger-menu-media` : `hamburger-menu`}
              onClick={toggleBtn}
            >
              <div
                className={`bar-top ${click ? `bar-top` : `bar-top-close`}`}
              ></div>
              <div
                className={`bar-middle ${
                  click ? `bar-middle` : `bar-middle-close`
                }`}
              ></div>
              <div
                className={`bar-bottom ${
                  click ? `bar-bottom` : `bar-bottom-close`
                }`}
              ></div>
            </div>
          </div>
          <SidebarOverlay isClicked={click}>
            <div
              className={`navbar-items-container-media ${click ? "" : `open`}`}
            >
              <div className="navbar-closebtn-sec"></div>
              <ul>
                <li className="navbar-item-media">
                  <Link to="/" className="navbar-links-media">
                    Home
                  </Link>
                </li>
                <li className={`navbar-item-media ${click ? `close` : `open`}`}>
                  <Link to="/" className="navbar-links-media">
                    About Club
                  </Link>
                </li>
                <li className="navbar-item-media">
                  <Link to="/" className="navbar-links-media">
                    Bird Collection
                  </Link>
                </li>
                <li className="navbar-item-media">
                  <Link to="/" className="navbar-links-media">
                    Our Gallery
                  </Link>
                </li>
                <li className="navbar-item-media">
                  <Link to="/" className="navbar-links-media">
                    Bird
                  </Link>
                </li>
                <li className="navbar-item-media">
                  <Link to="/" className="navbar-links-media">
                    Birding
                  </Link>
                </li>
                <li className="navbar-item-media">
                  <Link to="/" className="navbar-links-media">
                    Team
                  </Link>
                </li>
                <li className="navbar-item-media">
                  <Link to="/" className="navbar-links-media">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </SidebarOverlay>
        </div>
      </nav>
      <div className="root-structure"></div>
    </>
  );
}

export default Navbar;
