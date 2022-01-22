const Engineer = require('../lib/Engineer');

const ValidateEmail = function(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)) {
    return true;
    } else { 
    return false; }
    }

test('creates a engineer object', () => {
    const engineer = new Engineer('Juan', 63549, 'juan@apple.com', 'jolivares15');
  
    expect(engineer.name).toBe('Juan');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(ValidateEmail(engineer.email)).toBe(true);
    expect(engineer.github).toBe('jolivares15');
  });

  test("gets Engineer's Role", () => {
    const engineer = new Engineer('Juan', 63549, 'juan@apple.com', 'jolivares15');
  
    expect(engineer.getRole()).toEqual('Engineer');
  });

test("gets Engineer's Github", () => {
const engineer = new Engineer('Juan', 63549, 'juan@apple.com', 'jolivares15');

expect(engineer.getGithub()).toEqual('jolivares15');
});