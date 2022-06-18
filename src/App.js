import Helmet from "react-helmet";
import "./app.scss";
import CampaignList from "./components/Campaigns/CampaignList";
import Campaigns from "./components/Campaigns/Campaigns";
import TopSiliders from "./components/Silider/TopSiliders";
function App() {
  return (
    <div className="container">
      <Helmet>
        <title>Anasayfa</title>
      </Helmet>
      <div className="wrapper">
        <TopSiliders />
        <div className="sticky-wrapper">
          <CampaignList mode="campaignbig" newcampaning="true" />
        </div>

        <CampaignList mode="campaignsmall" newcampaning="false" />
      </div>
    </div>
  );
}

export default App;
