import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"

const TrendingCard = ({movie}) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 1500)
  }, []) 

  return <>
 {isLoading
    ?
    <div className='w-fit'>
        <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
    </div>
    :
    <Link to={`/movie/${movie.id}`}
     style={{textDecoration:"none", color:"white",maxHeight:"fit-content"}}>
      
        <div className='w-fit h-fit border-gray-200 border-b-[1px] flex '>
            <img className='pt-3 xl:px-2 xl:pt-2 w-1/5 h-1/5' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
            <div className='w-4/5 h-1/5 mr-2'>
            <h3 className="text-yellow-300 font-semibold text-right m-[8px]">{movie?movie.original_title:""}</h3>
            <div className="text-white text-right m-[0.5px]">
            {movie?movie.vote_average:""}
                    <i className="fas fa-star p-2 ml-2 text-yellow-300" />{" "}
                  </div>
            <h3 className="text-white font-medium m-2 text-right">{movie ? movie.overview.slice(0,70)+"..." : ""}</h3>
            </div>
            
        </div>
    
     </Link>
   
}
  </>
}

export default TrendingCard