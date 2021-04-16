// employeeTest.js

const employee=require("../Lib/employee.js");


test("May instantiate employee instance",() => {
    const e= new employee();
    expect(typeof(e)).toBe("object");

});


test("May name using constructor arguments", () => {
    const name="Danimal";
    const e = new employee(name);
    expect(e.Name).toBe(name);

});

test("May set email using constructor argument", () => {
    const testValue = "test@gmail.com";
    const e = new employee("Jasper", 1, testValue);
    expect(e.Email).toBe(testValue);

  });
  
  test("May get name using getName()", () => {
    const testValue = "Danimal";
    const e = new employee(testValue);
    expect(e.getName()).toBe(testValue);

  });
  
  test("Is able to get userID using getId()", () => {
    const testValue = 100;
    const e = new employee("Jasper", testValue);
    expect(e.getID()).toBe(testValue);

  });
  
  test("Is able to get email using getEmail()", () => {
    const testValue = "test@gmail.com";
    const e = new employee("Jasper", 1, testValue);
    expect(e.getEmail()).toBe(testValue);

  });
  
  test("getJob() returns \"Employee\"", () => {
    const testValue = "employee";
    const e = new employee("Danimal", 1, "test@test.com");
    expect(e.getjobTitle()).toBe(testValue);

  });
