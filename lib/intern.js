const employee = require("./employee")

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.title = "Intern";
    }
  
}
module.exports = Intern