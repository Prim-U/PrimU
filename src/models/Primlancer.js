export class Primlancer {
  constructor(
    email,
    firstname,
    lastname,
    phone,
    dob,
    country,
    street,
    apt,
    city,
    state,
    zipcode,
    education,
    employment,
    reference,
    // referenceUrl,
    qualifications,
    // qualificationsUrl,
    availibility,
    id
  ) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
    this.street = street;
    this.apt = apt;
    this.country = country;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.phone = phone;
    this.education = education;
    this.employment = employment;
    this.reference = reference;
    // this.referenceUrl = referenceUrl;
    this.qualifications = qualifications;
    // this.qualificationsUrl = qualificationsUrl;
    this.availibility = availibility;
    this.id = id;
  }

  primlancerToJson() {
    return {
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      dob: this.dob,
      street: this.street,
      apt: this.apt,
      country: this.country,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      phone: this.phone,
      education: this.education,
      employment: this.employment,
      reference: this.reference,
    //   referenceUrl: this.referenceUrl,
      qualifications: this.qualifications,
    //   qualificationsUrl: this.qualificationsUrl,
      availibility: this.availibility,
      // id: this.id
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new Primlancer(
      data.email,
      data.firstname,
      data.lastname,
      data.dob,
      data.country,
      data.street,
      data.apt,
      data.city,
      data.state,
      data.zipcode,
      data.phone,
      data.education,
      data.employment,
      data.reference,
    //   data.referenceUrl,
      data.qualifications,
    //   data.qualificationsUrl,
      data.availibility,
      doc.id
    );
  }
}
