import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constants';

const useNowPlayingMovies = () => {
    
  const dispatch = useDispatch();

  const getnowplaying = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?1", API_OPTION);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    getnowplaying();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default useNowPlayingMovies;
