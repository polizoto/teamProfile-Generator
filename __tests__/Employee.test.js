const Employee = require('../lib/Employee');

function onlyLettersAndSpaces(str) {
  return /^[A-Za-z\s]*$/.test(str);
}

function onlyNumbers(str) {
  return /^\d+$/.test(str);
}

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
    expect(onlyLettersAndSpaces(employee.name)).toBe(true);
    expect(employee.id).toEqual(expect.any(Number));
    expect(onlyNumbers(employee.id)).toBe(true);
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