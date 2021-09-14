/* eslint-disable no-console */
const models = require('../models')
const { Op } = require('sequelize')


const getAllNovels = async (request, response) => {
  const titles = await models.Titles.findAll({
    include: [{ model: models.Authors }, { model: models.Genres }]
  })

  return response.send(titles)
}

const getNovelByIdOrTitle = async (request, response) => {
  try {
    const { identifier } = request.params

     const title = await models.Titles.findOne({
      where: {
        [Op.or]: [
          { id: identifier },
          { title: { [Op.like]: `%${identifier}%` } },
        ]
      },
      include: [{ model: models.Authors }, { model: models.Genres }]
    })


    return title
      ? response.send(title)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel, please try again')
  }
}

module.exports = { getAllNovels, getNovelByIdOrTitle }
