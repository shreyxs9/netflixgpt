import React, { useRef, useState } from 'react';
import lang from '../utils/langaugeConstant';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addGptMoviesRecommendation } from '../utils/gptSlice';
import MovieList from './MovieList';
import { API_OPTION } from '../utils/constants';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const lan = useSelector((store) => store.config.lang);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  const movieDbApiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;

  const handleGptSearch = async (e) => {
    e.preventDefault();
    const prompt = searchText.current.value.trim();

    if (!prompt) {
      setError('Please enter a valid prompt.');
      return;
    }

    setError('');
    setLoading(true);
    setMovies([]);

    try {
      // Step 1: Fetch recommendations from GPT backend
      const response = await axios.post(`${backendUrl}/gemini`, { data: { prompt } });
      const recommendations = response?.data?.recommendations
        ?.split(',')
        .map((movie) => movie.trim()) || [];

      // Step 2: Fetch details for each movie using The Movie Database API
      const moviePromises = recommendations.map((movie) =>
        axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params: { query: movie },
          ...API_OPTION,
        })
      );

      const movieResponses = await Promise.all(moviePromises);

      // Step 3: Extract movie details
      const movieDetails = movieResponses
        .map((res) => res.data.results?.[0])
        .filter((movie) => movie); // Remove null/undefined results

      // Step 4: Update local state and Redux store
      setMovies(movieDetails);
      dispatch(addGptMoviesRecommendation({ movieNames: recommendations, movieResults: movieDetails }));
    } catch (e) {
      console.error('Error fetching data:', e);
      setError(
        e.response?.data?.error || 'Failed to fetch recommendations. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="pt-[35%] sm:pt-[15%] flex justify-center ">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <form className="grid grid-cols-12 w-2/3 sm:1/2 " onSubmit={handleGptSearch}>
          <input
            type="text"
            placeholder={lang[lan]?.placeholder || 'Enter your search here...'}
            className="col-span-9 sm:col-span-10 bg-black text-white rounded-lg  p-3 sm:p-5"
            ref={searchText}
            aria-label="Search input"
          />
          <button
            className="bg-red-600 pr-14 sm:pr-0 p-2 sm:p-4 ml-1 sm:ml-2 col-span-3 sm:col-span-2 rounded-xl"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : lang[lan]?.search || 'Search'}
          </button>
        </form>
      </div>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
     
    </div>
  );
};

export default GptSearchBar;
