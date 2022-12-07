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
import Transaction from "components/pages/transaction/Transaction";
import axios from "axios";
export const DeployedContext = createContext();
function App() {
  const [web3, account] = useWeb3();
  const [deployed, setDeployed] = useState();
  const [CA, setCA] = useState();
  const [logs, setLogs] = useState([]);
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

      web3.eth.subscribe("logs", { address: CA }).on("data", async (log) => {
        const params = [
          { type: "address", name: "from" },
          { type: "address", name: "to" },
          { type: "string", name: "name" },
          { type: "uint", name: "num" },
          { type: "uint", name: "value" },
          { type: "uint", name: "date" },
          { type: "string", name: "pay" },
        ];
        const value = await web3.eth.abi.decodeLog(params, log.data);
        await axios.post("/api/getTransaction", {
          from: value.from,
          to: value.to,
          name: value.name,
          num: value.num,
          value: value.value,
          pay: value.pay,
          date: value.date,
        });
        setLogs((prev) => {
          return [...prev, value];
        });
      });
    })();
  }, [web3]);
  useEffect(() => {
    (async () => {
      const data = await axios.get("/api/getTransaction");
      setLogs([...data.data]);
    })();
  }, []);
  return (
    <div className="App">
      <DeployedContext.Provider value={{ deployed, web3, account, CA, logs }}>
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
              <Route path="/transaction" element={<Transaction />}></Route>
            </Routes>
          </div>
        </div>
      </DeployedContext.Provider>
    </div>
  );
}

export default App;
