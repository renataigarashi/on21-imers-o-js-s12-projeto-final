class Person {
  name
  cpf
  email
  amountOfContributions = 0 
  rating = []
  
  constructor(name, cpf, email) {
    this.name = name
    this.cpf = cpf
    this.email = email
  }

  rateOrganization(organization, rate){
    rate.dateRate = new Date()
    this.amountOfContributions++
    organization.addRating(rate)
    this.rating.push(rate)
  }
} 

module.exports = { Person }