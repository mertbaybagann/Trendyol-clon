import Text from "./components/Text/Text";

import Search from "./components/Search/Search";

import AccountNavigation from "./components/AccountNavigation/AccountNavigation";

function App() {
  return (
    <div>
      <div className="mert">
        <Text
          mode="CampaignSummary"
          text="L'oreal Paris & Maybelline New York & Garnier & NYX Professional Makeup"
        />
      </div>
      <div className="container">
        <Search />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <AccountNavigation />
      </div>
    </div>
  );
}

export default App;
