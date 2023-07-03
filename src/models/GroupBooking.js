export class GroupBooking {
    constructor(firstName, lastName, email, phone, addressOne, addressTwo, city, state, zipCode, country, groupType, date, startTime, numGuests, mainContact, creditCard, allGuests, termsConditions, informGroup, additionalInfo){
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
        this.groupType = groupType;
        this.date = date;
        this.startTime = startTime;
        this.numGuests = numGuests;
        this.mainContact = mainContact;
        this.creditCard = creditCard;
        this.allGuests = allGuests;
        this.termsConditions = termsConditions;
        this.informGroup = informGroup;
        this.additionalInfo = additionalInfo;
    }
}
