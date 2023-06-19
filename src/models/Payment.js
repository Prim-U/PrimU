export class Payment {
    constructor(card, date, cvv) {
        this.card = card;
        this.date = date;
        this.cvv = cvv

    }

    forJson() {
        return {
            card: this.card,
            date: this.date,
            cvv: this.cvv
        }
    }
}