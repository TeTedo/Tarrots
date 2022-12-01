import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import useWeb3 from "./hooks/useWeb3";
import Shop from "./components/Shop";
import FruitShopContract from "./contracts/FruitShop.json";
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
        <Header />
        <Shop />
      </DeployedContext.Provider>
    </div>
  );
}

export default App;
