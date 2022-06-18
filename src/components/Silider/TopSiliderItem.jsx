import React from "react";
import { Link } from "react-router-dom";
import Text from "../Text/Text";

const TopSiliderItem = ({ key, src, title, link }) => {
  return (
    <Link key={key} className="top-sildir-link" to={link}>
      <img src={src} alt={title} />

      <Text size="base" bold="bold" align="center" color="blacklite">
        {title}
      </Text>
    </Link>
  );
};

export default TopSiliderItem;
