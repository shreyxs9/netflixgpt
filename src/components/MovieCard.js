import React, { useState } from 'react';
import { IMG_URL } from '../utils/constants';

const MovieCard = ({ path, title, rating, releaseDate, overview }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {path && (
        <div 
          className="relative w-96 px-4 group cursor-pointer transition-transform duration-300 ease-in-out"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`transform transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <img
              src={`${IMG_URL}${path}`}
              alt="Movie Poster"
              className="w-full h-full rounded shadow-lg"
            />
            
            {/* Movie Details Overlay */}
            <div className={`absolute  z-5 inset-0 bg-black/75 rounded transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="p-4 text-white h-full flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                {rating && (
                  <div className="mb-1">
                    <span className="text-yellow-400">★</span> {rating}/10
                  </div>
                )}
                {releaseDate && (
                  <p className="text-sm mb-1 text-gray-300">
                    Released: {new Date(releaseDate).getFullYear()}
                  </p>
                )}
                {overview && (
                  <p className="text-sm line-clamp-4 text-gray-200">
                    {overview}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;