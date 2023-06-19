export class Address {
    constructor(shipname, country, street, apt, city, state, zipcode, phone) {
      this.street = street;
      this.shipname = shipname;
      this.apt = apt;
      this.country = country;
      this.city = city;
      this.state = state;
      this.zipcode = zipcode;
      this.phone = phone
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
          phone: this.phone
      }
    }
  }
  