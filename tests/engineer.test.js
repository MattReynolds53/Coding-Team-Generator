const Engineer = require('../js/Engineer')

//test getRole() for all of them (copy and paste)
test("getRole() should return 'Engineer'", () => {
    const valueE = 'Engineer'
    const teamEngineer = new Engineer('Matt', 1, 'test@test.com')
    expect(teamEngineer.getRole()).toBe('Engineer')
})

//github account via constructer
test("can get GitHub via constructor argument", () => {
    const github = "MattReynolds53"
    const engineerGitHub = new Engineer('Matt', 1, 'matt@tcu.com', github)
    expect(engineerGitHub.github).toBe(github)
})

//get github via getHub function
test("getGitHub() should return the engineer's GitHub account", () => {
    const github2 = 'MattReynolds53'
    const engineerGitHub2 = new Engineer('Matt', 1, 'test@test.com', github2)
    expect(engineerGitHub2.getGitHub()).toBe('MattReynolds53')
})
