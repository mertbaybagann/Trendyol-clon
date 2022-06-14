import React from "react";
import { Link } from "react-router-dom";

export const NavbarCampaign = ({ title, path, img }) => {
  return (
    <div className="normal-columna">
      <Link to={path}>
        <img src={img} al={title} />
      </Link>
    </div>
  );
};
