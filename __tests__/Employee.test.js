const Employee = require('../lib/Employee');

const ValidateEmail = function(email) {
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat)) {
return true;
} else { 
return false; }
}

test('creates a Employee object', () => {
    const employee = new Employee('Janis', 57942, 'janis@stanlycc.edu');
  
    expect(employee.name).toBe('Janis');
    expect(employee.id).toEqual(expect.any(Number));
    expect(ValidateEmail(employee.email)).toBe(true);
  });

  test("gets Employee's name", () => {
    const employee = new Employee('Janis', 57942, 'janis@stanlycc.edu');
  
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
  });

  test("gets Employee's ID", () => {
    const employee = new Employee('Janis', 57942, 'janis@stanlycc.edu');
  
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
  });

  test("gets Employee's Email", () => {
    const employee = new Employee('Janis', 57942, 'janis@stanlycc.edu');
  
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  });

  test("gets Employee's Role", () => {
    const employee = new Employee('Janis', 57942, 'janis@stanlycc.edu');
  
    expect(employee.getRole()).toEqual('Employee');
  });