export class Product {
    constructor(productName, price, category, status, summary, description, productImageUrl, productLabelUrl, uid, id) {
      this.productName = productName;
      this.price = price;
      this.category = category;
      this.status = status;
      this.summary = summary;
      this.description = description;
      this.productImageUrl = productImageUrl;
      this.productLabelUrl = productLabelUrl;
      this.uid = uid;
      this.id = id;
    }
  
    productToJson() {
      return {
        product: this.productName,
        price: this.price,
        category: this.category,
        status: this.status,
        summary: this.summary,
        description: this.description,
        productImageUrl: this.productImageUrl,
        productLabelUrl: this.productLabelUrl,
      };
    }

    publicProductToJson() {
      return {
        product: this.productName,
        price: this.price,
        category: this.category,
        status: this.status,
        summary: this.summary,
        description: this.description,
        productImageUrl: this.productImageUrl,
        productLabelUrl: this.productLabelUrl,
        uid: this.uid
      };
    }
  
  
    static fromFirebase(doc) {
      const data = doc.data();
      return new Product(
        data.product,
        data.price, 
        data.category,
        data.status,
        data.summary,
        data.description,
        data.productImageUrl,
        data.productLabelUrl,
        data.uid,
        doc.id
      );
    }
  }