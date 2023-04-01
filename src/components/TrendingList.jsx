import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrendingCard from "./TrendingCard";

const TrendingList = () => {
  const [trendingList, setTrendingList] = useState([])
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=cea65bf992ce9cc29ae419b79e8f55ad&language=en-US`
    )
      .then((res) => res.json())
      //.then(data => console.log(data.results))
      .then(data => setTrendingList(data.results));
  };
  return (
    <div className="w-fit overflow-auto max-h-[calc(100vh-250px)]">
      {
        trendingList.map(movie =>(
          <TrendingCard movie={movie} />
        ))
      }
    </div>
  )
}

export default TrendingList