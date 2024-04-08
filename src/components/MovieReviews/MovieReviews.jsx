import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../services/getDate";
import { getImg } from "../../services/getImg";
import { apiMovieReviews } from "../../services/apiMovies";
import css from "./MovieReviews.module.css";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMssage";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await apiMovieReviews(movieId);

        setMovieReviews(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <div className={css.mainReviews}>
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {!isLoading &&
          !isError &&
          (movieReviews.length ? (
            <ul className={css.reviewsList}>
              {movieReviews.map((review) => (
                <li className={css.reviewItem} key={review.id}>
                  <div className={css.reviewContent}>
                    <img
                      className={css.reviewImg}
                      src={getImg(review.author_details.avatar_path)}
                      width="120"
                      alt={review.author}
                    />
                    <div className={css.reviewInfo}>
                      <h3 className={css.reviewAuthor}>{review.author}</h3>
                      <p className={css.reviewDate}>
                        {formatDate(review.created_at)}
                      </p>
                    </div>
                  </div>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={css.infoMessage}>
              There are no reviews for this movie.
            </p>
          ))}
      </div>
    </div>
  );
};

export default MovieReviews;
