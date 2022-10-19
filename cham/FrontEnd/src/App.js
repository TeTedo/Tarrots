import { Routes, Route } from "react-router-dom";
import { Main, Shop, Travel, Auction, Game } from "./pages";
import { NavBar } from "./components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/middleware/loginAction";
function App() {
  // 등급  A : 어드민 , C : 일반 고객 , S : shop판매자, T : 여행사, N : 경매인
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAction.loginCheck());
    setInterval(() => {
      dispatch(loginAction.loginCheck());
    }, 10000);
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
