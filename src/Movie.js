import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ title, year, summary, poster, genres }) => {
  return (
    <article class="movie">
      <img src={poster} alt={title} title={title}></img>
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
        <ul class="movie__genres">
          {genres.map((genre, idx) => {
            return (
              <li key={idx} class="movie__genre">
                {genre}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
