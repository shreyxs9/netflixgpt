import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[25%] pl-10  w-screen aspect-video absolute text-white bg-gradient-to-r from-black '>
      <h1 className=' text-xl md:text-3xl font-bold'>{title}</h1>
      <p className='w-1/4 hidden sm:inline-block'> {overview} </p>
      <div className="flex space-x-4 mt-2 md:mt-4">  
      <button className="text-sm md:text-lg bg-red-600 text-white px-2 md:px-6 py-1 md:py-2 rounded hover:bg-red-700  transition">  
         Play Now  
      </button>  
      <button className="hidden sm:inline-block bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition">  
        More Info  
      </button>  
    </div>   
    </div>
  ) 
}


export default VideoTitle;
