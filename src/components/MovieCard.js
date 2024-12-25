import React from 'react';
import { IMG_URL } from '../utils/constants';

const MovieCard = ({ path }) => {
  return (
    <div className="w-96 px-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      {path ? (
        <img
          src={`${IMG_URL}${path}`}
          alt="Movie Poster"
          className="w-full h-full rounded"
        />
      ) : (
        <div className="w-full h-64 flex items-center justify-center bg-gray-200">
          <p>No Image</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
