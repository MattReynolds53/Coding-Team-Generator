const Intern = require('../js/Intern')

//test getRole() for all of them (copy and paste)
test("getRole() should return 'Intern'", () => {
    const intern = 'Intern'
    const teamIntern = new Intern('Matt', 1, 'test@test.com')
    expect(teamIntern.getRole()).toBe('Intern')
})

//school via constructer
test("can get school via constructor argument", () => {
    const school = "TCU"
    const internSchool = new Intern('Matt', 1, 'matt@tcu.com', school)
    expect(internSchool.school).toBe(school)
})

//get school via school function

test("getSchool() should return the intern's school", () => {
    const school2 = 'TCU'
    const internSchool2 = new Intern('Matt', 1, 'test@test.com', school2)
    expect(internSchool2.getSchool()).toBe('TCU')
})