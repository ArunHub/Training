// function Person(socialId, name, address, city, phone) {
//     //Public Members
//     this.socialId = socialId;
//     this.contactName = name;
//     this.address = address;
//     this.city = city;
//     this.phone = phone;

//     this.getPersonInformation = function () {
//         return "Contact Name is " + this.contactName + " who lives in city " + this.city;
//     }
//     //Private Members
// }
function Person(socialId, name, address, city, phone) {
    //Public Members
    Object.defineProperty(this, "socialId", {
        get: function () {
            return _socialId;
        },
        set: function (value) {
            _socialId = value;
        }
    });
    Object.defineProperty(this, "contactName", {
        get: function () {
            return _name;
        },
        set: function (value) {
            _name = value;
        }
    });
    Object.defineProperty(this, "address", {
        get: function () {
            return _address;
        },
        set: function (value) {
            _address = value;
        }
    });
    Object.defineProperty(this, "city", {
        get: function () {
            console.log("city GET executed!");
            return _city;
        },
        set: function (value) {
            console.log("city SET executed!");
            _city = value;
        }
    });
    Object.defineProperty(this, "phone", {
        get: function () {
            return _phone;
        },
        set: function (value) {
            _phone = value;
        }
    });
    this.getPersonInformation = function () {
        return "Contact Name is " + this.contactName + " who lives in city " + this.city;
    }
    //Private Members
    var _socialId = socialId,
        _name = name,
        _address = address,
        _city = city,
        _phone = phone;
}

Person.prototype.changeAddress = function (socialId, newAddress) {
    //Logic - Check the social Id and if matches change the address
    return 'Address has been changed!';
}

Person.counter = 1;
Person.incrementCounter=function(){
    return Person.counter++;
}
Person.prototype.showCounter=function(){
    console.log("Current Counter Number is - " + Person.incrementCounter());
}
var person = new Person(2342342233, "Pravinkumar R. D.", "Suncity, A8/404", "Pune", "9090909090");
person.city = "Mumbai";
console.log(person.getPersonInformation());
console.log(person.changeAddress(person.socialId, "MoonCity, A7/909"));

person.showCounter();
person.showCounter();
person.showCounter();
var person2 = new Person();
person2.showCounter();