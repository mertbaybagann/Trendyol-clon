import React from "react";

import "./campaign.scss";
import Campaigns from "./Campaigns";
const CampaignList = ({ mode, newcampaning }) => {
  if (mode === "campaignbig") {
    return <Campaigns mode={mode} newcampaning={newcampaning} />;
  } else {
    return (
      <div className="campaign-list-small">
        <Campaigns mode={mode} />
      </div>
    );
  }
};

export default CampaignList;
