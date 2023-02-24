const Manager = require("../lib/Manager");

  test("getRole() returns Manager option", () => {
    const testRole = "Manager";
    const newRole = new Manager("Test", 505, "example@test.com", testRole);
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getOfficeNumber()", () => {
    const testOfficeNum = 147;
    const newOfficeNum = new Manager("Test", 505, "example@test.com", testOfficeNum);
    expect(newOfficeNum.getOfficeNumber()).toBe(testOfficeNum);
  });