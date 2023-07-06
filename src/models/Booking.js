export class Booking{
    constructor(
        email,
        firstName,
        lastName,
        phone,
        address,
        country,
        city,
        desiredService,
        date,
        startTime,
        id
    ){
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.address=address;
        this.country=country;
        this.city=city;
        this.desiredService=desiredService;
        this.date=date;
        this.startTime=startTime;
        this.id=id;

    }
    BookingToJson(){
        return{
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            address: this.address,
            country: this.country,
            city: this.city,
            desiredService: this.desiredService,
            date: this.date,
            startTime: this.startTime,
        };
    }
    static fromFirebase(doc) {
        const data = doc.data();
        return new Booking(
            data.email,
            data.firstName,
            data.lastName,
            data.phone,
            data.address,
            data.country,
            data.city,
            data.desiredService,
            data.date,
            data.startTime,
            doc.id
        );
    }
}