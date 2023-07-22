import {
  updateDoc,
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  deleteDoc,
  getDoc,
  addDoc,
} from "@firebase/firestore";

import { db, auth } from "../firebase/firebase";

import { Address } from "../models/AddressModel";

import { Payment } from "../models/Payment";

import { User } from "../models/Users";

import { Product } from "../models/Product";

import { Booking } from "../models/Booking";
import { Primlancer } from "../models/Primlancer";

class UserService {
  constructor() {
    this.collection = "users";
    this.productColleciton = "products";
    this.orderCollection = "orders";
    this.groupBookingCollection = "group bookings";

    this.supplierCollection = "suppliers";
    this.primlancerCollection = "primlancers";

    this.bookingCollection = "bookings";
  }

  // Users, registration, login, contact info

  /*  Adds a user to Firebase; stores user in a collection of Users 
  and then in an individual document */
  async addUser(user) {
    await setDoc(doc(db, this.collection, user.userId), user.toJson());
  }

  // Updates email and/or user name in document in Firbase
  async updateUser(user) {
    const docRef = doc(db, this.collection, user.uid);
    await updateDoc(docRef, {
      email: user.email,
      name: user.displayName,
    });
  }

  // Changes "isSupplier" field from "no" to "yes" in Firbase
  async nowSupplier() {
    const docId = auth.currentUser.uid;
    const docRef = doc(db, this.collection, docId);
    await updateDoc(docRef, {
      isSupplier: "yes",
    });
  }

  // Changes "isPrimlancer" field from "no" to "yes" in Firbase
  async nowPrimlancer() {
    const docId = auth.currentUser.uid;
    const docRef = doc(db, this.collection, docId);
    await updateDoc(docRef, {
      isPrimlancer: "yes",
    });
  }

  // Fetches the current user's information from Firbase
  async fetchUser() {
    const docId = auth.currentUser.uid;
    const docRef = doc(db, this.collection, docId);
    const docFound = await getDoc(docRef);
    const user = User.fromFirebase(docFound);
    return user;
  }

  // Addresses

  /* Add address information to Firebase, to a subcollection 
  in the document for the current user */
  async addAddress(address) {
    const docId = auth.currentUser.uid;
    const docRef = doc(collection(db, this.collection, docId, "Addresses"));
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    address.id = docRef.id;
    await setDoc(docRef, address.addressToJson());
  }

  // Fetches address information from Firebase
  async fetchAddress() {
    const docId = auth.currentUser.uid;
    const collectionRef = collection(db, this.collection, docId, "Addresses");
    const querySnapshot = await getDocs(query(collectionRef));

    const addresses = [];

    querySnapshot.forEach((doc) => {
      addresses.push(Address.fromFirebase(doc));
    });

    return addresses;
  }

  // Delete address document from Firebase
  async deleteAddress(addressId) {
    const docId = auth.currentUser.uid;
    const docRef = doc(db, this.collection, docId, "Addresses", addressId);
    await deleteDoc(docRef);
  }

  // Update address information in Firebase
  async updateAddress(address) {
    const docId = auth.currentUser.uid;
    const docRef = doc(db, this.collection, docId, "Addresses", address.id);
    await setDoc(docRef, address.addressToJson());
  }

  // Payment methods

