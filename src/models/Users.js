export class User {
  constructor(name, email, userId, isSupplier, isPrimlancer) {
    this.name = name;
    this.email = email;
    this.userId = userId;
    this.isSupplier = isSupplier;
    this.isPrimlancer = isPrimlancer;
  }

  toJson() {
    return {
        name: this.name,
        email: this.email,
        userId: this.userId,
        isSupplier: this.isSupplier,
        isPrimlancer: this.isPrimlancer
    }
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new User(data.email, data.name, data.userId, data.isSupplier, data.isPrimlancer)
  }
}
