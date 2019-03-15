describe("Spy on the voter", function() {
  beforeEach(function() {
    //--arrange
    criteria = new voteCriteria();
    per = new person();
  });
  it("Use Voter Criteria to check if percon can vote", function() {
    // replace checkAge() function by spy (mock)
    spyOn(criteria, "checkAge");

    //--act
    per.canVote(criteria);
    // function called w/o parameter
    //expect(criteria.checkAge).toHaveBeenCalled();
    // function called with parameter
    // here number of parameters must match
    
    //--assertion
    expect(criteria.checkAge).toHaveBeenCalled();
    expect(criteria.checkAge).toHaveBeenCalledWith(23);
  });

  it(
    ("Create a new spy function using createSpy()",
    function() {
      per.getAge = jasmine.createSpy("getPersonAge() spy");
      per.getAge();
      expect(per.getAge()).toHaveBeenCalled();
    })
  );
});
