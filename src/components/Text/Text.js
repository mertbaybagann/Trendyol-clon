import React from "react";
import "./Text.scss";

import cn from "classnames";

const style = {
  mode: {
    logo: "txt-logo",
    MenuText: "text-menu",
    AltMenuText: "alt-menu-text",
    GreaySmallText: "greay-small-text",
    CampaignSummary: "campaign-summary",
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
};

export default function Text({ children, mode, size, color, bold }) {
  return (
    <p
      className={cn(
        "text-base",
        style.mode[mode],
        style.size[size],
        style.color[color],
        style.bold[bold]
      )}
    >
      {children}
    </p>
  );
}
