const Engineer = require("../lib/engineer");
const Employee = require("../lib/Employee");

  test("getRole() returns Engineer option", () => {
    const testRole = "Engineer";
    const newRole = new Engineer("Test", 505, "example@test.com", testRole);
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getGithub()", () => {
    const testGithub = "GitHub user";
    const newGithub = new Engineer("Test", 505, "example@test.com", testGithub);
    expect(newGithub.getGithub()).toBe(testGithub);
  });