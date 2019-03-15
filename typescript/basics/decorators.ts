// decorators are pure functions

function AddressDecorator<T extends {new (...args: any[]):{}}>(constructor:T){
    return class extends constructor{
        address: string = "Hinjewadi, PH-III, Pune-410281"
    }
}

@AddressDecorator
class SynePerson {
    constructor(fname:string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }

    firstName: string;
    lastName: string;
}

console.log(new SynePerson('pravin','kumar'));
console.log(new SynePerson('alisha','butt'));
