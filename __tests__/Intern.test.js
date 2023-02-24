const Intern = require("../lib/Intern");

  test("getRole() returns Intern option", () => {
    const testRole =  "Intern";
    const newRole = new Intern("Test", 505, "example@test.com", "University of School");
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getSchool()", () => {
    const testSchool = "University of School";
    const newSchool = new Intern("Test", 505, "example@test.com", testSchool);
    expect(newSchool.getSchool()).toBe(testSchool);
  });