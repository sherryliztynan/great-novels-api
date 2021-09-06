const Genres = (connection, Sequelize) => {
  return connection.define('genres', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, { paranoid: true })
}


module.exports = Genres
