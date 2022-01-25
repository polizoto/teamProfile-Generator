const Manager = require('../lib/Manager');

const ValidateEmail = function(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)) {
    return true;
    } else { 
    return false; }
    }

    // allow hypens and underscores as well
    function alphaNumericNoSpaces(str) {
      return /^[a-zA-Z0-9-_]+$/.test(str);
    }

test('creates a manager object', () => {
    const manager = new Manager('Janis', 57942, 'janis@stanlycc.edu', '4D');
    expect(manager.name).toBe('Janis');
    expect(manager.id).toEqual(expect.any(Number));
    expect(ValidateEmail(manager.email)).toBe(true);
    expect(alphaNumericNoSpaces(manager.office)).toBe(true);
  });

  test("gets Manager's Role", () => {
    const manager = new Manager('Janis', 57942, 'janis@stanlycc.edu');
  
    expect(manager.getRole()).toEqual('Manager');
  });

