// Dependencies
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';


// Compenents
import HomePage from "./components/HomePage";
import Register from "./components/auth/Register";
import TopBar from "./common/TopBar";import Login from "./components/auth/Login";
import Account from "./components/profile/Account";
import Contact from "./components/profile/Contact";
import BookingPage from "./components/booking/BookingPage";

// Import functions/methods
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  // const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      // setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <TopBar user={user}></TopBar>
      <Routes>
        <Route path="/" element={<HomePage user={user} />}></Route>
        <Route path="/register" element={<Register user={user}/>}></Route>
        <Route path="/login" element={<Login user={user} />}></Route>
        <Route path="/account" element={<Account user={user} />}></Route>
        <Route path="/account/contact-info" element={<Contact user={user}/>}></Route>
        <Route path="/make-booking" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
