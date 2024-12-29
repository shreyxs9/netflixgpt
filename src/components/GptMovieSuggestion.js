import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const movies = useSelector((store)=> store.gpt.gptMovies)
  return (
    <div>

        <MovieList title="Recommended Movies" movies={movies} />

    </div>
  )
}

export default GptMovieSuggestion
