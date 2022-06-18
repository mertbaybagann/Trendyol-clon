import React from "react";
import "./Text.scss";

import cn from "classnames";

const style = {
  mode: {
    logo: "txt-logo",
    MenuText: "text-menu",
    AltMenuText: "alt-menu-text",
    GreaySmallText: "greay-small-text",
    CampaignSummary: "campaign-summarys",
  },
  size: {
    sm: "font-size-sm",
    base: "font-size-base",
    lg: "font-size-lg",
    xl: "font-size-xl",
  },
  color: {
    white: "color-white",
    black: "color-black",
    gray: "color-gray",
    tredyol: "color-trendyol",
    blacklite: "color-black-lite",
  },
  bold: {
    bold: "font-bold",
    semibold: "font-semibold",
  },
  align: {
    left: "text-align-left",
    center: "text-align-center",
    right: "text-align-right",
  },
};

export default function Text({ children, mode, size, color, bold, align }) {
  return (
    <p
      className={cn(
        "text-base",
        style.mode[mode],
        style.size[size],
        style.color[color],
        style.bold[bold],
        style.align[align]
      )}
    >
      {children}
    </p>
  );
}
