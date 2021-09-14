const express = require('express')

const { getAllAuthors, getNovelsByAuthorIdOrLastName } = require('./controllers/authors')
const { getAllGenres, getAllNovelsByGenreId } = require('./controllers/genres')
const { getAllNovels, getNovelByIdOrTitle } = require('./controllers/titles')

const app = express()

app.use(express.json())

app.get('/authors', getAllAuthors) // works //

app.get('/authors/:identifier', getNovelsByAuthorIdOrLastName)

app.get('/genres', getAllGenres) // works //

app.get('/genres/:id', getAllNovelsByGenreId) // works //

app.get('/novels', getAllNovels) // works //

app.get('/novels/:identifier', getNovelByIdOrTitle)

app.listen(1338, () => {
  console.log('Listening on port 1338...') // eslint-disable-line no-console
})
