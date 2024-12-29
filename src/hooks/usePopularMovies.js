import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPopularMovies } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constants';

const usePopularMovies = () => {
    
  const dispatch = useDispatch();
  const nowPopularMovies = useSelector((store)=>store.movie);
  const getPopularMovies = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTION);
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPopularMovies(json.results));
  }
  useEffect(()=>{
    !nowPopularMovies &&
    getPopularMovies();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default usePopularMovies;
