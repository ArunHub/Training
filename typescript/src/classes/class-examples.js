var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(_socialId, _contactName, _address, _city, _phone) {
        this._socialId = _socialId;
        this._contactName = _contactName;
        this._address = _address;
        this._city = _city;
        this._phone = _phone;
    }
    Object.defineProperty(Person.prototype, "socialId", {
        get: function () {
            return this._socialId;
        },
        set: function (v) {
            this._socialId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "contactName", {
        get: function () {
            return this._contactName;
        },
        set: function (v) {
            this._contactName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (v) {
            this._address = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (v) {
            this._city = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (v) {
            this._phone = v;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.getPersonInformation = function () {
        return "Contact Name is " + this._contactName + " - lives in city: " + this.city;
    };
    return Person;
}());
// let person: Person = new Person();
var SyneCustomer = /** @class */ (function (_super) {
    __extends(SyneCustomer, _super);
    function SyneCustomer() {
        return _super.call(this) || this;
    }
    SyneCustomer.prototype.changeAddress = function (socialId, newAddress) {
        //check social  id and change the address
        return true;
    };
    return SyneCustomer;
}(Person));
var customer = new SyneCustomer();
customer.socialId = 1234568;
customer.contactName = "arun";
customer.address = "shenoy road, nungambakkam";
customer.city = "chennai";
customer.phone = "+91 23489438";
var getcustomerInfo = customer.getPersonInformation();
console.log(getcustomerInfo);
//# sourceMappingURL=class-examples.js.map