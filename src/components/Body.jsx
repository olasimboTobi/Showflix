import React, {useState} from 'react'
import "./Body.css"
import { AiOutlineSearch } from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux"
import MovieListSearch from './MovieListSearch';
import {setMovies} from "../redux/actions/movieActions"
import MovieList from './MovieList';
import { apiKey } from '../utils/helpers';



const Body = () => {
  const movies = useSelector((state)=> state.allMovies.movies);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&Type=movie&apikey=${apiKey}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      dispatch(setMovies(responseJson.Search))
    }
  };


  const handleSearch = () => {
    getMovieRequest(searchValue);
  }


  return (
    <div className='body1'>
        <h1 className='body_header'>Explore</h1>
        <div className='body_search'>
         <div className='body_search_input_icon'>
          < AiOutlineSearch  size="3rem" className='body_search_icon'/>
          <input 
            type='text' 
            placeholder='Search' 
            value={searchValue} 
            onChange={(event) => setSearchValue(event.target.value)} 
            className='body_search_input'
          />
         </div>
         <button className='body_search_btn' onClick={handleSearch}>
           Search
         </button>
        </div> 
        <div className='search_result'>
          <MovieListSearch searchValue ={searchValue}/>
        </div>
        <div className='row1'>
				  <MovieList movies={movies} />
			  </div>
    </div>
    
  )
}

export default Body