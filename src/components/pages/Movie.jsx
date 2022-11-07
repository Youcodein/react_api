// import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";
import { useState, useEffect } from "react";
const Movie = () => {
  const [movies, setMovies] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=25947345ed29186e578a0e972443bc29&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };
  //자바스크립트

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=25947345ed29186e578a0e972443bc29&query=marvel"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);
  //리액트

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "Reference api"]} />
        <MovieList />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;
