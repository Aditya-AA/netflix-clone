import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //Run a piece of code when row appears then make a request to tmdb and pull  image request
    //React Async is a promise-based library that offers a declarative API to make API calls.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //if [], run once when row loads and don't run again,here fetchUrl changes so do useEffect changes
  console.log(movies);
  return (
    <div className="row">
      {/*title*/}
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((film) => (
          <img
            key={film.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow? film.poster_path : film.backdrop_path}`}
            alt={film.title}
          />
        ))}
      </div>
      {/*conatiner -> posters*/}
    </div>
  );
}

export default Row;
