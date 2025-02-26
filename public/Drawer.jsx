

import React, { useState } from "react";
import "./Drawer.css";
import { NavLink } from "react-router-dom";
import down from "../../assets/down (1).svg";
import LoginButton from './LoginButton.jsx';
import arrowleft from '../../assets/arrow-left.svg';
function Drawer() {
  const data = {
    mid: [
      { id: "packages", label: "Packages", hasSubmenu: true },
      { id: "hotels", label: "Hotels" },
      { id: "about-us", label: "About Us" },
      { id: "testimonials", label: "Testimonial" },
      { id: "contact-us", label: "Contact Us" },
    ],
  };

  const submenuItems = {
    mid: [
      { id: "all-packages", label: "All Packages", hasSubmenu: false },
      {
        id: "international-packages",
        label: "International Packages",
        hasSubmenu: true,
        subItems: ["Bali", "Singapore", "Dubai", "Vietnam", "Thailand"],
      },
      {
        id: "domestic-packages",
        label: "Domestic Packages",
        hasSubmenu: true,
        subItems: [
          "Andaman",
          "Himachal",
          "Rajasthan",
          "Gujarat",
          "Goa",
          "Assam",
          "Himachal Pradesh",
          "Tamil Nadu",
        ],
      },
    ],
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsSubmenuOpen(false); // Close submenu if main drawer is toggled
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="mobile-navbar">
      <button className="drawer-toggle" onClick={toggleDrawer}>
        {isDrawerOpen ? "" : "☰"}
      </button>

      {/* Main Drawer */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={toggleDrawer}>
          <img src={arrowleft}/>
        </button>

        <div className="drawer-content">
          {data.mid.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className="drawer-link"
              onClick={(e) => {
                if (item.hasSubmenu) {
                  e.preventDefault(); // Prevent navigation for submenu items
                  toggleSubmenu();
                }
              }}
            >
              {item.label}
              {item.hasSubmenu ? <img src={down} alt="submenu" /> : ""}
            </NavLink>
          ))}
        </div>
        <div className="login-button">
          <LoginButton/>
        </div>
      </div>

      {/* Submenu Drawer */}
      <div className={`submenu-drawer ${isSubmenuOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={toggleSubmenu}>
          <img src={arrowleft}/>
        </button>
        <div className="drawer-content">
          {submenuItems.mid.map((item) => (
            <div key={item.id} className="drawer-link-container">
              <NavLink
                to={`/${data.mid[0].id}/${item.id}`}
                className="drawer-link"
                onClick={(e) => {
                  if (item.hasSubmenu) {
                    e.preventDefault(); // Prevent navigation for items with submenus
                  }
                }}
              >
                {item.label}
                {item.hasSubmenu && (
                  <img src={down} alt="submenu" className="submenu-icon" />
                )}
              </NavLink>
              {item.hasSubmenu && (
                <div className="submenu-content">
                  {item.subItems.map((subItem, index) => (
                    <NavLink
                      key={index}
                      to={`/${data.mid[0].id}/${item.id}/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="submenu-item"
                    >
                      {subItem}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
