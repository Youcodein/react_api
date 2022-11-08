import React from "react";

function MovieHot(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <span className="rank">{props.rank + 1}</span>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <em>
          <span className="title">{props.movie.title}</span>
          {/* <span className="star">{props.movie.vote_average}</span> */}
        </em>
      </a>
    </li>
  );
}

const MovieList = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <ul>
            {props.lists.map((movies, index) =>
              index < 4 ? (
                <MovieHot key={index} rank={index} movie={movies} />
              ) : null
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
