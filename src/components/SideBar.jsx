import React from 'react'
import "./SideBar.css"
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const SideBar = ({flix}) => {
  
  return (
    <div className='sidebar'>
       {flix ? <div className='sidebar_title1'>Show<span className='sidebar_title2'>Flix</span></div>
       :
       <div className='sidebar_title1'>Dev<span className='sidebar_title2'>Hire</span></div>}
       <div className='sidebar_body'>
        <div className='sidebar_search'>
           <button className='sidebar_search_icon'>< AiOutlineSearch  size="1.5rem" /></button>
           <input type='text' placeholder='Search' className='sidebar_search_input'/>
        </div>
        <div className='sidebar_search2'>
            < AiOutlineHeart   className='sidebar_search_icon2'/>
            <div className='sidebar_search_text'>Watchlist</div>
        </div>
       </div> 
    </div>
    
  )
}

export default SideBar