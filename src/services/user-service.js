import { updateDoc, doc, setDoc, getDoc, collection } from "@firebase/firestore";

import { db, auth } from "../firebase/firebase";

class UserService {
  constructor() {
    this.collection = "users";
  }

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

  async addAddress(address) {
    const currentUser = auth.currentUser;
    const docRef = doc(collection(db, this.collection, currentUser.uid, currentUser.displayName +  "'s Address"))    
    //const docu = await getDoc(docRef);
    //const data = docu.data();
    await setDoc(docRef, address.intoJson())
  }
}

const service = new UserService();
export default service;
