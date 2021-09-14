/* eslint-disable no-console */
const models = require('../models')
const { Op } = require('sequelize')


const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getNovelsByAuthorIdOrLastName = async (request, response) => {
  try {
    const { identifier } = request.params

    const author = await models.Authors.findOne({
      where: {
        [Op.or]: [
          { id: identifier },
          { lastName: { [Op.like]: `%${identifier}%` } },
        ]
      },
      include: [{
        model: models.Titles,
        include: [{ model: models.Genres }]
      }]
    })

    return author
      ? response.send(author)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel, please try again')
  }
}

module.exports = { getAllAuthors, getNovelsByAuthorIdOrLastName }
