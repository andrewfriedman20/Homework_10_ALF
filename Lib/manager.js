// manager.js

const employee = require("./employee");

class manager extends employee{
    constructor(name, id, email, officeNo, jobTitle) {
        super(name, id, email);
        this.officeNo = officeNo;
        this.jobTitle;
        
    }
    
    getjobTitle() {
        return this.jobTitle;
    }
    
    getofficeNo() {
        return this.officeNo;
    }

}

module.exports = manager;
