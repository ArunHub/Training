//const mySubjectNumbers = new Array(45);
const mySubjectNumbers = Array.of(45);
console.log(mySubjectNumbers.length);

const discountAmt = [560, 450, 780, 900];
// let afterDiscount1 = Array.from(discountAmt, amt => amt + 20);
// console.log(afterDiscount1);

// let afterDiscount2 = discountAmt.fill(1000, 0, 3);
// console.log(afterDiscount2);

console.log(discountAmt.find(da => da > 560));