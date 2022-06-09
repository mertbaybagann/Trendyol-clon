import { Link } from "react-router-dom";

import cn from "classnames";

import "./button.scss";

const style = {
  thema: {
    suggestionPopBtn: "suggestion-popular-btn",
    suggestionSearchBtn: "suggestion-search-btn",
    accountbtn: "btn-account",
    navigation: "navigation",
  },
  size: {
    loginbtn: "login-register-size",
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
  backgroundcolor: {
    white: "bg-white",
    black: "bg-black",
    gray: "bg-gray",
    tredyol: "bg-trendyol",
    backgroundcolor: "bg-black-lite",
  },
};

function IconLinkButton({
  children,
  to,
  icon,
  thema,
  size,
  color,
  backgroundcolor,
  ...props
}) {
  return (
    <Link className={cn("btn-link ", style.thema[thema])} to={to} {...props}>
      <span className="btn-icon">{icon}</span>
      {children}
    </Link>
  );
}

function ImgLinkButton({ children, img, to, thema }) {
  return (
    <Link className={cn("btn-link ", style.thema[thema])} to={to}>
      <span className="btn-img">
        <img src={img} alt={img} />
      </span>

      {children}
    </Link>
  );
}

function BaseLinkButton({
  children,
  to,
  thema,
  size,
  color,
  backgroundcolor,
  onMouseOverCapture,
  ...props
}) {
  return (
    <Link
      onAbortCapture={onMouseOverCapture}
      className={cn(
        "btn-link ",
        style.thema[thema],
        style.color[color],
        style.backgroundcolor[backgroundcolor],
        style.size[size]
      )}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
function LinkButton({ children, ...props }) {
  if (props.img) {
    const Comp = ImgLinkButton;
    return <Comp {...props}>{children}</Comp>;
  } else if (props.icon) {
    const Comp = IconLinkButton;
    return <Comp {...props}>{children}</Comp>;
  } else {
    const Comp = BaseLinkButton;
    return <Comp {...props}>{children}</Comp>;
  }
}

function BaseButton({ children, thema, onClick, ...props }) {
  return (
    <button
      className={cn("btn-base", style.thema[thema])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Button({ children, ...props }) {
  const Comp = props.to ? LinkButton : BaseButton;

  return <Comp {...props}>{children}</Comp>;
}
