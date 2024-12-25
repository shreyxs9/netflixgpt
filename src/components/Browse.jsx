import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
 const showGptSearch = useSelector((store)=> store.gpt.gptToggle);
  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearch/> :
       <>
      <MainContainer/>
      <SecondaryContainer/> 
      </> }
      
     
    </div>
  )
}

export default Browse
