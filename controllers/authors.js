const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getAllInformationByAuthorId = async (request, response) => {
  const { id } = request.params

  const author = await models.Authors.findOne({
    where: { id },
    include: [{
      model: models.Titles,
      include: [{ model: models.Genres }]
    }]
  })

  return author
    ? response.send(author)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAllInformationByAuthorId }
