import React, { useState, useEffect } from "react";
import "../css/style.css";
import "../css/navbar.css";
import "../css/icon.css";
import "../css/responsive.css";
import "../css/transitions.css";
import logo from "../images/logo/WHERE_.png";
import { Link } from "react-router-dom";
import LocalStorageService from "../services/LocalStorageService";
import NavbarAvatar from "./AvatarMenu/NavbarAvatar";

const Navbar = ({ user, ...props }) => {
  let localStorageService = new LocalStorageService();
  const [navbar, setNavbar] = useState(false);
  const [scrollDir, setScrollDir] = useState();

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header
        className={`where-header haslayout ${
          scrollDir ? "is-hidden" : "hide-header"
        } ${navbar && "darkheader"}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <strong className="logo">
                <a href="/mainpage">
                  <img src={logo} alt="company logo here" />
                </a>
              </strong>
              <nav className="addnav">
                <ul>
                  {localStorageService.getLocalStorage("accessToken") ===
                    undefined && (
                    <Link to={`/login`}>
                      <li>
                        <a className="btn" href="#">
                          <i className="icon-smiling-face"></i>
                          <span>Join Now</span>
                        </a>
                      </li>
                    </Link>
                  )}
                  {user.role === "ROLE_ADMIN" ? (
                    <div>
                      <Link to={`/dashboard`}>
                        <li>
                          <a className="btn btnOrange" href="#as">
                            <i className="icon-plus"></i>
                            <span>Add Venue</span>
                          </a>
                        </li>
                      </Link>
                      <li>
                        <NavbarAvatar user={user}></NavbarAvatar>
                      </li>
                    </div>
                  ) : (
                    <li>
                      <NavbarAvatar user={user}></NavbarAvatar>
                    </li>
                  )}
                </ul>
              </nav>
              <nav className="nav">
                <div className="collapse navbar-collapse navigation">
                  <ul>
                    <li className="current-menu-item">
                      <span className="dropdowarrow">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="/">Home</a>
                    </li>
                    <li className="menu-item-has-children">
                      <span className="dropdowarrow">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="">Explore</a>
                      <ul className="sub-menu">
                        <Link to={`/listing`}>
                          <li>
                            <Link to={"/listing"}>
                              <a href="/listing">All Listings</a>
                            </Link>
                          </li>
                        </Link>
                        <li>
                          <a href="/listing/search/category/1">Food</a>
                        </li>
                        <li>
                          <a href="/listing/search/category/2">Entertainment</a>
                        </li>
                        <li>
                          <a href="/listing/search/category/3">Educational</a>
                        </li>
                        <li>
                          <a href="/listing/search/category/4">Nightlife</a>
                        </li>
                        <li>
                          <a href="/listing/search/category/5">Outdoors</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/dashboard">Dasboard</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
