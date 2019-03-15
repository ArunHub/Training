abstract class Person {
    constructor(
        private _socialId?: number,
        private _contactName?: string,
        private _address?: string,
        private _city?: string,
        private _phone?: string
    ) {

    }

    
    public get socialId() : number {
        return this._socialId;
    }

    
    public set socialId(v : number) {
        this._socialId = v;
    }

    
    public set contactName(v : string) {
        this._contactName = v;
    }
    
    
    public get contactName() : string {
        return this._contactName;       
    }
    
    
    public set address(v : string) {
        this._address = v;
    }

    
    public get address() {
       return this._address;
    }
    
    public set city(v : string) {
        this._city = v;
    }

    
    public get city() {
       return this._city;
    }

    public set phone(v : string) {
        this._phone = v;
    }

    
    public get phone() {
       return this._phone;
    }   

    getPersonInformation(): string{
        return `Contact Name is ${this._contactName} - lives in city: ${this.city}`;
    }

    abstract changeAddress(socialId: number, newAddress: string): boolean;
}

// let person: Person = new Person();


class SyneCustomer extends Person {
    constructor(){
        super();
    }
    changeAddress(socialId: number, newAddress: string): boolean {
        //check social  id and change the address
        return true;
    }
}

let customer: SyneCustomer = new SyneCustomer();
customer.socialId=1234568;
customer.contactName = "arun";
customer.address = "shenoy road, nungambakkam";
customer.city = "chennai";
customer.phone = "+91 23489438";
let getcustomerInfo = customer.getPersonInformation();
console.log(getcustomerInfo);