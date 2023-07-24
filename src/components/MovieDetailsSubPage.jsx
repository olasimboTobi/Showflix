import React,{useEffect, useState} from 'react'
import "./MovieDetailsSubPage.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import {useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import {selectMovie} from "../redux/actions/movieActions"
import { Link,useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const apiKey = "a3d2c83e"; 

const MovieDetailsSubPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const movie = useSelector((state) =>state.movie);
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  

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


  const handleClick2 = () => {
    const pattern = "felly";
    if (location.pathname.includes(pattern)) {
      // navigate(`/homepage`);
      navigate(`/felly/${movie.imdbID}`);
    } else {
      // navigate(`/movie/${movie.imdbID}`);
      navigate(`/`);
    }
  };

  // Check if movie data is available before rendering
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <motion.div
        whileInView={{ x: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        key={1}
        className='subpage'
      >
        <div  key={movie.imdbID}>
          <div className='subpage_wrapper'>
            <div className='arrow_container'><AiOutlineArrowLeft onClick={handleClick2} className='arrow'/></div>
            <div className='subpage_img_container'>
              <img src={movie.Poster} className='subpage_img'/>
            </div>
            <h2 className='movie_title'>{movie.Title}</h2>
            <p className='subpage_text'>{movie.Plot}</p>
          </div>
          <div className='watch_btn1'>
            <button className='watch1'>Watch Now</button>
          </div>
        </div>);
      </motion.div> 
    </>
  );
}

export default MovieDetailsSubPage;