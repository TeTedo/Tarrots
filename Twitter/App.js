import { StatusBar } from "expo-status-bar";
import Login from "./components/Login";
import { useState } from "react";
import Main from "./components/Main";
import Top from "./components/Top";
import Nav from "./components/Nav";
export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? (
        <>
          <StatusBar style="auto" />
          <Top />
          <Main />
          <Nav />
        </>
      ) : (
        <>
          <StatusBar style="auto" />
          <Login setLogin={setLogin} />
        </>
      )}
    </>
  );
}
