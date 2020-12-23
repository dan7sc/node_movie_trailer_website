const open = require('open');

/**
 * Movie() builds a constructor that stores
 * information about the movie and a method that
 * displays the movie trailer
 *
 * @param {String} title
 * @param {String} storyline
 * @param {String} released
 * @param {String} runtime
 * @param {String} genre
 * @param {String} director
 * @param {String} rated
 * @param {String} rating
 * @param {String} posterImage
 * @param {String} trailerYoutube
 * @return {Object} movie
 * @public
 */
const Movie = function(movieTitle, movieStoryline, movieReleased,
                       movieRuntime, movieGenre, movieDirector,
                       movieRated, movieRating, posterImage,
                       trailerYoutube) {
  this.title = movieTitle;
  this.storyline = movieStoryline;
  this.released = movieReleased;
  this.runtime = movieRuntime;
  this.genre = movieGenre;
  this.director = movieDirector;
  this.rated = movieRated;
  this.rating = movieRating;
  this.posterImageUrl = posterImage;
  this.trailerYoutubeUrl = trailerYoutube;

  // Method that opens a web browser and
  // displays youtube movie trailer
  this.showTrailer = function() {
    open(this.trailerYoutubeUrl);
  };
}

module.exports = Movie;
