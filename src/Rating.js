class Rating {
  title
  description
  score
  dateRate 

  constructor(title, description, score) {
    this.title = title
    this.description = description
    this.score = score
  }
}

module.exports = { Rating }