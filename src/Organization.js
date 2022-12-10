class Organization {
  name
  cnpj
  city
  rating
  points
  stampIsLGBTQIAPplusFriendly = false

  constructor(name, cnpj, city) {
    this.name = name
    this.cnpj = cnpj
    this.city = city
    this.rating = []
    this.points = 0
  }

  addRating(rate) {
    this.rating.push(rate)
    this.calculateScore()
    this.checkBadge()
  }

  calculateScore() {
    this.points = this.rating.reduce((acc, curr) => acc + curr.score, 0)/this.rating.length
  }

  checkBadge() {
      this.stampIsLGBTQIAPplusFriendly = this.points >= 4
  }
}

module.exports = { Organization }