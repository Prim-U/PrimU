export class Address {
    constructor(shipname, country, street, apt, city, state, zipcode, phone, id) {
      this.street = street;
      this.shipname = shipname;
      this.apt = apt;
      this.country = country;
      this.city = city;
      this.state = state;
      this.zipcode = zipcode;
      this.phone = phone
      this.id = id
    }
  
    intoJson() {
      return {
          street: this.street,
          shipname: this.shipname,
          apt: this.apt,
          country: this.country,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode,
          phone: this.phone,
          // id: this.id
      }
    }

    static fromFirebase(doc) {
      const data = doc.data();
      return new Address(data.shipname, data.country, data.street, data.apt, data.city, data.state, data.zipcode, data.phone, doc.id)
    }
  }
  