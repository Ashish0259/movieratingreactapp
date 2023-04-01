import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieListComp from "../components/MoviesListComp/MovieListComp";
import TrendingList from "../components/TrendingList";
import VerticleLine from "../components/VerticleLine";


const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=cea65bf992ce9cc29ae419b79e8f55ad&language=en-US"
    )
      .then((res) => res.json())
      //.then(data => console.log(data.results))
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="xl:flex">
        <Carousel className="xl:w-3/5 h-fit mt-24 xl:ml-12"
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="w-fit h-fit xl:h-[calc(100vh-200px)] overflow-hidden">
                <img
                  className="w-fit block m-auto bg-cover"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div
                className="w-screen absolute  pb-[3rem] xl:p-[5rem] px-[3rem] h-[70%] bottom-0
                    justify-end items-start bg-gradient-to-t from-slate-900  
                    transition-opacity delay-0.3 hover:opacity-3 "
              >
                

              
                <div className="text-white  w-fit font-semibold xl:mb-[0.4rem] md:text-[1.75rem] text-[1rem] xl:text-[2.5rem] text-left xl:p-2">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="w-fit md:w-[50%] xl:w-[50%] text-left xl:p-2 text-0.75rem xl:text-[1rem]">
                  {movie ? movie.release_date : ""}
                  <span className="text-white ml-5  w-[50%] xl:p-2 text-left font-medium mb-[0.4rem] text-[0.75rem]  xl:text-[1rem]">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star p-2 ml-2" />{" "}
                  </span>
                </div>
                <div className="text-white  w-fit md:w-[50%] xl:w-[50%] xl:p-2 text-left font-medium mb-[0.4rem] text-[1rem]">
                  {movie ? movie.overview.slice(0,140)+"..." : ""}
                </div>
                </div>
              
            </Link>
          ))}
        </Carousel>
        <div className="xl:w-2/5 xl:h-[calc(100vh-200px)] mt-12 xl:mt-24 mr-2 xl:mr-12 ml-8">
          <div className="flex">
          <VerticleLine />
          <h2 className="text-yellow-300 font-medium text-[1.5rem] ml-5 mt-1 mb-2">Trending Movies</h2>
          </div>
          
          <div className="h-[90%] w-[95%] xl:ml-5">
            <TrendingList />
          </div>
        </div>
        
      </div>
      <div className="-mt-[40px]"> 
          <MovieListComp/>
        </div>
      
    </>
  );
};

export default Home;
