
const Intern = require('../lib/Intern');

 
test('creates an Intern object', () => {
    const intern = new Intern('Hannah', 90, 'pattersonhn01@gmail.com', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Hannah', 90, 'pattersonhn01@gmail.com', 'SFSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Hannah', 90, 'pattersonhn01@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 