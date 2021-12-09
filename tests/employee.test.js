const Employee = require('../js/Employee')

test("Can I instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object')
})

test("can set name", () => {
    const name = 'Matt'
    const e = new Employee(name)
    expect(e.name).toBe('Matt')
})

test("can set id", () => {
    const testValue = 1
    const e = new Employee('Matt', testValue)
    expect(e.id).toBe(testValue)
})

test("can set email via constructor argument", () => {
    const email = 'test@test.com'
    const e = new Employee('Matt', 1, email)
    expect(e.email).toBe(email)
})

test("can get name via getName()", () => {
    const name = 'Matt'
    const e = new Employee(name)
    expect(e.getName()).toBe('Matt')
})

test("can get id via getId()", () => {
    const id= 1
    const e = new Employee('Matt', id)
    expect(e.getId()).toBe(id)
})

test("can get email via getEmail()", () => {
    const email = 'test@test.com'
    const e = new Employee('Matt', 1, email)
    expect(e.email).toBe(email)
})

test("getRole() should return 'Employee'", () => {
    const value = 'Employee'
    const e = new Employee('Matt', 1, 'test@test.com')
    expect(e.getRole()).toBe('Employee')
})