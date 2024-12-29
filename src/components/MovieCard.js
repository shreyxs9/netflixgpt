import React from 'react';
import { IMG_URL } from '../utils/constants';

const MovieCard = ({ path }) => {
  return (
    <div>
    {  path && (
    <div className="w-96 px-4 shadow-md hover:shadow-lg transition-shadow duration-200">
   
        <img
          src={`${IMG_URL}${path}`}
          alt="Movie Poster"
          className="w-full h-full rounded"
        />
    </div>
)}
    </div>
  );
};

export default MovieCard;
