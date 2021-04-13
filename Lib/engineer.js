// engineer.js
const employee = require("./employee");

class engineer extends employee{
    constructor(name, id, email, githubRepo, jobTitle) {
        super(name, id, email);
        this.githubRepo = githubRepo;
        this.jobTitle;
        
    }

}
