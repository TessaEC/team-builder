const Employee = require("../lib/Employee");

// tests for Employee-able to set constructor arguments
test("Name is set for Employee", () => {
    const testName = "Betty";
    const newName = new Employee(testName);
    expect(newName.name).toBe(testName);
  });

  test("ID is set for Employee", () => {
    const testID = 85;
    const newID = new Employee(testID);
    expect(newID.id).toBe(testID);
  });

  test("Email is set for Employee", () => {
    const testEmail = "example@test.com";
    const newEmail = new Employee(testEmail);
    expect(newEmail.email).toBe(testEmail);
  });

  test("getRole() returns Employee option", () => {
    const testRole = "Employee";
    const newRole = new Employee(testRole);
    expect(newRole.getRole()).toBe(testRole);
  });
// Able to get the input info from constructor function
  test("Can use getName()", () => {
    const testName = "Betty";
    const newName = new Employee(testName);
    expect(newName.getName()).toBe(testName);
  });

  test("Can use getId()", () => {
    const testID = 85;
    const newID = new Employee(testID);
    expect(newID.getId()).toBe(testID);
  });
  
  test("Can get email via getEmail()", () => {
    const testEmail = "example@test.com";
    const newEmail = new Employee(testEmail);
    expect(newEmail.getEmail()).toBe(testEmail);
  });