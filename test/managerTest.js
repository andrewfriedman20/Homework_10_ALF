// managerTest.js

const employee=require("./lib/employee");
const manager=require("./lib/manager");


test("May set office number using constructor argument", () => {
    const testValue = 100;
    const e = new manager("Jasper", 1, testValue);
    expect(e.officeNo).tobe(testValue);

  });
  
test("getRole() returns 'manager'", () => {
    const testValue = "manager";
    const e = new manager("Jasper", 1, "test@gmail.com", 100);
    expect(e.getJob()).tobe(testValue);

  });

  test("May get office number using getofficeNo()", () => {
    const testValue = 100;
    const e = new manager("Jasper", 1, "test@gmail.com", testValue);
    expect(e.officeNo()).tobe(testValue);

  });
