// Dependencies
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";

// Compenents

// HomePage
import HomePage from "./components/HomePage";

// Common
import Spinner from "./common/Spinner";
import TopBar from "./common/TopBar";
import Navbar from "./common/Navbar";

// Auth
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ResetPassword from "./components/auth/ResetPassword";
import RequireAuth from "./common/RequireAuth";

// Account Management
import Account from "./components/profile/Account";
import Contact from "./components/profile/Contact";
import Addresses from "./components/profile/Addresses";
import AddAddress from "./components/profile/AddAddress";
import UpdateAddress from "./components/profile/UpdateAddress";
import PaymentPage from "./components/profile/PaymentPage";
import AddPayment from "./components/profile/AddPayment";
import UpdatePayment from "./components/profile/UpdatePayment";

// Suppliers/Primlancers
import SellerPage from "./components/profile/SellerPage";
import SupplierRegistration from "./components/auth/SupplierRegistration";
import PrimlancerRegistration from "./components/auth/PrimlancerRegistration";

// Product Management/Order
import PostProduct from "./components/products/PostProducts";
import ProductsPage from "./components/products/ProductsPage";
import DisplayProduct from "./components/products/DisplayProduct";
import Checkout from "./components/products/Checkout";
import PlaceOrderPage from "./components/products/PlaceOrderPage";

// Bookings
import TreatmentServices from "./components/profile/TreatmentServices";
import BookingRegistration from "./components/auth/BookingRegistration";
import BookingPage from "./components/booking/BookingPage";
import GroupBookingForm from "./components/homepageCards/GroupBookingForm";

// Import functions/methods
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  // An array for the address that the user wants to update
  const [updateAddress, setUpdateAddress] = useState([]);

  // An array for the payment that the user wants to update
  const [updatePayment, setUpdatePayment] = useState([]);

  // An array for the product being displayed on DisplayProduct
  const [displayProduct, setDisplayProduct] = useState([]);

  // An array for the items that the user wants to purchase
  const [order, setOrder] = useState([]);

  // An array for the order being placed by the user
  const [sendOrder, setSendOrder] = useState([]);

  // 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <TopBar user={user} order={order}></TopBar>
      <Navbar></Navbar>

      {isUserUpdated ? (
        <Routes>
          <Route
            path="/"
            element={<HomePage user={user} setUser={setUser} />}
          ></Route>

          <Route
            path="/register"
            element={<Register setUser={setUser} user={user} />}
          ></Route>
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
            path="/booking/become-seller"
            element={
              <RequireAuth user={user}>
                <SellerPage user={user} />
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
                  setUpdateAddress={setUpdateAddress}
                  updateAddress={updateAddress}
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
                <UpdateAddress updateAddress={updateAddress} />
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
            path="/products/post-products"
            element={
              <RequireAuth user={user}>
                <PostProduct></PostProduct>
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/products/display-product"
            element={
              <RequireAuth user={user}>
                <DisplayProduct
                  displayProduct={displayProduct}
                  setOrder={setOrder}
                  order={order}
                />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/cart"
            element={
              <RequireAuth user={user}>
                <Checkout order={order} setOrder={setOrder} />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/place-order"
            element={
              <RequireAuth user={user}>
                <PlaceOrderPage
                  order={order}
                  sendOrder={sendOrder}
                  setSendOrder={setSendOrder}
                  setOrder={setOrder}
                />
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
          <Route
            path="/make-booking/group-booking"
            element={
              // <RequireAuth user={user}>
              <GroupBookingForm />
              // </RequireAuth>
            }
          ></Route>
          <Route
            path="/treatment-services"
            element={
              <RequireAuth user={user}>
                <TreatmentServices />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/account/treatment-services/booking"
            element={
              <RequireAuth user={user}>
                <BookingRegistration />
              </RequireAuth>
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
