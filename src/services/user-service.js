import {
  updateDoc,
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  deleteDoc,
  getDoc,
} from "@firebase/firestore";

import { db, auth } from "../firebase/firebase";

import { Address } from "../models/AddressModel";

import { Payment } from "../models/Payment";

import { User } from "../models/Users";

import { Profile } from "../models/Profile";

class UserService {
  constructor() {
    this.collection = "users";
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
    await setDoc(docRef, profile.fromJson());
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
      collection(db, this.collection, docId, "Addresses, " + docId)
    );
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    address.id = docRef.id;
    await setDoc(docRef, address.intoJson());
  }

  // Fetch address information
  async fetchAddress() {
    const docId = auth.currentUser.uid;
    const collectionRef = collection(
      db,
      this.collection,
      docId,
      "Addresses, " + docId
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
      "Addresses, " + docId,
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
      "Addresses, " + docId,
      address.id
    );
    await setDoc(docRef, address.intoJson());
  }

  // Payment methods

  // Add payment
  async addPayment(payment) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      collection(db, this.collection, docId, "Payment Methods, " + docId)
    );
    payment.id = docRef.id;
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    await setDoc(docRef, payment.forJson());
  }

  // Fetch payment
  async fetchPayment() {
    const docId = auth.currentUser.uid;
    const collectionRef = collection(
      db,
      this.collection,
      docId,
      "Payment Methods, " + docId
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
      "Payment Methods, " + docId,
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
      "Payment Methods, " + docId,
      payment.id
    );
    await setDoc(docRef, payment.forJson());
  }

  // Sellers
  async addSeller(seller) {
    const docId = auth.currentUser.uid;
    const docRef = doc(
      collection(db, this.collection, docId, "Seller " + docId)
    );
    seller.id = docRef.id;
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    await setDoc(docRef, seller.sellerJson());
  }
}

const service = new UserService();
export default service;
