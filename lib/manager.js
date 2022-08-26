const employee = require("./employee")

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    this.title = "Manager";
}
}
module.exports = Manager;