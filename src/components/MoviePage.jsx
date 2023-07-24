import React, { useEffect, useState } from 'react'
import "./MoviePage.css"
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import {selectMovie} from "../redux/actions/movieActions"
import SideBar from './SideBar';
import MoviePageBody from './MoviePageBody';
import MovieDetailsSubPage from './MovieDetailsSubPage';
import { Routes, Route, useNavigate } from 'react-router-dom';


const apiKey = "a3d2c83e"; 


const MoviePage = () => {
  const[flix, setFlix] =useState(true)
  const movie = useSelector((state) =>state.movie);
  const { imdbID } = useParams()
  console.log(imdbID)

  const dispatch = useDispatch()
  console.log(movie)

  const fetchMovieDetailPage = async() => {
    const response = await axios
      .get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
      .catch(err => {
        console.log("Err", err)});
      
      
    dispatch(selectMovie(response.data));
  }

  useEffect(()=>{
    if(imdbID && imdbID !== "") fetchMovieDetailPage();
  },[imdbID])

  return (
    <div className='moviepage'>
      
      <div className='moviepage1'>
        <SideBar flix={flix}/>
        <MoviePageBody movie={movie}/>
      </div>
        
      <Routes>
        <Route path="/:imdbID" element={<MovieDetailsSubPage/>}/>
      </Routes>

    </div>
  )
}

export default MoviePage