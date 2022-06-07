import { useState } from "react";

import Button from "../Button/Button";
import { FaUserAlt } from "react-icons/fa";
import { BsHeart, BsBasket3 } from "react-icons/bs";
import Text from "../Text/Text";
import "./accountnavigation.scss";
import { ACCOUNT } from "../../constants/index";

const AccountNavigation = () => {
  const user = <FaUserAlt />;
  const heart = <BsHeart />;
  const basket = <BsBasket3 />;
  const [User, Setuser] = useState(true);
  const [Basket, Setbasket] = useState(2);
  return (
    <div className="account-navigation-container">
      <div className=" account-navigation-item   account">
        <Button to="wwww.acont.com.tr" thema="accountbtn" icon={user}>
          {User ? <span> Hesabim </span> : <span> Giris Yap </span>}
        </Button>

        <div className="user-loggedin-container">
          <div className="little-box "></div>
          {User ? (
            <div>
              <h2>
                <Text size="xl" bold="bold" color="tredyol">
                  Mert Baybagan
                </Text>
              </h2>

              <ul>
                {ACCOUNT.map((menu, index) => {
                  return (
                    <li key={index} className="loggedin-account-item">
                      <Button
                        to={menu.path}
                        thema="accountbtn"
                        icon={menu.icon}
                      >
                        {menu.name}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="login-register-container">
              <div className="login-register-item">
                <Button
                  to="wwwww.mert.bybg"
                  size="loginbtn"
                  color="white"
                  backgroundcolor="tredyol"
                >
                  Giris Yap
                </Button>
              </div>
              <div className="login-register-item">
                <Button
                  to="wwwww.mert.bybg"
                  size="loginbtn"
                  color="blacklite"
                  backgroundcolor="white"
                >
                  Kayit ol
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="account-navigation-item favori">
        <Button to="/hesabim/favori" thema="accountbtn" icon={heart}>
          Favorilerim
        </Button>
      </div>
      <div className="account-navigation-item basket">
        <Button to="/hesabim/favori" thema="accountbtn" icon={basket}>
          Sepetim
        </Button>
        {Basket > 0 ? <span className="basket-info"> {Basket} </span> : null}
      </div>
    </div>
  );
};

export default AccountNavigation;
