var GenericCrudRepository = /** @class */ (function () {
    function GenericCrudRepository() {
        this._items = new Array();
    }
    GenericCrudRepository.prototype.getAll = function () {
        return this._items;
    };
    GenericCrudRepository.prototype.getSingle = function (id) {
        return this._items[0];
    };
    GenericCrudRepository.prototype.addNew = function (t) {
        this._items.push(t);
    };
    GenericCrudRepository.prototype.update = function (id, t) {
        throw new Error("Method not implemented.");
    };
    GenericCrudRepository.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    return GenericCrudRepository;
}());
var SyneEmployee = /** @class */ (function () {
    function SyneEmployee(employeeId, contactName, city) {
        this.employeeId = employeeId;
        this.contactName = contactName;
        this.city = city;
    }
    return SyneEmployee;
}());
var SyneCustomer1 = /** @class */ (function () {
    function SyneCustomer1(custId, contactName, city) {
        this.custId = custId;
        this.contactName = contactName;
        this.city = city;
    }
    return SyneCustomer1;
}());
// let custRepo: CommonRepository<SyneCustomer1> = new GenericCrudRepository<SyneCustomer1>();
// let c1:SyneCustomer1 = new SyneCustomer1(1000, 'arun', 'madras');
// let c2:SyneCustomer1 = new SyneCustomer1(2000,'sivakesavalu', 'andra');
// custRepo.addNew(c1);
// custRepo.addNew(c2);
var empRepo = new GenericCrudRepository();
var e1 = new SyneEmployee(1000, 'arun', 'madras');
var e2 = new SyneEmployee(2000, 'sivakesavalu', 'andra');
empRepo.addNew(e1);
empRepo.addNew(e2);
for (var _i = 0, _a = empRepo.getAll(); _i < _a.length; _i++) {
    var customer_1 = _a[_i];
    console.log("\n    customer id: " + customer_1.employeeId + "\n    customer name: " + customer_1.contactName + "\n    customer city: " + customer_1.city + "\n    ");
}
console.log(empRepo.getSingle(1000));
//# sourceMappingURL=common-respository.js.map