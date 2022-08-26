const employee = require("./employee")

class Engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.title = "Engineer";
    }
   
}
module.exports = Engineer;