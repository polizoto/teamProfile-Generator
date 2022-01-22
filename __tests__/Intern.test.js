const Intern = require('../lib/Intern');

const ValidateEmail = function(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)) {
    return true;
    } else { 
    return false; }
    }

test('creates a intern object', () => {
    const intern = new Intern('Dale', 100942, 'dkan@htctu.net', 'Stanford');
  
    expect(intern.name).toBe('Dale');
    expect(intern.id).toEqual(expect.any(Number));
    expect(ValidateEmail(intern.email)).toBe(true);
    expect(intern.school).toBe('Stanford');
  });

  test("gets Intern's School", () => {
    const intern = new Intern('Dale', 100942, 'dkan@htctu.net', 'Stanford');
  
    expect(intern.getSchool()).toEqual('Stanford');
  });

  test("gets Intern's Role", () => {
    const intern = new Intern('Dale', 100942, 'dkan@htctu.net', 'Stanford');
  
    expect(intern.getRole()).toEqual('Intern');
  });