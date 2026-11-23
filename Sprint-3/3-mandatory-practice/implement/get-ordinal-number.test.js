const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});

test("should handle numbers from 11 to 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

test("should handle larger ordinal numbers", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(24)).toEqual("24th");
});

test("should handle ordinal numbers greater than 100", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(102)).toEqual("102nd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
  expect(getOrdinalNumber(104)).toEqual("104th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
  expect(getOrdinalNumber(121)).toEqual("121st");
});
