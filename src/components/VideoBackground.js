import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({id}) => {
  useMovieTrailer(id);
  const trailerVideo = useSelector(state => state.movies?.trailerVideos);
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' style={{ position: 'absolute', top: 0, left: 0 }} src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground;
