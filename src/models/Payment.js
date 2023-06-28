export class Payment {
  constructor(card, date, cvv, id) {
    this.card = card;
    this.date = date;
    this.cvv = cvv;
    this.id = id;
  }

  forJson() {
    return {
      card: this.card,
      date: this.date,
      cvv: this.cvv,
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new Payment(
      data.card,
      data.date,
      data.cvv,
      doc.id
    );
  }
}
