const Manager = require("../lib/Manager");

// tests for Manager-able to set and get constructor arguments & Role
  test("Office number is set", () => {
    const testOfficeNum = "167";
    const newOfficeNum = new Manager(testOfficeNum);
    expect(newOfficeNum.email).toBe(testOfficeNum);
  });

  test("getRole() returns Manager option", () => {
    const testRole = "Manager";
    const newRole = new Manager("Test", 001, "example@test.com", 167);
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getOfficeNumber()", () => {
    const testOfficeNum = "167";
    const newOfficeNum = new Manager(testOfficeNum);
    expect(newOfficeNum.getOfficeNumber()).toBe(testOfficeNum);
  });