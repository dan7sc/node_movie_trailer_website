/**
 * Call a function to open a webbrowser
 * and display the information about the movies.
 */

const openMovieCardsPage = require('./fresh_blueberries');
const movies = require('./entertainment_center');

// Open index.html file in a web browser via fresh_bluberries.py file
openMovieCardsPage(movies);
