// employee.js

class employee {
    constructor(name, id, email, jobTitle) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.jobTitle = jobTitle;

    }

    getName(){
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getJob() {
        return this.jobTitle;
    }

}

module.exports = employee;
