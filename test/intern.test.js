// internTest.js

const intern=require("../Lib/intern.js");

test("Can set university using constructor", () => {
    const testValue = "Boston College";
    const e = new intern("Jasper", 1, "test@gmail.com", testValue);
    expect(e.university).toBe(testValue);

  });
  
test("getJob() returns 'intern'", () => {
    const testValue = "intern";
    const e = new intern("Jasper", 1, "test@gmail.com", "Boston College");
    expect(e.getjobTitle()).toBe(testValue);

  });

  test("Can get university using getuniversity()", () => {
    const testValue = "Boston College";
    const e = new intern("Jasper", 1, "test@gmail.com", testValue);
    expect(e.getUniversity()).toBe(testValue);

  });
  
