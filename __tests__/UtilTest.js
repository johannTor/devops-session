import checkIfEven from '../util/helperFunctions';

// Test to check if the checkIfEven function is working properly
test("Check if number is even", () => {
  expect(checkIfEven(2)).toEqual(true);
});