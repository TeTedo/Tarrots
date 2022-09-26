import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main, Profile, Post, SignUp, Login, Logout, Posts } from './page';
import { SideBar } from './components';
import { useState } from 'react';
function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState([]);
  const [loginUser, setloginUser] = useState('');
  const [post, setPost] = useState([]);
  return (
    <div className="App">
      <SideBar login={login} loginUser={loginUser} user={user} />
      <Routes>
        <Route path="/" element={<Main post={post} />} />
        <Route
          path="/profile"
          element={
            login ? (
              <Profile loginUser={loginUser} user={user} setUser={setUser} />
            ) : (
              <Login user={user} setLogin={setLogin} setloginUser={setloginUser} />
            )
          }
        />
        <Route
          path="/post"
          element={
            login ? (
              <Post setPost={setPost} post={post} loginUser={loginUser} user={user} />
            ) : (
              <Login user={user} setLogin={setLogin} setloginUser={setloginUser} />
            )
          }
        />
        <Route path="/posts" element={<Posts post={post} />} />
        <Route
          path="/logout"
          element={
            login ? <Logout setLogin={setLogin} setloginUser={setloginUser} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/signup"
          element={login ? <Navigate to="/" /> : <SignUp user={user} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={
            login ? (
              <Navigate to="/" />
            ) : (
              <Login user={user} setLogin={setLogin} setloginUser={setloginUser} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
