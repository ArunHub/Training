interface CommonRepository<T>{
    getAll(): Array<T>;
    getSingle(id: number): T;
    addNew(t: T):void;
    update(id: number, t: T): void;
    delete(id: number): void;
}

class GenericCrudRepository<T> implements CommonRepository<T> {
    private _items: Array<T> = new Array<T>();
    getAll(): T[] {
        return this._items;
    }    
    getSingle(id: number): T {
        return this._items[0]
    }
    addNew(t: T): void {
        this._items.push(t);
    }
    update(id: number, t: T): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
}

class SyneEmployee {
    constructor(public employeeId: number, public contactName: string, public city: string) {
        
    }

}

class SyneCustomer1 {
    constructor(public custId: number, public contactName: string, public city: string) {
        
    }
}

// let custRepo: CommonRepository<SyneCustomer1> = new GenericCrudRepository<SyneCustomer1>();
// let c1:SyneCustomer1 = new SyneCustomer1(1000, 'arun', 'madras');
// let c2:SyneCustomer1 = new SyneCustomer1(2000,'sivakesavalu', 'andra');

// custRepo.addNew(c1);
// custRepo.addNew(c2);

let empRepo: CommonRepository<SyneEmployee> = new GenericCrudRepository<SyneEmployee>();
let e1:SyneEmployee = new SyneEmployee(1000, 'arun', 'madras');
let e2:SyneEmployee = new SyneEmployee(2000,'sivakesavalu', 'andra');

empRepo.addNew(e1);
empRepo.addNew(e2);

for (const customer of empRepo.getAll()) {
    console.log(`
    customer id: ${customer.employeeId}
    customer name: ${customer.contactName}
    customer city: ${customer.city}
    `);    
}

console.log(empRepo.getSingle(1000));
