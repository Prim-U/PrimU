import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./components/HomePage";
import Register from "./components/auth/Register";
import Navbar from "./common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Profile from "./components/profile/Profile";
import Contact from "./components/profile/Contact";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import TopBar from "./common/TopBar";

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <TopBar user={user}></TopBar>
      <Routes>
        <Route path="/" element={<HomePage user={user} />}></Route>
        <Route path="/register" element={<Register user={user} />}></Route>
        <Route path="/login" element={<Login user={user} />}></Route>
        <Route path="/profile" element={<Profile user={user} />}></Route>
        <Route path="/contact-info" element={<Contact user={user} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
