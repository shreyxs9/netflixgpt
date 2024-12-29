import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNowTopRatedMovies } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constants';

const usePopularMovies = () => {
    
  const dispatch = useDispatch();
  const nowTopRatedMovies = useSelector((store) => store.movie);
  const getPopularMovies = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTION);
    const json = await data.json();
    // console.log(json);
    dispatch(addNowTopRatedMovies(json.results));
  }
  useEffect(()=>{
    !nowTopRatedMovies &&
    getPopularMovies();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default usePopularMovies;
