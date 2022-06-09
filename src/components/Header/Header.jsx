import React from "react";

import Search from "../Search/Search";
import AccountNavigation from "../AccountNavigation/AccountNavigation";
import { Link } from "react-router-dom";
import "./header.scss";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <ul className="right">
          <li>
            <Link to="dadasdasd"> İndirim Kuponlarım</Link>
          </li>
          <li>
            <Link to="sdasdasdas"> Trendyol'da Satış Yap</Link>
          </li>
          <li>
            <Link to="dadasdasdas"> Yardım & Destek</Link>
          </li>
        </ul>
      </div>
      <div className="sticky-header">
        <div className="wrapper">
          <div className="header">
            <div className="logo">
              <Link to="/">
                <img
                  alt="trendyol"
                  src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
                />
              </Link>
            </div>
            <Search />
            <AccountNavigation />
          </div>
        </div>
      </div>
      <div className="navigation">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
