import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideos } from '../utils/movieSlice';

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    const getTrailer = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTION);
        const json = await data.json();
        const trailerData = json.results.filter((video)=>video.type === "Trailer");
        const trailer = trailerData[0];
        console.log(trailer);
     dispatch(addTrailerVideos(trailer));
    }
    useEffect(()=>{
        getTrailer();
    },[])
getTrailer();
  return (
    <div>
      
    </div>
  )
}

export default useMovieTrailer
