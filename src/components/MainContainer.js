import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector(state => state.movies?.nowPlayingMovies);
    if(movies === null) return;
  const mainmovie = movies[1];
  const {original_title,overview,id}=mainmovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer;
