export class ProductData {
  constructor(productName, price, qty, subtotal, image, id) {
    this.productName = productName;
    this.price = price;
    this.qty = qty;
    this.subtotal = subtotal;
    this.image = image;
    this.id = id;
  }

  productQuantityToJson() {
    return {
      product: this.productName,
      price: this.price,
      qty: this.qty,
      image: this.image,
      subtotal: this.subtotal
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new ProductData(
      data.product,
      data.price,
      data.qty,
      data.subtotal,
      data.image,
      data.id
    );
  }
}
