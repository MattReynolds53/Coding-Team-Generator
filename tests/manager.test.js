const Manager = require('../js/Manager')

//test getRole() for all of them (copy and paste)
test("getRole() should return 'Manager'", () => {
    const valueM = 'Manager'
    const teamManager = new Manager('Matt', 1, 'test@test.com')
    expect(teamManager.getRole()).toBe('Manager')
})
//office number via constructer
test("can get Office Number via constructor argument", () => {
    const officeNumber = "53"
    const managerOfficeNumber = new Manager('Matt', 1, 'matt@tcu.com', officeNumber)
    expect(managerOfficeNumber.officeNumber).toBe(officeNumber)
})

//get office number via officeNum() function
test("getOfficeNumber() should return the manager's office number", () => {
    const officeNumber2 = '44'
    const managerOfficeNumber2 = new Manager('Matt', 1, 'test@test.com', officeNumber2)
    expect(managerOfficeNumber2.getOfficeNumber()).toBe('44')
})