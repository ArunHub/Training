const PRODUCTS_LIST: any[] = [
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

function getProducts(stock: number): string[];
function getProducts(companyname: string): string[];

function getProducts(propertyname: any): string[] {
    const allproducts: any[] = PRODUCTS_LIST;
    const availableprods: string[] = [];
    if (typeof propertyname == 'string') {
        for (const product of allproducts) {
            if (product.companyname == propertyname) {
                availableprods.push(product.companyname);
            }
        }
    } else {
        for (const product of allproducts) {
            if (product.stock >= propertyname) {
                availableprods.push(product.name);
            }
        }
    }
    return availableprods;
};

console.log(getProducts('chai'));
console.log(getProducts(66));