  /* Add payment information to Firebase, to a subcollection 
  in the document for the current user */
  async addPayment(payment) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      collection(db, this.collection, docId, "Payment Methods")
    );
    payment.id = docRef.id;
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    await setDoc(docRef, payment.paymentToJson());
  }

  // Fetches payment information form Firebase
  async fetchPayment() {
    const docId = auth.currentUser.uid;
    const collectionRef = collection(
      db,
      this.collection,
      docId,
      "Payment Methods"
    );
    const querySnapshot = await getDocs(query(collectionRef));

    const payments = [];

    querySnapshot.forEach((doc) => {
      payments.push(Payment.fromFirebase(doc));
    });

    return payments;
  }

  // Delete payment document from Firebase
  async deletePayment(paymentId) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      db,
      this.collection,
      docId,
      "Payment Methods",
      paymentId
    );
    await deleteDoc(docRef);
  }

  // Updates payment information in Firebase
  async updatePayment(payment) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      db,
      this.collection,
      docId,
      "Payment Methods",
      payment.id
    );
    await setDoc(docRef, payment.paymentToJson());
  }

  // Suppliers

  // Add supplier to Firebase, to a subcollection in current user document
  async addSupplier(supplier) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      collection(db, this.collection, docId, "Supplier Accounts")
    );
    await setDoc(docRef, supplier.supplierToJson());

    /* Add supplier to Firebase, to a Supplier collection;
    if Supplier collection does not exist, Firebase will automatically
    create the Supplier collection once the function addSupplier() is executed*/
    const collectionRef = collection(db, this.supplierCollection);
    const docReference = await addDoc(
      collectionRef,
      supplier.publicSupplierToJson()
    );
    supplier.id = docReference.id;
  }

  // Primlancers
  async addPrimlancer(primlancer) {
    // Add primlancer to Firebase, to a subcollection in current user document
    const docId = auth.currentUser.uid;
    const docRef = doc(
      collection(db, this.collection, docId, "Primlancer Accounts")
    );
    primlancer.id = docRef.id;
    await setDoc(docRef, primlancer.primlancerToJson());

    /* Add supplier to Firebase, to a Primlancer collection;
    if Primlancer collection does not exist, Firebase will automatically
    create the Primlancer collection once the function addPrimlancer() is executed*/
    const collectionRef = collection(db, this.primlancerCollection);
    await addDoc(collectionRef, primlancer.publicPrimlancerToJson());
  }

  // Fetch all Primlancer accounts from the current user from Firebase
  async fetchPrimlancer() {
    const docId = auth.currentUser.uid;
    const collectionRef = collection(
      db,
      this.collection,
      docId,
      "Primlancer Accounts"
    );
    const querySnapshot = await getDocs(query(collectionRef));

    const primlancers = [];

    querySnapshot.forEach((doc) => {
      primlancers.push(Primlancer.fromFirebase(doc));
    });

    return primlancers;
  }

  // Prodcuts

  /* Adds product information to Firebase, 
  to a subcollection in current user document */
  async addProduct(product) {
    const docId = auth.currentUser.uid;
    const docRef = doc(collection(db, this.collection, docId, "Products"));
    product.id = docRef.id;
    await setDoc(docRef, product.productToJson());
  }

  /* Adds product information to Firebase,
  to a collection that stores every product created */
  async addProductsPublic(product) {
    const collectionRef = collection(db, this.productColleciton);
    await addDoc(collectionRef, product.publicProductToJson());
  }

  // Fetches product information from Firebase
  async fetchProducts() {
    const collectionRef = collection(db, this.productColleciton);
    const querySnapshot = await getDocs(query(collectionRef));

    const products = [];

    querySnapshot.forEach((doc) => {
      products.push(Product.fromFirebase(doc));
    });

    return products;
  }

  /* Delete product information from Firebase,
  both from the collection and the document in the subcollection */
  async deleteProducts() {}

  // Add booking information to Firebase, to a collection that stores all bookings
  async addBooking(booking) {
    const docRef = doc(collection(db, this.bookingCollection));
    await setDoc(docRef, booking.BookingToJson());
  }
  // Fetches booking information from Firebase
  async fetchBookings() {
    const collectionRef = collection(db, this.bookingCollection);
    const querySnapshot = await getDocs(query(collectionRef));
    const Bookings = [];
    querySnapshot.forEach((doc) => {
      Bookings.push(Booking.fromFirebase(doc));
    });
    return Bookings;
  }

  // Deletes booking information from Firebase
  async deleteBooking(bookingId) {
    const docRef = doc(db, this.bookingCollection, bookingId);
    await deleteDoc(docRef);
  }

  /*   Adds order information to Firebase, 
  to a collection that stores all orders placed */
  async addOrder(order) {
    const collectionRef = collection(db, this.orderCollection);
    // const products = order.products.map((obj) => {return Object.assign({}, obj)})
    const docRef = await addDoc(collectionRef, order.pendingOrderToJson(order));

    order.id = docRef.id;
    console.log(order.id);
  }

  // Bookings

  /* Adds group booking information to Firebase,
  to a collection that stores all group bookings */
  async addGroupBooking(booking) {
    const collectionRef = collection(db, this.groupBookingCollection);
    const docRef = await addDoc(collectionRef, {
      firstName: booking.firstName,
      lastName: booking.lastName,
      email: booking.email,
      phone: booking.phone,
      addressOne: booking.addressOne,
      addressTwo: booking.addressTwo,
      city: booking.city,
      state: booking.state,
      zipCode: booking.zipCode,
      country: booking.country,
      company: booking.company,
      groupType: booking.groupType,
      date: booking.date,
      startTime: booking.startTime,
      numGuests: booking.numGuests,
      mainContact: booking.mainContact,
      creditCard: booking.creditCard,
      allGuests: booking.allGuests,
      additionalInfo: booking.additionalInfo,
      termsConditions: booking.termsConditions,
      informGroup: booking.informGroup,
      uid: booking.uid,
    });
    booking.id = docRef.id;
    console.log(booking.id);
    return booking;
  }
}

const service = new UserService();
export default service;
