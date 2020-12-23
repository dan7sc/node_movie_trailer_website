const { movieCardContent } = require('./page_content');

/**
 * Create content about movies
 *
 * @param {Object} movies
 * @return {String}
 * @public
 */
String.prototype.replaceAll = function(search, replacement) {
  const self = this;
  search = '/' + search + '/';
  return self.replace(new RegExp(search, 'g'), replacement);
};

const createMovieCardsContent = function(movies) {
  // The HTML content for this section of the page
  let cardsContent = '';
  const re1 = /(?<=v=)[^&#]+/;
  const re2 = /(?<=be\/)[^&#]+/;

  movies.forEach(movie => {
    // Extract the youtube ID from the url
    youtubeIdMatch = movie.trailerYoutubeUrl.match(re1);
    youtubeIdMatch = youtubeIdMatch || movie.trailerYoutubeUrl.match(re2);
    trailerYoutubeId = youtubeIdMatch[0] || null;

    // Append the tile for the movie with its content filled in
    let movieContent = [
      { movieTitle: movie.title },
      { movieStoryline: movie.storyline },
      { movieReleased: movie.released },
      { movieRuntime: movie.runtime },
      { movieGenre: movie.genre },
      { movieDirector: movie.director },
      { movieRated: movie.rated },
      { movieRating: movie.rating },
      { posterImageUrl: movie.posterImageUrl },
      { trailerYoutubeId: trailerYoutubeId }
    ];

    let cardContent = movieCardContent;
    movieContent.forEach(content => {
      for(let item in content) {
        key = '{' + item + '}';
        value = content[item];
        cardContent = cardContent.replace(new RegExp(key, 'g'), value);
      }
    });
    cardsContent += cardContent;
  });

  return cardsContent;
}

module.exports = createMovieCardsContent;
