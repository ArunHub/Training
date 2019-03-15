var mathObj = function () {
    
}

mathObj.prototype.add = function (x, y) {
    return parseInt(x) + parseInt(y);
};

mathObj.prototype.multiply = function (x, y) {
    return parseInt(x) * parseInt(y);
}

var obj = new mathObj();

module.exports = mathObj;