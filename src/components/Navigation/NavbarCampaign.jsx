import React from "react";
import { Link } from "react-router-dom";

export const NavbarCampaign = ({ title, path, img }) => {
  return (
    <>
      <Link className="campaign-link" to={path}>
        <img className="campaign-img" src={img} alt={title} />
      </Link>
    </>
  );
};
