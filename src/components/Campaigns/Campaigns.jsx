import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { CAMPANING } from "../../constants/Campaigns";
import cn from "classnames";
import Text from "../Text/Text";

const Campaigns = ({ mode, newcampaning }) => {
  const [campaigns, setCampaigns] = useState([]);
  const campaninew = `${newcampaning}`;
  useEffect(() => {
    setCampaigns(CAMPANING);
  }, []);
  const style = {
    mode: {
      campaignbig: "campaign-big",
      campaignsmall: "campaign-small",
    },
  };

  const podyum = (campaign) => {
    if (campaninew === "true") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {CAMPANING.filter((item) => item.newCampaning === podyum(campaninew)).map(
        (campaign) => {
          const listid = `list-${campaign.id}`;
          return (
            <article
              key={campaign.id}
              className={cn("component-item", style.mode[mode])}
              onMouseOver={() => {
                const hovertext1 = document.getElementById(listid);
                hovertext1.classList.add("open-text");
              }}
              onMouseOut={() => {
                const hovertext1 = document.getElementById(listid);
                hovertext1.classList.remove("open-text");
              }}
            >
              <Link className="campaign-link " to={campaign.href}>
                <span className="image-container">
                  <img src={campaign.src} alt={campaign.title} />{" "}
                </span>
                <summary className="campaign-summary">
                  <span>
                    {mode === "campaignbig" ? (
                      <Text color="white" size="base">
                        {campaign.title}
                      </Text>
                    ) : (
                      <Text mode="CampaignSummary">{campaign.title}</Text>
                    )}
                  </span>
                  <div id={listid} className="hover-text">
                    <Text> Alışverişe Başla </Text>
                    <i className="arrow">
                      <MdOutlineArrowForwardIos />
                    </i>
                  </div>
                </summary>
              </Link>
            </article>
          );
        }
      )}
    </>
  );
};

export default Campaigns;
