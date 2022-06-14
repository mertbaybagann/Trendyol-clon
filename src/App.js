import Helmet from "react-helmet";
import "./app.scss";
import Header from "./components/Header/Header";
import TopSilider from "./components/Silider/TopSilider";
function App() {
  return (
    <div className="container">
      <Helmet>
        <title>Anasayfa</title>
      </Helmet>
      <TopSilider />
    </div>
  );
}

export default App;
