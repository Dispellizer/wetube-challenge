import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = async (req, res) => {
  try {
    const movies = await getMovies();
    res.render("movies", { pageTitle: "Movies!", movies });
  } catch (error) {
    console.log(error);
    res.render("404");
  }
};
export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movieDetail = await getMovieById(id);
    const pageTitle = await getMovieById(id).title;
    console.log(pageTitle);
    res.render("detail", { pageTitle, movieDetail });
  } catch (error) {
    console.log(error);
    res.render("404");
  }
};
export const filterMovie = async (req, res) => {
  const {
    query: { year, rating }
  } = req;
  try {
    if (year) {
      const movies = await getMovieByMinimumYear(year);
      res.render("movies", {
        pageTitle: `Searching by year: ${year}`,
        movies
      });
    } else if (rating) {
      const movies = await getMovieByMinimumRating(parseInt(rating));
      res.render("movies", {
        pageTitle: `Searching by year: ${rating}`,
        movies
      });
    }
  } catch (error) {
    console.log(error);
    res.render("404");
  }
};
