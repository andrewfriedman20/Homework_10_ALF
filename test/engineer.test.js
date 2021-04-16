// engineerTest.js


const engineer= require('../Lib/engineer.js');

test("Can set Git Hub Repository using constructor", () => {
    const testValue = "GitHubUsr";
    const e = new engineer("Jasper", 1, "test@gmail.com", testValue);
    expect(e.githubRepo).toBe(testValue);

  });
  
test("getJob() returns 'engineer'", () => {
    const testValue = "engineer";
    const e = new engineer("Jasper", 1, "test@gmail.com", "GitHubUsr");
    expect(e.getjobTitle()).toBe(testValue);

  });

  test("Can get Git Hub Repo Name using getgitHubRepo()", () => {
    const testValue = "GitHubUsr";
    const e = new engineer("Jasper", 1, "test@gmail.com", testValue);
    expect(e.getgithubRepo()).toBe(testValue);

  });
  // test/engineer.test.js
