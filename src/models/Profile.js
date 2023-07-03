export class Profile {
    constructor(name, imageUrl, id) {
      this.name = name;
      this.imageUrl = imageUrl;
      this.id = id;
    }
  
    profileToJson() {
      return {
        name: this.name,
        imageUrl: this.imageUrl
      };
    }
  
    static fromFirebase(doc) {
      const data = doc.data();
      return new Profile(
        data.name,
        data.imageUrl,
        doc.id
      );
    }
  }