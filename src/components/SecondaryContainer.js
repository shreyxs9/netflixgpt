import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return ( 
    <div className='bg-black w-[100%]' >
      <div className='relative z-2 mt-0 md:-mt-40'> 
      {movies?.nowPlayingMovies ? (
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      ) : (
        <p>Loading movies...</p>
      )}
      {movies?.nowPopularMovies ? (
        <MovieList title="Popular" movies={movies.nowPopularMovies} />
      ) : (
        <p>Loading movies...</p>
      )}
      {movies?.nowTopRatedMovies ? (
        <MovieList title="Top Rated" movies={movies.nowTopRatedMovies} />
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
    </div>
  );
};

export default SecondaryContainer;
