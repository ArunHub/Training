describe("EqualityTest", function() {
  it("should check values", function() {
    var a = "Hello"; // type and value equal
    var b = "Hello";
    expect(a).toBe(b); // a===b
  });

  it("should check values boolean", function() {
    var a = true; // type and value equal
    var b = true;
    expect(a).toBe(b); // a===b
  });

  it("should check arrays", function() {
    var a = [10, 20]; // type and value equal
    var b = [10, 20];
    expect(a).toEqual(b);
    //expect(a).toBe(b); // a===b
  });
});
