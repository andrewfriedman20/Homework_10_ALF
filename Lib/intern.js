// intern.js

const employee = require("./employee");

class intern extends employee{
    constructor(name, id, email, university, jobTitle) {
        super(name, id, email);
        this.university = university;
        this.jobTitle;
        
    }


    getjobTitle() {
        return this.jobTitle;
    }

    getUniversity() {
        return this.university;
    }
}

module.exports = intern;
