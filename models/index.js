const Sequelize = require('sequelize')
const AllConfigs = require('../config/sequelize')

const AuthorsModel = require('./authors.js')
const TitlesModel = require('./titles.js')
const GenresModel = require('./genres.js')
const TitlesGenresModel = require('./titlesGenres.js')


const environment = process.env.NODE_ENV || 'development'
const {
  username, password, database, host, dialect
} = AllConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host, dialect
})

const Authors = AuthorsModel(connection, Sequelize)
const Titles = TitlesModel(connection, Sequelize, Authors)
const Genres = GenresModel(connection, Sequelize)
const TitlesGenres = TitlesGenresModel(connection, Sequelize, Genres, Titles)


Authors.hasMany(Titles)
Titles.belongsTo(Authors)

Genres.belongsToMany(Titles, { through: TitlesGenres })
Titles.belongsToMany(Genres, { through: TitlesGenres })

module.exports = {
  Titles, Authors, Genres, TitlesGenres
}

