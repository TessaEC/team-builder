const Intern = require("../lib/Intern");

// tests for Intern-able to set and get constructor arguments & role
  test("School name is set", () => {
    const testSchool = "University of School";
    const newSchool = new Intern(testSchool);
    expect(newSchool.email).toBe(testSchool);
  });

  test("getRole() returns Intern option", () => {
    const testRole =  "Intern";
    const newRole = new Intern("Test", 001, "example@test.com", "University of School");
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getSchool()", () => {
    const testSchool = "University of School";
    const newSchool = new Intern(testSchool);
    expect(newSchool.getSchool()).toBe(testSchool);
  });