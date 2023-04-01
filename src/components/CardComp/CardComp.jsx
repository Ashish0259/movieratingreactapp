import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"
import './cardComp.css'

const CardComp = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

  return <>
  {
    isLoading
    ?
    <div className='cardComp'>
        <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
    </div>
    :
    <Link to={`/movie/${movie.id}`}
     style={{textDecoration:"none", color:"white",maxHeight:"fit-content"}}>
        <div className='cardComp w-20 h-28 md:w-28 md:h-36 xl:h-[300px] xl:min-w-[200px]'>
            <img className="cardComps__img xl:h-[300px] " src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
            <div className="cardComps__overlay w-20 h-28 md:w-28 md:h-36  xl:w-[200px] xl:h-[290px] ">
                <div className="cardComp__title xl:text-[1rem] md:text-[0.75rem] text-[0.5rem]"> 
                {movie?movie.original_title:""}
                </div>
                <div className="cardComp__runtime xl:text-[0.75rem] md:text-[0.50rem] text-[0rem]">
                {movie?movie.release_date:""}
                <span className="cardComp__rating xl:text-[0.75rem]  md:text-[0.50rem] text-[0rem]">
                    {movie?movie.vote_average:""}
                    <i className="fas fa-star" />
                </span>
                </div>
                <div className="cardComp__description xl:text-[0.75rem] md:text-[0.25rem] text-[0rem]">
                {movie ? movie.overview.slice(0,118)+"..." : ""}
                </div>
            </div>
        </div>

    </Link>
  }
  
  </>
}

export default CardComp