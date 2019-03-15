var PRODUCTS_LIST = [
    {
        id: 312456,
        name: 'chai',
        companyname: 'taj',
        stock: 780
    }, {
        id: 4567,
        name: 'apple next',
        companyname: 'apple',
        stock: 123
    }, {
        id: 789,
        name: 'samsung j8',
        companyname: 'samsung',
        stock: 789
    }
];
function getProducts(propertyname) {
    var allproducts = PRODUCTS_LIST;
    var availableprods = [];
    if (typeof propertyname == 'string') {
        for (var _i = 0, allproducts_1 = allproducts; _i < allproducts_1.length; _i++) {
            var product = allproducts_1[_i];
            if (product.companyname == propertyname) {
                availableprods.push(product.companyname);
            }
        }
    }
    else {
        for (var _a = 0, allproducts_2 = allproducts; _a < allproducts_2.length; _a++) {
            var product = allproducts_2[_a];
            if (product.stock >= propertyname) {
                availableprods.push(product.name);
            }
        }
    }
    return availableprods;
}
;
console.log(getProducts('chai'));
console.log(getProducts(66));
//# sourceMappingURL=function-overloading.js.map