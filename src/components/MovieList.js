import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-4 h-56">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} path={movie.backdrop_path} />
            ))
          ) : (
            <p className="text-white">No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
