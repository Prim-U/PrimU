import { updateDoc, doc, setDoc, collection, getDocs, query, deleteDoc, getDoc } from "@firebase/firestore";

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
    const user = auth.currentUser;
    const collectionRef = collection(db, this.collection);
    const querySnapshot = getDoc(query(collectionRef));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(User.fromFirebase(doc))
    })

    return users;
  }

  // Profiles

  // Add profile
  async addProfile(profile) {
    const currentUser = auth.currentUser;
    const docRef = doc(collection(db, this.collection, currentUser.uid, currentUser.displayName + "'s Profiles"));
    profile.id = docRef.id;
    await setDoc(docRef, profile.fromJson())
  }

  // Fetch Profile
  async fetchProfile() {
    const name = auth.currentUser.displayName;
    const docId = auth.currentUser.uid;
    const collectionRef = collection(db, this.collection, docId, name + "'s Profiles");
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
    const currentUser = auth.currentUser;
    const docRef = doc(collection(db, this.collection, currentUser.uid, currentUser.displayName +  "'s Address"))    
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    address.id = docRef.id
    await setDoc(docRef, address.intoJson())

  }

  // Fetch address information
  async fetchAddress() {
    const name = auth.currentUser.displayName;
    const docId = auth.currentUser.uid;
    const collectionRef = collection(db, this.collection, docId, name + "'s Address");
    const querySnapshot = await getDocs(query(collectionRef));

    const addresses = [];

    querySnapshot.forEach((doc) => {
      addresses.push(Address.fromFirebase(doc));
    });

    return addresses;
  }

  // Delete address
  async deleteAddress(addressId) {
    const name = auth.currentUser.displayName;
    const docId = auth.currentUser.uid;
    const docRef = doc(db, this.collection, docId, name + "'s Address", addressId);
    await deleteDoc(docRef);
  }


  // Payment methods

  // Add payment
  async addPayment(payment) {
    const currentUser = auth.currentUser;
    const docRef = doc(collection(db, this.collection, currentUser.uid, currentUser.displayName +  "'s Payment Methods"))    
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    await setDoc(docRef, payment.forJson())
  }

  // Fetch payment
  async fetchPayment() {
    const name = auth.currentUser.displayName;
    const docId = auth.currentUser.uid;
    const collectionRef = collection(db, this.collection, docId, name + "'s Payment Methods");
    const querySnapshot = await getDocs(query(collectionRef));

    const payments = [];

    querySnapshot.forEach((doc) => {
      payments.push(Payment.fromFirebase(doc));
    });

    return payments;
  }
}

const service = new UserService();
export default service;
