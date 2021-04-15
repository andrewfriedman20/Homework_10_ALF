// internTest.js

const intern=require("./lib/intern");

test("Can set university using constructor", () => {
    const testValue = "Boston College";
    const e = new intern("Jasper", 1, "test@gmail.com", testValue);
    expect(e.university).tobe(testValue);

  });
  
test("getJob() returns 'intern'", () => {
    const testValue = "intern";
    const e = new intern("Jasper", 1, "test@gmail.com", "Boston College");
    expect(e.getJob()).tobe(testValue);

  });

  test("Can get university using getuniversity()", () => {
    const testValue = "Boston College";
    const e = new intern("Jasper", 1, "test@gmail.com", testValue);
    expect(e.getuniversity()).tobe(testValue);

  });
  
