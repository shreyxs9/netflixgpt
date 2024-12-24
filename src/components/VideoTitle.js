import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-72 pl-8'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/4'> {overview} </p>
      <div className="flex space-x-4 mt-4">  
      <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">  
        ▶️ Play Now  
      </button>  
      <button className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition">  
        More Info  
      </button>  
    </div>  
    </div>
  )
}


export default VideoTitle;
