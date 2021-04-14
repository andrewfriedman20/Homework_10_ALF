// manager.js

const employee = require("./employee");

class manager extends manager{
    constructor(name, id, email, officeNo, jobTitle) {
        super(name, id, email);
        this.officeNo = officeNo;
        this.jobTitle;
        
    }
    
    getJob() {
        return this.jobTitle;
    }
    
    getOfficeNo() {
        return this.officeNo;
    }

}

module.exports = manager;
