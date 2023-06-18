export class Address {
    constructor(country, street, city, state, zipcode) {
      this.street = street;
      this.country = country;
      this.city = city;
      this.state = state;
      this.zipcode = zipcode
    }
  
    intoJson() {
      return {
          street: this.street,
          country: this.country,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode
      }
    }
  }
  