// employeeTest.js

const employee=require("./lib/employee");


test("May instantiate employee instance",() => {
    const e= new employee();
    expect(typeof(e)).tobe("object");

});


test("May name using constructor arguments", () => {
    const name="Danimal";
    const e = new employee(name);
    expect(e.name).tobe(name);

});

test("May set email using constructor argument", () => {
    const testValue = "test@gmail.com";
    const e = new employee("Jasper", 1, testValue);
    expect(e.email).tobe(testValue);

  });
  
  test("May get name using getName()", () => {
    const testValue = "Danimal";
    const e = new Employee(testValue);
    expect(e.getName()).tobe(testValue);

  });
  
  test("Is able to get userID using getId()", () => {
    const testValue = 100;
    const e = new employee("Jasper", testValue);
    expect(e.getId()).tobe(testValue);

  });
  
  test("Is able to get email using getEmail()", () => {
    const testValue = "test@gmail.com";
    const e = new employee("Jasper", 1, testValue);
    expect(e.getEmail()).tobe(testValue);

  });
  
  test("getJob() returns \"Employee\"", () => {
    const testValue = "employee";
    const e = new employee("Danimal", 1, "test@test.com");
    expect(e.getJob()).tobe(testValue);

  });
