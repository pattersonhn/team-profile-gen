
const Manager = require('../lib/Manager');

  
test('creates an Manager object', () => {
    const manager = new Manager('Hannah', 90, 'pattersonhn01@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Hannah', 90, 'patterson01@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 