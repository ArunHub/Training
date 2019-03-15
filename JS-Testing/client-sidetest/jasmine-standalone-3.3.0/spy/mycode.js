var person = function (params) {
    
}

person.prototype.canVote = function (voter) {
    var res = voter.checkAge(23);
    return "person can vote "+ res;
}

var voteCriteria = function (params) {
    
}

voteCriteria.prototype.checkAge = function (age) {
    if (age>=18) {
        return true;
    }
    return false;
}

var voter = new voteCriteria();
var arun = new person();

console.log(arun.canVote(voter));