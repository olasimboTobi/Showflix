import React, { useEffect, useState } from 'react'
import "./MoviePageBody.css"
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { TiMediaPlayOutline } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux"
import MovieList from './MovieList';

function MoviePageBody({movie}) {
    
    const allMovies = useSelector((state) => state.allMovies.movies);
    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {
        const filteredMovies = allMovies?.filter((movi) => movi?.imdbID !== movie?.imdbID);
        setNewMovies(filteredMovies.slice(0, 3));
    }, [allMovies, movie]);


    return (
        <div className='moviepage1_body'>
            <div className='moviepage1_container'>
                <div className='img_desc'>
                    <div className='img_des_container'>
                        <img src={movie.Poster} className='img_dee' alt={movie.Title}/>
                    </div>
                    <div className='title_desc'>
                        <h2 className='head'>{movie.Title}</h2>
                        <div className='plot'>{movie.Plot}</div> 
                        <div className='timer'>
                            <div className='clock'>
                                <AiOutlineClockCircle className="release_clock"/>
                                <div className='release'>{movie.Released}</div>
                            </div>
                            <div className='clock'>
                                <AiOutlineStar className="rating_clock"/>
                                <div className='rating'>{movie.imdbRating}</div>
                            </div>
                            <div className='clock'>
                                <TiMediaPlayOutline className="run_clock"/>
                                <div className='runtime'>{movie.Runtime}</div>
                            </div>
                        </div>
                        <div className='watch_heart'>
                            <button className='watch'>Watch Now</button>
                            <div className='heart2'>
                            <AiOutlineHeart className='hearty'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='second'>
                    <div className='second_title'>Similar Movies</div>
                    <div className='row1'>
                    <MovieList movies={newMovies} />
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default MoviePageBody