// Push to main

// Dependencies
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";

// Compenents
import HomePage from "./components/HomePage";
import Register from "./components/auth/Register";
import TopBar from "./common/TopBar";
import Login from "./components/auth/Login";
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
import RequireAuth from "./common/RequireAuth";
import Spinner from "./common/Spinner";
import ProfilePage from "./components/profile/ProfilePage";
import AddProfile from "./components/profile/AddProfile";

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  // const [addresses, setAddresses] = useState([]);

  /*  function createAddress(address) {
    setAddresses([...addresses, address]);
  } */

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <TopBar user={user}></TopBar>
      {isUserUpdated ? (
        <Routes>
          <Route path="/" element={<HomePage user={user} />}></Route>

          <Route path="/register" element={<Register user={user} />}></Route>
          <Route path="/login" element={<Login user={user} />}></Route>
          <Route
            path="/login/reset-password"
            element={<ResetPassword />}
          ></Route>

          <Route
            path="/account"
            element={
              <RequireAuth user={user}>
                <Account user={user} />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/account/contact-info"
            element={
              <RequireAuth user={user}>
                <Contact user={user} />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/account/addresses"
            element={
              <RequireAuth user={user}>
                <Addresses /* addresses={addresses} */ />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="account/addresses/address-default"
            element={
              <RequireAuth user={user}>
                <AddAddress /* createAddress={createAddress} */ />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/account/payment"
            element={
              <RequireAuth user={user}>
                <PaymentPage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/account/payment/payment-details"
            element={
              <RequireAuth user={user}>
                <AddPayment />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/account/profile"
            element={
              <RequireAuth user={user}>
                <ProfilePage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/account/profile/add-profile"
            element={
              <RequireAuth user={user}>
                <AddProfile />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/make-booking"
            element={
              // <RequireAuth user={user}>
                <BookingPage />
              // </RequireAuth>
            }
          ></Route>
        </Routes>
      ) : (
        <div className="mt-5 text-center">
          <Spinner />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
