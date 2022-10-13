import { Routes, Route } from "react-router-dom";
import { Main, Shop, Travel, Auction, Game } from "./pages";
import { NavBar } from "./components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/middleware/loginAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAction.loginCheck());
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/travel" element={<Travel />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
