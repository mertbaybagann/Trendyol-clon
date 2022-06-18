import React, { useEffect, useState } from "react";
import TopSiliderItem from "./TopSiliderItem";
import { SILIDER } from "../../constants/Silider";
import Slider from "react-slick";
import "./topsilider.scss";
import "slick-carousel/slick/slick.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import "slick-carousel/slick/slick-theme.css";
const TopSiliders = () => {
  const [silider, setSilider] = useState([]);
  useEffect(() => {
    setSilider(SILIDER);
  }, []);
  const slidesToShow = 11;

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <MdOutlineArrowForwardIos type="next" />,
    prevArrow: <MdOutlineArrowBackIos type="prev" />,
  };

  return (
    <>
      <div className="slick-siliders">
        <Slider className="sliders" {...settings}>
          {silider.map((item, index) => {
            return (
              <TopSiliderItem
                key={index}
                src={item.image}
                link={item.link}
                title={item.title}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TopSiliders;
