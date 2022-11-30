import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import useWeb3 from "./hooks/useWeb3";
import Shop from "./components/Shop";
function App() {
  const [web3, account] = useWeb3();
  return (
    <div className="App">
      <Header account={account} web3={web3} />
      <Shop web3={web3} />
    </div>
  );
}

export default App;
