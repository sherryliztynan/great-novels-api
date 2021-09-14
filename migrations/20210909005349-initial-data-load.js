'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('authors', [
      { firstName: 'Bram', lastName: 'Stoker' },
      { firstName: 'Oscar', lastName: 'Wilde' },
      { firstName: 'Alice', lastName: 'Walker' },
      { firstName: 'Leo', lastName: 'Tolstoy' },
      { firstName: 'Charles', lastName: 'Dickens' },
      { firstName: 'Arthur', lastName: 'Miller' },
      { firstName: 'Alexandre', lastName: 'Dumas' },
      { firstName: 'Arthur Conan', lastName: 'Doyle' },
      { firstName: 'Robert Louis', lastName: 'Stevenson' },
      { firstName: 'Fyodor', lastName: 'Dostoyevsky' },
      { firstName: 'Agatha', lastName: 'Christie' },
      { firstName: 'Ray', lastName: 'Bradbury' },
      { firstName: 'George', lastName: 'Orwell' },
      { firstName: 'H.G.', lastName: 'Wells' },
      { firstName: 'Chinua', lastName: ' Achebe' },

    ])

    await queryInterface.bulkInsert('genres', [
      { genre: 'Adventure' },
      { genre: 'African Literature' },
      { genre: 'Crime' },
      { genre: 'Drama' },
      { genre: 'Dystopia' },
      { genre: 'Fantasy' },
      { genre: 'Fiction' },
      { genre: 'French Literature"' },
      { genre: 'Gothic' },
      { genre: 'Historical Fiction' },
      { genre: 'Horror' },
      { genre: 'Mystery' },
      { genre: 'Plays' },
      { genre: 'Russian Literature' },
      { genre: 'Science Fiction"' },
      { genre: 'Time Travel' },
      { genre: 'Thriller' },
      { genre: 'War' }
    ])

    await queryInterface.bulkInsert('titles', [
      { title: 'Dracula', authorId: 1 },
      { title: 'The Picture of Dorian Gray', authorId: 2 },
      { title: 'The Color Purple', authorId: 3 },
      { title: 'War and Peace', authorId: 4 },
      { title: 'A Tale of Two Cities', authorId: 5 },
      { title: 'The Crucible', authorId: 6 },
      { title: 'The Three Musketeers', authorId: 7 },
      { title: 'The Hound of the Baskervilles', authorId: 8 },
      { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 9 },
      { title: 'Crime and Punishment', authorId: 10 },
      { title: 'Murder on the Orient Express', authorId: 11 },
      { title: 'Fahrenheit 451', authorId: 12 },
      { title: 'Animal Farm', authorId: 13 },
      { title: 'The Time Machine', authorId: 14 },
      { title: 'Things Fall Apart', authorId: 15 },
    ])

    return queryInterface.bulkInsert('titlesGenres', [
      { titleId: 1, genreId: 7 },
      { titleId: 1, genreId: 11 },
      { titleId: 1, genreId: 6 },
      { titleId: 2, genreId: 7 },
      { titleId: 2, genreId: 11 },
      { titleId: 2, genreId: 9 },
      { titleId: 2, genreId: 6 },
      { titleId: 3, genreId: 7 },
      { titleId: 3, genreId: 10 },
      { titleId: 4, genreId: 7 },
      { titleId: 4, genreId: 10 },
      { titleId: 4, genreId: 18 },
      { titleId: 4, genreId: 14 },
      { titleId: 5, genreId: 7 },
      { titleId: 5, genreId: 10 },
      { titleId: 6, genreId: 7 },
      { titleId: 6, genreId: 10 },
      { titleId: 6, genreId: 4 },
      { titleId: 6, genreId: 13 },
      { titleId: 7, genreId: 7 },
      { titleId: 7, genreId: 10 },
      { titleId: 7, genreId: 1 },
      { titleId: 7, genreId: 8 },
      { titleId: 8, genreId: 7 },
      { titleId: 8, genreId: 12 },
      { titleId: 8, genreId: 3 },
      { titleId: 8, genreId: 17 },
      { titleId: 9, genreId: 7 },
      { titleId: 9, genreId: 12 },
      { titleId: 9, genreId: 15 },
      { titleId: 9, genreId: 11 },
      { titleId: 10, genreId: 7 },
      { titleId: 10, genreId: 14 },
      { titleId: 10, genreId: 12 },
      { titleId: 11, genreId: 7 },
      { titleId: 11, genreId: 12 },
      { titleId: 12, genreId: 7 },
      { titleId: 12, genreId: 5 },
      { titleId: 13, genreId: 7 },
      { titleId: 13, genreId: 15 },
      { titleId: 13, genreId: 5 },
      { titleId: 14, genreId: 7 },
      { titleId: 14, genreId: 15 },
      { titleId: 14, genreId: 16 },
      { titleId: 15, genreId: 7 },
      { titleId: 15, genreId: 10 },
      { titleId: 15, genreId: 12 }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('titlesGenres')

    await queryInterface.bulkDelete('titles')

    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('authors')
  }
}
