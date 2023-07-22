import "./Style/App.css";
import Nav from "./Component/Nav";
import HomePage from "./Component/HomePage";
import ChartPage from "./Component/ChartPage"
import Connect from "./Component/Connect";
import Footter from "./Component/Footter";
import ExchangeCoin from "./Component/ExchangeCoin";
import AllCoin from "./Component/AllCoin";
import ErrorCompoent from "./Component/ErrorCompoent";
import Subcoin from "./Component/Subcoin";
import Walet from "./Component/Walet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/ExchangeCoin" element={<ExchangeCoin />}></Route>
          <Route path="/AllCoin" element={<AllCoin />}></Route>
          <Route path="/ChartPage" element={<ChartPage />}></Route>
          <Route path="/Subcoin" element={<Subcoin />}></Route>
          <Route path="/Connect" element={<Connect />}></Route>
          <Route path="/Walet" element={<Walet />}></Route>
          <Route path="*" element={<ErrorCompoent />}></Route>
        </Routes>
        <Footter/>
      </Router>
    </>
  );
}

export default App;
 