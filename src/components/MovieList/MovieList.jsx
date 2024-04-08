import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import { getImg } from "../../services/getImg";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();

  return (
    <>
      {movies.length > 0 ? (
        <ul className={css.listMovies}>
          {movies.map((movie) => (
            <li className={css.movieItem} key={movie.id}>
              <Link
                className={css.linkOfAllMovies}
                state={location}
                to={`/movies/${movie.id}`}
              >
                <img
                  className={css.movieImg}
                  src={getImg(movie.poster_path)}
                  width="300"
                  alt={movie.title}
                />
                <span className={css.movieTitle}>{movie.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.infoMessage}>There is no data</p>
      )}
    </>
  );
};

export default MovieList;
