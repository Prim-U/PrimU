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
import UpdateAddress from "./components/profile/UpdateAddress";
import UpdatePayment from "./components/profile/UpdatePayment";
import SupplierRegistration from "./components/auth/SupplierRegistration";
import SellerPage from "./components/profile/SellerPage";
import PrimlancerRegistration from "./components/auth/PrimlancerRegistration";
import PostProduct from "./components/products/PostProducts";
import ProductsPage from "./components/products/ProductsPage";
import DisplayProduct from "./components/products/DisplayProduct";
import Checkout from "./components/products/Checkout";
import OrderPlaced from "./components/products/OrderPlaced";

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [updatePayment, setUpdatePayment] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [sendOrder, setSendOrder] = useState([]);

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
      <TopBar user={user} order={order}></TopBar>

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
            path="/account/seller"
            element={
              <RequireAuth user={user}>
                <SellerPage user={user} />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/account/seller/supplier-registration"
            element={
              <RequireAuth user={user}>
                <SupplierRegistration user={user} />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/account/seller/primlancer-registration"
            element={
              <RequireAuth user={user}>
                <PrimlancerRegistration user={user} />
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
                <Addresses
                  setAddressList={
                    setAddressList
                  } /* addressList={addressList}  addresses={addresses} */
                />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="account/addresses/add-address"
            element={
              <RequireAuth user={user}>
                <AddAddress />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="account/address/update-address"
            element={
              <RequireAuth user={user}>
                <UpdateAddress addressList={addressList} />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/account/payment"
            element={
              <RequireAuth user={user}>
                <PaymentPage
                  setUpdatePayment={setUpdatePayment}
                  updatePayment={updatePayment}
                />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/account/payment/add-payment"
            element={
              <RequireAuth user={user}>
                <AddPayment />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/account/payment/update-payment"
            element={
              <RequireAuth user={user}>
                <UpdatePayment updatePayment={updatePayment} />
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
            path="/products"
            element={
              <RequireAuth user={user}>
                <ProductsPage
                  setDisplayProduct={setDisplayProduct}
                  displayProduct={displayProduct}
                  sendOrder={sendOrder}
                />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/products/post-prodcuts"
            element={
              <RequireAuth user={user}>
                <PostProduct />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/products/display-product"
            element={
              <RequireAuth user={user}>
                <DisplayProduct displayProduct={displayProduct} setOrder={setOrder} order={order}/>
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/cart"
            element={
              <RequireAuth user={user}>
                <Checkout order={order} setOrder={setOrder}/>
              </RequireAuth>
            }
          ></Route>
          
          <Route
            path="/place-order"
            element={
              <RequireAuth user={user}>
                <OrderPlaced order={order} sendOrder={sendOrder} setSendOrder={setSendOrder}/>
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
