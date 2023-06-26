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
import ResetPassword from "./components/auth/ResetPassword";
import Addresses from "./components/profile/Addresses";
import AddAddress from "./components/profile/AddAddress";
import PaymentPage from "./components/profile/PaymentPage";
import AddPayment from "./components/profile/AddPayment";
import SellerPage from "./components/seller/SellerPage";

function App() {
  const [user, setUser] = useState(null);
  // const [isUserUpdated, setIsUserUpdated] = useState(false);
  const [addresses, setAddresses] = useState([]);
  console.log(addresses);

  function createAddress(address) {
    setAddresses([...addresses, address]);
  }

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
        <Route path="/login/reset-password" element={<ResetPassword />}></Route>

        <Route path="/account" element={<Account user={user} />}></Route>
        <Route path="/account/contact-info" element={<Contact user={user}/>}></Route>
        <Route path="/account/addresses" element={<Addresses addresses={addresses}/>}></Route>
        <Route path="account/addresses/address-default" element={<AddAddress createAddress={createAddress} />}></Route>
        <Route path="/account/payment" element={<PaymentPage />}></Route>
        <Route path="/account/payment/payment-details" element={<AddPayment />}></Route>
        <Route path="/seller" element={<SellerPage />}></Route>

        
        <Route path="/make-booking" element={<BookingPage />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
