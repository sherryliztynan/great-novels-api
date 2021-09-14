const models = require('../models')

const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll()

  return response.send(genres)
}

const getAllNovelsByGenreId = async (request, response) => {
  try {
    const { id } = request.params

    const genre = await models.Genres.findOne({
      where: { id },
      include: [{
        model: models.Titles,
        include: [{ model: models.Authors }]
      }]
    })

    return genre
      ? response.send(genre)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not find novel. Please try again!')
  }
}

module.exports = { getAllGenres, getAllNovelsByGenreId }
