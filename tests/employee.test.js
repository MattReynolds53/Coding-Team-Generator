const Employee = require('../js/Employee')

test("Can I instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object')
})

test("can set name", () => {
    const name = 'Matt'
    const empName = new Employee(name)
    expect(empName.name).toBe('Matt')
})

test("can set id", () => {
    const testValue = 1
    const empID = new Employee('Matt', testValue)
    expect(empID.id).toBe(testValue)
})

test("can set email via constructor argument", () => {
    const email = 'test@test.com'
    const empEmail = new Employee('Matt', 1, email)
    expect(empEmail.email).toBe(email)
})

test("can get name via getName()", () => {
    const name = 'Matt'
    const empName = new Employee(name)
    expect(empName.getName()).toBe('Matt')
})

test("can get id via getId()", () => {
    const id = 1
    const empID2 = new Employee('Matt', id)
    expect(empID2.getId()).toBe(id)
})

test("can get email via getEmail()", () => {
    const email = 'test@test.com'
    const empEmail2 = new Employee('Matt', 1, email)
    expect(empEmail2.email).toBe(email)
})

test("getRole() should return 'Employee'", () => {
    const roleValue = 'Employee'
    const empRole = new Employee('Matt', 1, 'test@test.com')
    expect(empRole.getRole()).toBe('Employee')
})