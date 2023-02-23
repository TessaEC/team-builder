const Engineer = require("../lib/engineer");

// tests for Engineer-able to set and get constructor arguments & Role
  test("GitHub username is set", () => {
    const testGithub = "username";
    const newGithub = new Engineer(testGithub);
    expect(newGithub.email).toBe(testGithub);
  });

  test("getRole() returns Engineer option", () => {
    const testRole = "Engineer";
    const newRole = new Engineer("Test", 001, "example@test.com", "username");
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getGithub()", () => {
    const testGithub = "username";
    const newGithub = new Engineer(testGithub);
    expect(newGithub.getGithub()).toBe(testGithub);
  });