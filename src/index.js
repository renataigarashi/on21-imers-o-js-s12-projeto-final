const { Organization} = require('./Organization')
const { Organizations } = require('./Organizations')
const { Person } = require('./Person')
const { Rating } = require('./Rating')

const organizationList = new Organizations()


const organization1 = new Organization('Contoso','99988877', 'Rio de Janeiro')
const organization2 = new Organization('XPTO','11223344', 'São Paulo')

const person1 = new Person('Renata', '11122233344', 'renata@email.com')
const person2  = new Person('Kelly', '00988877766', 'kelly@email.com')
const person3 = new Person('Mari', '8887776655', 'mari@email.com')


person2.rateOrganization(organization2, new Rating('Does not respect social name', 'Although the company has an agenda on the inclusion of LGBTQIAP+ people, the social name of trans people is not respected, they could make other employees aware of this issue.', 2))


// // === Person ===
console.log('PERSON WITHOUT REVIEW')
console.log(person1)

// === Organization Log =====
// console.log(organization1)


person1.rateOrganization(organization1, new Rating(
  'Freedom to be who I am', 
  'It is fundamental for human beings to have the right and the security to be who they are, as a whole, in all the environments in which they live, and especially in the work environment. The company supports every employee to thrive and bring their true selves to work', 
  5))

person1.rateOrganization(organization2, new Rating(
  'More than selling, representing', 
  'There is no point in a company investing in advertising that includes the LGBTQI+ public if, for the internal public, there is no support for diversity nor policies that exercise the right to equality.', 
  1))

  // == Person with review ===
  console.log('\nPERSON WITH REVIEW')
  console.log(person1);


// === Organization Log =====
// console.log(organization1)



// ============ Add Organization to Organization List ==========
// console.log('ORGANIZATION LIST')
// organizationList.addOrganizations(organization1)
// organizationList.addOrganizations(organization2)

// console.log(organizationList);

