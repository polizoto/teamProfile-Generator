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
    // expect(employee.email).toEqual(expect.any(Number));
    // expect(employee.role).toEqual(expect.any(Number));
    // expect(employee.github).toEqual(expect.any(Number));
    // expect(employee.office).toEqual(expect.any(Number));
    // expect(employee.school).toEqual(expect.any(Number));
  });