describe("A fizzbuzz suite", function() {
  it("should return [1] when limit is 1", function() {
    var fizzbuzz = FizzBuzz(1);
    expect(fizzbuzz).toEqual([1]);
  });

  it("should return [1,2] when limit is 2", function() {
    var fizzbuzz = FizzBuzz(2);
    expect(fizzbuzz).toEqual([1, 2]);
  });

  it("should return [1,2,'Fizz'] when limit is 2", function() {
    var fizzbuzz = FizzBuzz(3);
    expect(fizzbuzz).toEqual([1, 2,"Fizz"]);
  });

  it("should return [1,2,'Fizz',4], when limit is 4", function() {
    var fizzbuzz = FizzBuzz(4);
    expect(fizzbuzz).toEqual([1, 2, "Fizz", 4]);
  });

  it("should return [1,2,'Fizz',4,'Buzz'] when limit is 5", function() {
    var fizzbuzz = FizzBuzz(5);
    expect(fizzbuzz).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  });

  it("should return 'FizzBuzz' when limit is 15", function() {
    var fizzbuzz = FizzBuzz(15);
    expect(fizzbuzz[2]).toEqual('Fizz');
    expect(fizzbuzz[4]).toEqual('Buzz');
    expect(fizzbuzz[14]).toEqual('FizzBuzz');
  });
});
