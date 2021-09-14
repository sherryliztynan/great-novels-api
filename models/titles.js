const Titles = (connection, Sequelize, Authors) => {
  return connection.define('titles', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    authorId: { type: Sequelize.INTEGER, references: { model: Authors, key: 'id' } }
  }, { paranoid: true })
}

module.exports = Titles
