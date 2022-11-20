import { StatusBar } from "expo-status-bar";
import Login from "./components/Login";
import { createContext, useState } from "react";
import Main from "./components/Main";
import Top from "./components/Top";
import Nav from "./components/Nav";
export const userContext = createContext();
export default function App() {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState("");
  return (
    <>
      {login ? (
        <userContext.Provider value={{ userId }}>
          <StatusBar style="auto" />
          <Top />
          <Main />
          <Nav />
        </userContext.Provider>
      ) : (
        <>
          <StatusBar style="auto" />
          <Login setLogin={setLogin} setUserId={setUserId} />
        </>
      )}
    </>
  );
}
