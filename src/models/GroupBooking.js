export class GroupBooking {
  constructor(
    firstName,
    lastName,
    email,
    phone,
    addressOne,
    addressTwo,
    city,
    state,
    zipCode,
    country,
    company,
    groupType,
    date,
    startTime,
    numGuests,
    mainContact,
    creditCard,
    allGuests,
    additionalInfo,
    termsConditions,
    informGroup,
    uid,
    id
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.addressOne = addressOne;
    this.addressTwo = addressTwo;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.country = country;
    this.company = company;
    this.groupType = groupType;
    this.date = date;
    this.startTime = startTime;
    this.numGuests = numGuests;
    this.mainContact = mainContact;
    this.creditCard = creditCard;
    this.allGuests = allGuests;
    this.additionalInfo = additionalInfo;
    this.termsConditions = termsConditions;
    this.informGroup = informGroup;
    this.uid = uid;
    this.id = id;
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new GroupBooking(
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.addressOne,
      data.addressTwo,
      data.city,
      data.state,
      data.zipCode,
      data.country,
      data.company,
      data.groupType,
      data.date,
      data.startTime,
      data.numGuests,
      data.mainContact,
      data.creditCard,
      data.allGuests,
      data.additionalInfo,
      data.termsConditions,
      data.informGroup,
      data.uid,
      doc.id
    );
  }
}
