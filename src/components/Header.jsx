import React from "react";
import { Link } from "react-router-dom";
import imdb_logo from '../assets/imdb_logo2.png'

const Header = () => {
    return(
        <div className="fixed  bg-slate-950 top-0 z-50 w-screen h-[74px]">
            <div className="w-full  flex p-2 md:p-5 xl:p-5 ">
                <Link className="w-fit px-3  py-1 text-white mx-1" to="/"><img className="w-fit h-10" src={imdb_logo} /></Link>
                
                <Link className="w-fit px-1  text-sm md:px-7  xl:px-10 pt-2 mx-2 text-white xl:mx-1" to="/movies/popular">Popular</Link>

                <Link className="w-fit px-1  text-sm md:px-7  xl:px-10 pt-2 mx-2 text-center text-white xl:mx-1" to="/movies/top_rated">Top Rated</Link>

                <Link className="w-fit px-1  text-sm md:px-7  xl:px-10 pt-2 mx-2 text-white xl:mx-1" to="/movies/upcoming">Upcoming</Link>
            </div>
        </div>
    )
}

export default Header