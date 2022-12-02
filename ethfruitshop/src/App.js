import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import useWeb3 from "./hooks/useWeb3";
import Shop from "./components/pages/shop/Shop";
import FruitShopContract from "./contracts/FruitShop.json";
import { Routes, Route } from "react-router-dom";
import NavBar from "components/Nav/NavBar";
import Buy from "components/pages/Buy/Buy";
import Sell from "components/pages/Sell/Sell";
import Home from "components/pages/Home/Home";
export const DeployedContext = createContext();
function App() {
  const [web3, account] = useWeb3();
  const [deployed, setDeployed] = useState();
  const [CA, setCA] = useState();
  useEffect(() => {
    (async () => {
      if (!web3) return;
      const networkId = await web3.eth.net.getId();
      const contractAddress = FruitShopContract.networks[networkId].address;
      const instance = await new web3.eth.Contract(
        FruitShopContract.abi,
        contractAddress
      );
      setDeployed(instance);
      setCA(contractAddress);
    })();
  }, [web3]);
  return (
    <div className="App">
      <DeployedContext.Provider value={{ deployed, web3, account, CA }}>
        <div className="Wrap">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="Container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="/buy" element={<Buy />}></Route>
              <Route path="/sell" element={<Sell />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
            </Routes>
          </div>
        </div>
      </DeployedContext.Provider>
    </div>
  );
}

export default App;
