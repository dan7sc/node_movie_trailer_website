/**
 * Create instances of the class Movie,
 * add this instance to a list
 */

const Movie = require('./media');

/**
 * Toy Story movie: movie title, storyline, movie released, runtime,
 * genre, director, movie rated, rating, poster image and movie trailer
 */
const toyStory = new Movie(
  "Toy Story",
  "A cowboy doll is profoundly threatened and jealous" +
    "when a new spaceman figure supplants him" +
    "as top toy in a boy's room.",
  "1995",
  "81 min",
  "Animation, Adventure, Comedy",
  "John Lasseter",
  "G",
  "8.3/10 (imdbRating)",
  "http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
  "https://www.youtube.com/watch?v=4KPTXpQehio"
);

/**
 * Avatar movie: movie title, storyline, movie released, runtime,
 * genre, director, movie rated, rating, poster image and movie trailer
 */
const avatar = new Movie(
  "Avatar",
  "A paraplegic marine dispatched to the moon Pandora" +
    "on a unique mission becomes torn between following his orders" +
    "and protecting the world he feels is his home.",
  "2009",
  "162 min",
  "Action, Adventure, Fantasy",
  "James Cameron",
  "PG-13",
  "7.8/10 (imdbRating)",
  "http://upload.wikimedia.org/wikipedia/id/b/b0/Avatar-Teaser-Poster.jpg",
  "https://www.youtube.com/watch?v=5PSNL1qE6VY"
);

/**
 * School of Rock movie: movie title, storyline, movie released, runtime,
 * genre, director, movie rated, rating, poster image and movie trailer
 */
const schoolOfRock = new Movie(
  "School of Rock",
  "After being kicked out of a rock band," +
    "Dewey Finn becomes a substitute teacher" +
    "of a strict elementary private school," +
    "only to try and turn it into a rock band.",
  "2013",
  "108 min",
  "Comedy, Music",
  "Richard Linklater",
  "PG-13",
  "7.1/10 (imdbRating)",
  "http://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg",
  "https://www.youtube.com/watch?v=3PsUJFEBC74"
);

/**
 * Ratatouille movie: movie title, storyline, movie released, runtime,
 * genre, director, movie rated, rating, poster image and movie trailer
 */
const ratatouille = new Movie(
  "Ratatouille",
  "A rat who can cook makes an unusual alliance" +
    "with a young kitchen worker at a famous restaurant.",
  "2007",
  "111 min",
  "Animation, Adventure, Comedy",
  "Brad Bird, Jan Pinkava(co-director)",
  "G",
  "8.0/10 (imdbRating)",
  "http://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
  "https://www.youtube.com/watch?v=c3sBBRxDAqk"
);

/**
 * Midnight in Paris movie: movie title, storyline, movie released, runtime,
 * genre, director, movie rated, rating, poster image and movie trailer
 */
const midnightInParis = new Movie(
  "Midnight in Paris",
  "While on a trip to Paris with his fiancée's family," +
    "a nostalgic screenwriter finds himself mysteriously" +
    "going back to the 1920s everyday at midnight.",
  "2011",
  "94 min",
  "Comedy, Fantasy, Romance",
  "Woody Allen",
  "PG-13",
  "7.7/10 (imdbRating)",
  "http://upload.wikimedia.org/wikipedia/en/9/9f/" +
    "Midnight_in_Paris_Poster.jpg",
  "https://www.youtube.com/watch?v=FAfR8omt-CY"
);

/**
 * Hunger Games movie: movie title, storyline, movie released, runtime,
 * genre, director, movie rated, rating, poster image and movie trailer
 */
const hungerGames = new Movie(
  "Hunger Games",
  "Katniss Everdeen voluntarily takes" +
    "her younger sister's place in the Hunger Games:" +
    "a televised competition in which two teenagers" +
    "from each of the twelve Districts of Panem are chosen" +
    "at random to fight to the death.",
  "2012",
  "142 min",
  "Adventure, Sci-Fi, Thriller",
  "Gary Ross",
  "PG-13",
  "7.2/10 (imdbRating)",
  "http://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg",
  "https://www.youtube.com/watch?v=PbA63a7H0bo"
);

// Put all movies in a list
const movies = [toyStory, avatar,
                schoolOfRock, ratatouille,
                midnightInParis, hungerGames];

module.exports = movies;
