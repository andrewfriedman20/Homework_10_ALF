// engineerTest.js


const engineer=require("./lib/engineer");

test("Can set Git Hub Repository using constructor", () => {
    const testValue = "GitHubUsr";
    const e = new engineer("Jasper", 1, "test@gmail.com", testValue);
    expect(e.gitHubRepo).tobe(testValue);

  });
  
test("getJob() returns 'engineer'", () => {
    const testValue = "engineer";
    const e = new engineer("Jasper", 1, "test@gmail.com", "GitHubUsr");
    expect(e.getJob()).tobe(testValue);

  });

  test("Can get Git Hub Repo Name using getgitHubRepo()", () => {
    const testValue = "GitHubUsr";
    const e = new engineer("Jasper", 1, "test@gmail.com", testValue);
    expect(e.getgitHubRepo()).tobe(testValue);

  });
  
