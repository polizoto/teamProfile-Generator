class Employee {
    constructor(name = '', id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  }

Employee.prototype.getName = function() {
    return `This employee's name is ${this.name}.`;
};

Employee.prototype.getId = function() {
    return `${this.name}'s ID is ${this.id}.`;
};

Employee.prototype.getEmail = function() {
    return `${this.name}'s email is ${this.email}.`;
};

Employee.prototype.getRole = function() {
    return 'Employee';
};

module.exports = Employee;