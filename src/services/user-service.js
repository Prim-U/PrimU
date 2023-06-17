import {
  collection,
  addDoc,
  updateDoc,
  getDoc,
  doc,
  query,
  where,
  setDoc,
} from "@firebase/firestore";

import { db, auth } from "../firebase/firebase";

class UserService {
  constructor() {
    this.collection = "users";
  }

  async addUser(user) {
    await setDoc(doc(db, this.collection, user.userId), user.toJson());
  }

  async updateProfile(user) {
    const docRef = doc(db, this.collection, user.uid)
    await updateDoc(docRef, {
        name: user.displayName,
        email: user.email
    })
  }
}

const service = new UserService();
export default service;
