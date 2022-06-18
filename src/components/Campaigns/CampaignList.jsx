import React from "react";

import "./campaign.scss";
import Campaigns from "./Campaigns";
const CampaignList = ({ mode }) => {
  if (mode === "campaignbig") {
    return <Campaigns mode={mode} />;
  } else {
    return (
      <div className="campaign-list-small">
        <Campaigns mode={mode} />
      </div>
    );
  }
};

export default CampaignList;
