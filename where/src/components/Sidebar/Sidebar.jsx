import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "../../css/sidebar.css";
import "../../css/icon.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className='background-sidebar'>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <i className="fa fa-angle-right" onClick={showSidebar}></i>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <i className="fa fa-angle-left" onClick={showSidebar}></i>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                  <i className={item.cIcon} onClick={showSidebar}></i>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <br /><br />
            <span>account</span>
            <li  className='nav-text'>
                  <Link to='/myprofile'>
                  <i className="icon-lock6" onClick={showSidebar}></i>
                    <span >My Profile</span>
                  </Link>
                </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;