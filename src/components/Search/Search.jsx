import { useState } from "react";
import Popularsuggestion from "./Popularsuggestion";

import "./search.scss";
import SuggetionResult from "./SuggetionResult";
function Search() {
  const [Suggestions, setSuggestions] = useState(false);
  const [handleText, setHendleText] = useState("");

  const handleChange = (e) => {
    setHendleText(e.target.value);
  };
  function handleExit() {
    setTimeout(() => {
      setSuggestions(false);
    }, 60);
  }
  return (
    <div className="search">
      {Suggestions === true ? (
        <div className="suggestions-container">
          {handleText.length > 1 ? (
            <SuggetionResult />
          ) : (
            <div>
              <Popularsuggestion />
            </div>
          )}
        </div>
      ) : null}
      <div className="search-box">
        <input
          onChange={handleChange}
          onFocus={() => {
            setSuggestions(true);
          }}
          onBlur={handleExit}
          className="search-input"
          type="text"
          tabindex="1"
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
          maxlength="50"
          autocomplete="off"
          value={handleText}
        />
        <span className="search-icon">&#160;</span>
      </div>
    </div>
  );
}
export default Search;
