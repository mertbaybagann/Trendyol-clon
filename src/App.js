import Helmet from "react-helmet";
import "./app.scss";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="container">
      <Helmet>
        <title>Anasayfa</title>
      </Helmet>
    </div>
  );
}

export default App;
