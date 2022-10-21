import { Routes, Route } from "react-router-dom";
import { Main, Shop, Travel, Auction, Game } from "./pages";
import { NavBar } from "./components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./redux/middleware/loginAction";
function App() {
  // 등급  A : 어드민 , C : 일반 고객 , S : shop판매자, T : 여행사, N : 경매인
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.login.user_id);
  useEffect(() => {
    dispatch(loginAction.loginCheck());
  }, []);
  useEffect(() => {
    dispatch(loginAction.loginCheck());
  }, [user_id]);
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
