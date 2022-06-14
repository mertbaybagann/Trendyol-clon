import React from "react";
import { Link } from "react-router-dom";
import "./topsilider.scss";
const TopSilider = () => {
  return (
    <>
      <div className="top-silider">
        <Link className="top-sildir-link" to="#">
          <img
            src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/9/Top_Widget_202203091801.png"
            alt="www"
          />

          <span>Sana ozel</span>
        </Link>
      </div>
    </>
  );
};

export default TopSilider;
