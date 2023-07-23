import React from 'react'
import "./MovieListSearch.css"

const MovieListSearch = (props) => {
  return (
    <div className='movieListSearch'>
		<div>Results for: <strong>{props.searchValue}</strong></div>
	</div>
  )
}

export default MovieListSearch