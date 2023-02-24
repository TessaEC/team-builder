const Employee = require("../lib/Employee");

  test("getRole() returns Employee option", () => {
    const testRole = "Employee";
    const newRole = new Employee(testRole);
    expect(newRole.getRole()).toBe(testRole);
  });
// Able to get the input info from constructor method
  test("Can use getName()", () => {
    const testName = "Betty";
    const newName = new Employee(testName);
    expect(newName.getName()).toBe(testName);
  });

  test("Can use getId()", () => {
    const testID = 85;
    const newID = new Employee("test", testID);
    expect(newID.getId()).toBe(testID);
  });
  
  test("Can use getEmail()", () => {
    const testEmail = "example@test.com";
    const newEmail = new Employee("test", 505, testEmail);
    expect(newEmail.getEmail()).toBe(testEmail);
  });