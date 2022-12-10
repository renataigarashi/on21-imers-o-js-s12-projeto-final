const { Organization } = require('../src/Organization')
const { Person } = require('../src/Person')
const { Rating } = require('../src/Rating')

let organization
describe('Organization', () => {
    beforeAll(async () => {
      organization = new Organization('Contoso','12345678', 'São Paulo')
  })
  
  test('Should create an organization', () => {
    expect(organization instanceof Organization).toBeTruthy()
  })

  test('Add rating to organization', () => {
    const person1 = new Person('Renata', '11122233344', 'renata@email.com')
    
    person1.rateOrganization(organization, new Rating('Freedom to be who I am', "It is fundamental for human beings to have the right and the security to be who they are, as a whole, in all the environments in which they live, and especially in the work environment. The company supports every employee to thrive and bring their true selves to work", 5))
    expect(organization.rating[0].title).toBe('Freedom to be who I am')
  })

})