import React from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";

export default function SuggetionResult() {
  return (
    <div className="suggestion-result">
      <h2>
        <Text size="base" color="tredyol" bold="semibold">
          İlgili Sonuçlar
        </Text>
      </h2>
      <div className="suggestion-result-search">
        <Button to="wwww.goggle.com" thema="suggestionSearchBtn">
          <div className="suggestion-tab">
            <p className="suggestion-tab-name">moda dunyasi </p>{" "}
            <span>Magza</span>
          </div>
        </Button>
        <Button to="wwww.goggle.com" thema="suggestionSearchBtn">
          <div className="suggestion-tab">
            <p className="suggestion-tab-name">moda dunyasi </p>{" "}
            <span>Magza</span>
          </div>
        </Button>
        <Button
          to="wwww.goggle.com"
          img="https://cdn.dsmcdn.com/seller-store/uploads/160434/logo.jpeg"
          thema="suggestionSearchBtn"
        >
          <div className="suggestion-tab">
            <p className="suggestion-tab-name">moda dunyasi </p>{" "}
            <span>Magza</span>
          </div>
        </Button>
        <Button to="wwww.goggle.com" thema="suggestionSearchBtn">
          <div className="suggestion-tab">
            <p>moda dunyasi </p> <span>Magza</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
