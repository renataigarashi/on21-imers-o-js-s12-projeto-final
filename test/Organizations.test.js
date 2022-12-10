const { Organization } = require('../src/Organization')
const { Organizations } = require('../src/Organizations')
const { Person } = require('../src/Person')
const { Rating } = require('../src/Rating')

let organization
let organization2

let organizationList

describe('Organization', () => {
    beforeAll(() => {
      organization = new Organization('Contoso','12345678', 'São Paulo')
      organization2 = new Organization('XPTO','99988877', 'Rio de Janeiro')
      
      person1 = new Person('Renata', '11122233344', 'renata@email.com')

      person1.rateOrganization(organization, new Rating('Freedom to be who I am', "It is fundamental for human beings to have the right and the security to be who they are, as a whole, in all the environments in which they live, and especially in the work environment. The company supports every employee to thrive and bring their true selves to work", 5))

      person1.rateOrganization(organization2, new Rating('More than selling, representing', "There is no point in a company investing in advertising that includes the LGBTQI+ public if, for the internal public, there is no support for diversity nor policies that exercise the right to equality.", 1))

      organizationList = new Organizations()
      organizationList.addOrganizations(organization)
      organizationList.addOrganizations(organization2)

    })
  
  test('Add organization to list', () => {
    expect(organizationList.organizations.length).toBe(2)

  })

  test('Sort organization DESC', () => {
    const result = organizationList.sortOrganization()
    expect(result[0].points).toBe(5)
  })

  test('Sort organization ASC', () => {
    const result = organizationList.sortOrganization('asc')
    expect(result[0].points).toBe(1)
  })

  test('Get organization by name', () => {
    const result = organizationList.getOrganization('Contoso')
    expect(result.cnpj).toBe('12345678')
  })

  test('Get organization by name not found', () => {
    const result = organizationList.getOrganization('Any organization')
    expect(result).toBe('Organization not found!')
  })
})