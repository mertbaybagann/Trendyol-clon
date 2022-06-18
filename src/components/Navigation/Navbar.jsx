import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
      {Submenu.map((item, index1) => {
        const campaignLeghend = item.campaigns.length;

        const menuid = `menu-${item.id}`;
        const element1 = document.getElementById(menuid);
        return (
          <li
            key={index1}
            onMouseOver={() => {
              const element1 = document.getElementById(menuid);
              element1.classList.add("animation");
              const element2 = document.getElementById(menuid);
              element2.classList.add("enabled");
            }}
            onMouseOut={() => {
              const element3 = document.getElementById(menuid);
              element3.classList.remove("animation");
              const element4 = document.getElementById(menuid);
              element4.classList.remove("enabled");
            }}
            className="tab-link"
          >
            <Button to={item.path} thema="navigation">
              {item.name}
            </Button>
            <div id={menuid} className="sub-nav ">
              <div className="sub-nav-center">
                <div className="sub-nav-outer">
                  <div className="normal-column">
                    {item.menu.map((menu, index2) => {
                      return (
                        <div key={index2} className="category-box">
                          <Link to="">{menu.name}</Link>
                          <ul className="sub-item-list">
                            {menu.submenu.map((submenu, index3) => {
                              return (
                                <li key={index3} className="sub-item">
                                  <NavLink to={submenu.path}>
                                    {submenu.name}
                                  </NavLink>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className={classNames(
                    "campaign-container",
                    `${campaignLeghend > 3 ? "medium" : "small"}`
                  )}
                >
                  {item.campaigns.map((campaign, index4) => {
                    return (
                      <NavbarCampaign
                        img={campaign.img}
                        title={campaign.title}
                        path={campaign.path}
                        key={index4}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
