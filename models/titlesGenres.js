
const TitlesGenres = (connection, Sequelize, Titles, Genres) => {
  return connection.define('titlesGenres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    titleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      reference: { model: Titles, key: 'id' }
    },
    genreId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      reference: { model: Genres, key: 'id' }
    }
  }, { paranoid: true })
}

module.exports = TitlesGenres
