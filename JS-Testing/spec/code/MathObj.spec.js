describe('mathObj', function () {
    var obj;
    // 1. load library to be tested on node.js
    obj = require('./../../lib/code/MathObj.js');

    // 2. write the test case
    it("should add 2 integer", function () {
        // 2a. arrange
            var m = new obj();
            var x = 10;
            var y = 20;
            var expRes = 30;
        // 2b. act
            var actRes = m.multiply(x, y);
        // 2c. assert
            expect(actRes).toEqual(expRes);
    })
})