import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComp from "../CardComp/CardComp";
import './moviesListComp.css'
import VerticleLine from '../VerticleLine'

const MovieListComp = () => {
  const [movieList, setMovieList] = useState([])
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=cea65bf992ce9cc29ae419b79e8f55ad&language=en-US`
    )
      .then((res) => res.json())
      //.then(data => console.log(data.results))
      .then(data => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <div className="flex">
      <VerticleLine />
      <h2 className="list__title text-yellow-300 font-medium text-[1.5rem] ml-5">
        {(type ? type : "POPULAR").toUpperCase().replace("_"," ")}
      </h2>
      </div>
      
      <div className="list__cards">
        {
        movieList.map(movie => (
          <CardComp movie={movie} />
        ))
        }
      </div>
    </div>
  );
};

export default MovieListComp;
