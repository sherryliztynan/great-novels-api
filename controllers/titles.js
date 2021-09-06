const models = require('../models')

const getAllNovels = async (request, response) => {
  const titles = await models.Titles.findAll({
    include: [{ model: models.Authors }, { model: models.Genres }]
  })

  return response.send(titles)
}

const getAllNovelsWithAuthorGenre = async (request, response) => {
  const { id } = request.params

  const title = await models.Titles.findOne({
    where: { id },
    include: [{ model: models.Authors },
      { model: models.Genres }
    ]
  })

  return title
    ? response.send(title)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getAllNovelsWithAuthorGenre }