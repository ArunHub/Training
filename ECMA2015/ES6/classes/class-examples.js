class Person {
    constructor(socialId, name, city, phone) {
        this._socialId = socialId;
        this._contactName = name;
        this._address = "";
        this._city = city;
        this._phone = phone;
    }
    static incrementCounter() {
        return Person.counter++;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get socialId() {
        return this._socialId;
    }
    set socialId(value) {
        this._socialId = value;
    }
    get contactName() {
        console.log("Get of contact name");
        return this._contactName;
    }
    set contactName(value) {
        console.log("Set of contact name");
        this._contactName = value;
    }
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    getPersonInformation() {
        return `Person Name is ${this.contactName} who lives in city ${this.city}`;
    }
}
Person.counter = 1;
Person.prototype.changeAddress = function (socialId, newAddress) {
    //Logic - Check the social Id and if matches change the address
    console.log(this.getPersonInformation());
    return 'Address has been changed!';
}



//IS-A relationship
class Customer extends Person {
    constructor() {
        super();
        this.customerId = 0;
    }
}

let person = new Customer();
person.socialId = 27342937;
person.contactName = "Manish S.";
person.address = "Suncity, A8/404";
person.city = "Pune";
person.phone = "+91 23893289";
person.customerId = 893;
console.log(person.getPersonInformation());
console.log(person.changeAddress(person.socialId, "GreenCity, A8/404"));
console.log(Person.incrementCounter());
console.log(Person.incrementCounter());
console.log(Person.incrementCounter());
console.log(typeof Person);
