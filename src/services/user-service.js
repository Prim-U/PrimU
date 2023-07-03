import {
  updateDoc,
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  deleteDoc,
  getDoc,
  addDoc
} from "@firebase/firestore";

import { db, auth } from "../firebase/firebase";

import { Address } from "../models/AddressModel";

import { Payment } from "../models/Payment";

import { User } from "../models/Users";

import { Profile } from "../models/Profile";

import { Product } from "../models/Product";
import { Primlancer } from "../models/Primlancer";

class UserService {
  constructor() {
    this.collection = "users";
    this.productColleciton = "products";
    this.orderCollection = "orders";
  }

  // Users, registration, login, contact info
  async addUser(user) {
    await setDoc(doc(db, this.collection, user.userId), user.toJson());
  }

  async updateUser(user) {
    const docRef = doc(db, this.collection, user.uid);
    await updateDoc(docRef, {
      email: user.email,
      name: user.displayName,
    });
  }

  async fetchUser() {
    const collectionRef = collection(db, this.collection);
    const querySnapshot = getDoc(query(collectionRef));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(User.fromFirebase(doc));
    });

    return users;
  }

  // Profiles

  // Add profile
  async addProfile(profile) {
    const currentUser = auth.currentUser;
    const docRef = doc(
      collection(
        db,
        this.collection,
        currentUser.uid,
        currentUser.displayName + "'s Profiles"
      )
    );
    profile.id = docRef.id;
    await setDoc(docRef, profile.profileToJson());
  }

  // Fetch Profile
  async fetchProfile() {
    const name = auth.currentUser.displayName;
    const docId = auth.currentUser.uid;
    const collectionRef = collection(
      db,
      this.collection,
      docId,
      name + "'s Profiles"
    );
    const querySnapshot = await getDocs(query(collectionRef));

    const profiles = [];

    querySnapshot.forEach((doc) => {
      profiles.push(Profile.fromFirebase(doc));
    });

    return profiles;
  }

  // Addresses

  // Add address information
  async addAddress(address) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      collection(db, this.collection, docId, "Addresses")
    );
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    address.id = docRef.id;
    await setDoc(docRef, address.addressToJson());
  }

  // Fetch address information
  async fetchAddress() {
    const docId = auth.currentUser.uid;
    const collectionRef = collection(
      db,
      this.collection,
      docId,
      "Addresses"
    );
    const querySnapshot = await getDocs(query(collectionRef));

    const addresses = [];

    querySnapshot.forEach((doc) => {
      addresses.push(Address.fromFirebase(doc));
    });

    return addresses;
  }

  // Delete address
  async deleteAddress(addressId) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      db,
      this.collection,
      docId,
      "Addresses",
      addressId
    );
    await deleteDoc(docRef);
  }

  // Update address
  async updateAddress(address) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      db,
      this.collection,
      docId,
      "Addresses",
      address.id
    );
    await setDoc(docRef, address.addressToJson());
  }

  // Payment methods

  // Add payment
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

  // Fetch payment
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

  // Delete payment
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

  // Update payment
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

  // Sellers

  async addSeller(seller) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      collection(db, this.collection, docId, "Seller Accounts")
    );
    seller.id = docRef.id;
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    await setDoc(docRef, seller.sellerToJson());
  }



  // Primlancers
  async addPrimlancer(primlancer) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      collection(db, this.collection, docId, "Primlancer Accounts")
    );
    primlancer.id = docRef.id;
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    await setDoc(docRef, primlancer.primlancerToJson());
  }

  // Fetch Primlancers 
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

  // Create Products
  async addProduct(product) {
    const docId = auth.currentUser.uid;
    const docRef = doc( collection(db, this.collection, docId, "Products"))
    product.id = docRef.id
    await setDoc(docRef, product.productToJson())
  }

  async addProductsPublic(product) {
    const collectionRef = collection(db, this.productColleciton);
    await addDoc(collectionRef, product.publicProductToJson());
  }

  // Fetch Products
  async fetchProducts() {
    const collectionRef = collection(
      db,
      this.productColleciton
    );
    const querySnapshot = await getDocs(query(collectionRef));

    const products = [];

    querySnapshot.forEach((doc) => {
      products.push(Product.fromFirebase(doc));
    });

    return products;
  }

  // Delete Products
  async deleteProducts() {
    
  }

  // Add Orders
  async addOrder(order) {
    const collectionRef = collection(db, this.orderCollection);
    // const products = order.products.map((obj) => {return Object.assign({}, obj)})
    const docRef = await addDoc(collectionRef, order.pendingOrderToJson(order));

    order.id = docRef.id;
    console.log(order.id)
  }
}

const service = new UserService();
export default service;
