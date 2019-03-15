interface Product{
    productId: number;
    productName: string;
    companyName: string;
    availableQty: number;
    isBlacklisted?: boolean;
    getAllProducts?(): Product[];
    checkBlackListedProduct?(productId: number): Product;
}

class SynechronProduct implements Product {
    productId: number;
    productName: string;
    companyName: string;
    availableQty: number;
    
    constructor() {
        
    }
}

let syneProduct1: SynechronProduct = new SynechronProduct();
syneProduct1.productId = 1234;
syneProduct1.productName = "samsung J8";
syneProduct1.companyName = "Samsung Pvt. ltd";
syneProduct1.availableQty = 780;

function getSamsungProducts(product: Product): SynechronProduct{
    return product;
}

let samsungProduct = getSamsungProducts(syneProduct1);
console.log(`
product name is ${samsungProduct.productName}
company name is ${samsungProduct.companyName}
`)