import React from 'react'
import axios from 'axios';

const useGptMovie = async ({promt}) => {
    try{
         const response = await axios.get ("http://localhost:5000/gemini");
         console.log(response);
    } catch(e){
        console.error("error fecting data ", e)
    }
  return (
    <div>
      
    </div>
  )
}

export default useGptMovie
