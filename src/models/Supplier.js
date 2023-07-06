import { auth } from "../firebase/firebase";

export class Supplier {
  constructor(
    role,
    email,
    firstname,
    lastname,
    storename,
    country,
    street,
    apt,
    city,
    state,
    zipcode,
    phone,
    inspection,
    certificate,
    id
  ) {
    this.role = role;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.storename = storename;
    this.street = street;
    this.apt = apt;
    this.country = country;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.phone = phone;
    this.inspection = inspection;
    this.certificate = certificate;
    this.id = id;
  }

  supplierToJson() {
    return {
      role: this.role,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      storename: this.storename,
      street: this.street,
      apt: this.apt,
      country: this.country,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      phone: this.phone,
      inspection: this.inspection,
      certificate: this.certificate,
      // id: this.id
    };
  }

  publicSupplierToJson() {
    return {
      role: this.role,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      storename: this.storename,
      street: this.street,
      apt: this.apt,
      country: this.country,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      phone: this.phone,
      inspection: this.inspection,
      certificate: this.certificate,
      uid: auth.currentUser.uid
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new Supplier(
      data.role,
      data.email,
      data.firstname,
      data.lastname,
      data.storename,
      data.country,
      data.street,
      data.apt,
      data.city,
      data.state,
      data.zipcode,
      data.phone,
      data.inspection,
      data.certificate,
      doc.id
    );
  }
}
