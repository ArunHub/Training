function addition(num1, num2, num3) {
    if (!num3) {
        num3 = 0;
    }
    return num1 + num2 + num3;
}

console.log("Addition of Two Numbers is " + addition(100, 200));
console.log("Addition of Three Numbers is " + addition(100, 200, 300));