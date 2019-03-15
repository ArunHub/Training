var SynechronProduct = /** @class */ (function () {
    function SynechronProduct() {
    }
    return SynechronProduct;
}());
var syneProduct1 = new SynechronProduct();
syneProduct1.productId = 1234;
syneProduct1.productName = "samsung J8";
syneProduct1.companyName = "Samsung Pvt. ltd";
syneProduct1.availableQty = 780;
function getSamsungProducts(product) {
    return product;
}
var samsungProduct = getSamsungProducts(syneProduct1);
console.log("\nproduct name is " + samsungProduct.productName + "\ncompany name is " + samsungProduct.companyName + "\n");
//# sourceMappingURL=product-interface.js.map