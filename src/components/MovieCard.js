import React from 'react';
import { IMG_URL } from '../utils/constants';

const MovieCard = ({ path, title, description }) => {
  return (
    <div className="relative group w-96 cursor-pointer">
      {path && (
        <div className="w-full shadow-md overflow-hidden rounded-lg transition-transform transform group-hover:scale-105">
          <img
            src={`${IMG_URL}${path}`}
            alt="Movie Poster"
            className="w-full h-full rounded"
          />
          {/* Overlay for details */}
          <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
            <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
            <p className="text-sm text-gray-300 mb-4">{description}</p>
            <button className="px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition">
              Play
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
