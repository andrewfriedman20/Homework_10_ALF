// engineerTest.js


const engineer= require('../Lib/engineer.js');

test("Can set Git Hub Repository using constructor", () => {
    const testValue = "GitHubUsr";
    const e = new engineer("Jasper", 1, "test@gmail.com", testValue, "engineer");
    expect(e.githubRepo).toBe(testValue);

  });
  
test("getjobTitle() returns \"engineer\"", () => {
    const testValue = "engineer";
    const e = new engineer("Jasper", 1, "test@gmail.com", "GitHubUsr", "engineer");
    expect(e.getjobTitle()).toBe(testValue);

  });

  test("Can get Git Hub Repo Name using getgitHubRepo()", () => {
    const testValue = "Jasper";
    const e = new engineer("Jasper", 1, "test@gmail.com", testValue, "engineer");
    expect(e.getGit()).toBe(testValue);

  });
  // test/engineer.test.js

  // done