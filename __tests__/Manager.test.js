const Manager = require('../lib/Manager');

const ValidateEmail = function(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)) {
    return true;
    } else { 
    return false; }
    }

test('creates a manager object', () => {
    const manager = new Manager('Janis', 57942, 'janis@stanlycc.edu', 4);
    expect(manager.name).toBe('Janis');
    expect(manager.id).toEqual(expect.any(Number));
    expect(ValidateEmail(manager.email)).toBe(true);
    expect(manager.office).toEqual(expect.any(Number));
  });

  test("gets Manager's Role", () => {
    const manager = new Manager('Janis', 57942, 'janis@stanlycc.edu');
  
    expect(manager.getRole()).toEqual('Manager');
  });

