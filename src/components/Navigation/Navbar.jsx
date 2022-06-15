import classNames from "classnames";
import { useEffect, useState } from "react";
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
        const campaignLeghend = item.campaigns.length;
        const menuid = `menu-${index}`;
        const element1 = document.getElementById(menuid);
        return (
          <li
            key={index}
            onMouseOver={() => {
              element1.classList.add("animation");

              element1.classList.add("enabled");
            }}
            onMouseOut={() => {
              element1.classList.remove("enabled");
              element1.classList.remove("animation");
            }}
            className="tab-link"
          >
            <Button to="asdas" thema="navigation">
              {item.name}
            </Button>
            <div key={index} id={menuid} className="sub-nav ">
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
                                <li key={submenu.id} className="sub-item">
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

                <div
                  className={classNames(
                    "campaign-container",
                    `${campaignLeghend > 3 ? "medium" : "small"}`
                  )}
                >
                  {item.campaigns.map((campaign, index) => {
                    return (
                      <NavbarCampaign
                        img={campaign.img}
                        title={campaign.title}
                        path={campaign.path}
                        key={campaign.id}
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
