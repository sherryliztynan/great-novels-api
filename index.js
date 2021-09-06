const express = require('express')
const app = express()
const { getAllAuthors, getAllInformationByAuthorId } = require('./controllers/authors')
const { getAllGenres, getAllNovelsByGenreId } = require('./controllers/genres')
const { getAllNovels, getAllNovelsWithAuthorGenre } = require('./controllers/titles')

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAllInformationByAuthorId)

app.get('/genres', getAllGenres)

app.get('genres/:id', getAllNovelsByGenreId)

app.get('novels', getAllNovels)

app.get('novels/:id', getAllNovelsWithAuthorGenre)

app.listen(1337, () => {
    console.log('Listening on port 1337...') // eslint-disable-line no-console
  })