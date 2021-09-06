const Sequelize = require('sequelize')
const TitlesModel = require('./titles.js')
const AuthorsModel = require('./authors.js')
const GenresModel = require('./genres.js')
const TitlesGenresModel = require('./titlesGenres.js')
)

const connection = new Sequelize('novels', 'novels', 'N0v31s$!', {
  host: 'localhost', dialect: 'mysql'
})

const Titles = TitlesModel(connection, Sequelize)
const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const TitlesGenres = TitlesGenresModel(connection, Sequelize)


Titles.belongsTo(Authors)
Authors.hasMany(Titles)

Genres.belongsToMany(Titles, { through: TitlesGenres })
Titles.belongsToMany(Genres, { through: TitlesGenres })

module.exports = { Titles, Authors, Genres, TitlesGenres }