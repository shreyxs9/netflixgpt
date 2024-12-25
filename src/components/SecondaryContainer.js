import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return ( 
    <div >
      {movies?.nowPlayingMovies ? (
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default SecondaryContainer;
