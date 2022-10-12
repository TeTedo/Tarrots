import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Shop, Travel, Auction, Game } from "./pages";
import { NavBar } from "./components";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
