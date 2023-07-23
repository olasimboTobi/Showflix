import React, { useState, useRef } from 'react';
import "./MovieList.css"
import { Link, useLocation, useNavigate } from "react-router-dom";

const MovieList = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
  

    const handleMouse = (movie) => {
   

        const pattern = "felly";
        if (location.pathname.includes(pattern)) {
        // navigate(`/homepage/${movie.imdbID}`);
        navigate(`/felly/${movie.imdbID}/${movie.imdbID}`);
        } else {
        // navigate(`/movie/${movie.imdbID}/${movie.imdbID}`);
        navigate(`/${movie.imdbID}`);
        }
    } 


    return (
        <div className='row'>
            <div className='row_posters'>
                {props.movies.map((movie) => (
                    <Link 
                        to={`/felly/${movie.imdbID}`} 
                        key={movie.imdbID}
                        onMouseEnter={() => handleMouse(movie)}   
                        className='view_img'>
                        <img
                            src={movie.Poster}
                            className='row_poster'
                            alt={movie.Title}
                        />
                        <div className='view'>View</div>
                    </Link>
                ))}
                
            </div>
        </div>
    )
}

export default MovieList