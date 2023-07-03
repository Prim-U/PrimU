export class PendingOrder {
  constructor(
    products,
    total,
    shipname,
    email,
    country,
    street,
    apt,
    city,
    state,
    zipcode,
    phone,
    card,
    date,
    cvv,
    id
  ) {
    this.products = products;
    this.total = total;
    this.street = street;
    this.shipname = shipname;
    this.email = email;
    this.apt = apt;
    this.country = country;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.phone = phone;
    this.card = card;
    this.date = date;
    this.cvv = cvv;
    this.id = id;
  }

  pendingOrderToJson(order) {
    const products = order.products.map((obj) => {return Object.assign({}, obj)})
    return {
      products: products,
      street: this.street,
      shipname: this.shipname,
      email: this.email,
      apt: this.apt,
      country: this.country,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      phone: this.phone,
      card: this.card,
      date: this.date,
      cvv: this.cvv,
      total: "R" + this.total,
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new PendingOrder(
      data.product,
      data.total,
      data.shipname,
      data.email,
      data.country,
      data.street,
      data.apt,
      data.city,
      data.state,
      data.zipcode,
      data.phone,
      data.card,
      data.date,
      data.cvv,
      data.id
    );
  }
}
