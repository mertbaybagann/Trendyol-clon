import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAVBAR } from "../../constants/Nabar";
import Button from "../Button/Button";
import { NavbarCampaign } from "./NavbarCampaign";

export const Navbar = () => {
  const [Submenu, setSubmenu] = useState([]);

  useEffect(() => {
    setSubmenu(NAVBAR);
  }, []);
  return (
    <ul className="main-nav">
      {Submenu.map((item, index) => {
        const idname = `sub-nav-${item.id}`;
        const menucampaigns = item.campaigns;

        return (
          <li
            key={index}
            onMouseOverCapture={() => {
              var element = document.getElementById(idname);
              element.classList.add("animation");
              var element1 = document.getElementById(idname);
              element1.classList.add("enabled");
            }}
            onMouseOut={() => {
              var element = document.getElementById(idname);
              element.classList.remove("animation");
              var element1 = document.getElementById(idname);
              element1.classList.remove("enabled");
            }}
            className="tab-link"
          >
            <Button to="asdas" thema="navigation">
              {item.name}
            </Button>
            <div key={index} id={idname} className="sub-nav ">
              <div className="sub-nav-center">
                <div className="sub-nav-outer">
                  <div className="normal-column">
                    {item.menu.map((menu, index) => {
                      return (
                        <div key={index} className="category-box">
                          <Link to="">{menu.name}</Link>
                          <ul className="sub-item-list">
                            {menu.submenu.map((submenu, index) => {
                              return (
                                <li key={index} className="sub-item">
                                  <Link to={submenu.path}>{submenu.name}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="campaign-container">
                  {item.campaigns.length > 0
                    ? item.campaigns.map((campaign, index) => {
                        return (
                          <NavbarCampaign
                            key={index}
                            img={campaign.img}
                            path={campaign.path}
                            title={campaign.title}
                          />
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
