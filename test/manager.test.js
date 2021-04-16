// managerTest.js



// const employee = require('../Lib/employee.js');
const manager = require('../Lib/manager.js');


test("May set office number using constructor argument", () => {
    const testValue = 100;
    const e = new manager("Jasper", 1, testValue);
    expect(e.officeNo).toBe(testValue);

  });
  
test("getJob() returns 'manager'", () => {
    const testValue = "manager";
    const e = new manager("Jasper", 1, "test@gmail.com", 100);
    expect(e.getjobTitle()).toBe(testValue);

  });

  test("May get office number using getofficeNo()", () => {
    const testValue = 100;
    const e = new manager("Jasper", 1, "test@gmail.com", testValue);
    expect(e.getofficeNo()).toBe(testValue);

  });
  
