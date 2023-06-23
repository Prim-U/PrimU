export class User {
  constructor(name, email, userId) {
    this.name = name;
    this.email = email;
    this.userId = userId;
  }

  toJson() {
    return {
        name: this.name,
        email: this.email,
        userId: this.userId
    }
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new User(data.email, data.name, data.userId)
  }
}
