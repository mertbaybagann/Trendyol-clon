import React from "react";
import "./navigation.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { NAVBAR } from "../../constants/Nabar";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-wrapper">
        <nav>
          <ul className="main-nav">
            {NAVBAR.map((item, index) => {
              const idname = `sub-nav-${item.id}`;

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
                  <div id={idname} className="sub-nav">
                    <div className="sub-nav-center">
                      <div className="sub-nav-outer">
                        {item.menu.map((menu, indexs) => {
                          const submenuidnex = menu.submenu.length;

                          return (
                            <div key={indexs} className="normal-column">
                              <div className="category-box">
                                <Link to="">{menu.name}</Link>{" "}
                                <ul className="sub-item-list">
                                  {menu.submenu.map((submenu, subidnex) => {
                                    return (
                                      <li key={subidnex} className="sub-item">
                                        <Link to={submenu.path}>
                                          {submenu.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                                {submenuidnex < 7
                                  ? console.log(submenuidnex)
                                  : null}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
