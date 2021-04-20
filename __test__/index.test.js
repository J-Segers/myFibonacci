const myfibonacci = require("../index").myFibonacci;

test("checks if first index contains 0", () => {
    // Arrange
    const num = 1000;

    // Act
    const fibonacci  = myfibonacci(num);

    // Assert
    expect(fibonacci[0]).toBe(0);
})

test("checks if last index contains 987", () => {
    // Arrange
    const num = 1000;

    // Act
    const fibonacci  = myfibonacci(num);

    // Assert
    expect(fibonacci[fibonacci.length-1]).toBe(987);
})

test("checks if entire array is correct", () => {
    // Arrange
    const num = 1000;

    // Act
    const fibonacci  = myfibonacci(num);

    // Assert
    expect(fibonacci).toEqual([0,   1,   1,  2,  3,   5,   8, 13,  21,  34, 55, 89, 144, 233, 377, 610, 987]);
})