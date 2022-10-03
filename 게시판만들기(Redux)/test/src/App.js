import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main, Profile, Post, SignUp, Login, Logout, Posts, Modify, Delete } from './page';
import { SideBar } from './components';
import { useSelector } from 'react-redux';
function App() {
  const login = useSelector((state) => state.login.login);
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={login ? <Profile /> : <Login />} />
        <Route path="/post" element={login ? <Post /> : <Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/logout" element={login ? <Logout /> : <Navigate to="/" />} />
        <Route path="/signup" element={login ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/login" element={login ? <Navigate to="/" /> : <Login />} />
        <Route path="/posts/modify" element={login ? <Modify /> : <Navigate to="/" />} />
        <Route path="/posts/delete" element={login ? <Delete /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
