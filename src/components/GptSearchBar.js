import React from 'react'
import lang from '../utils/langaugeConstant';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
    const lan = useSelector((store) => store.config.lang);
  return (
    <div className='p-[10%] flex justify-center'> 
       <div className="absolute inset-0 -z-10">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
        <form className='grid grid-cols-12'>
        <input type="text" placeholder={lang[lan].placeholder}
        className=' col-span-10 bg-black text-white rounded-lg p-4'/>  
        <button 
        className='bg-red-600 px-6 py-3 ml-2 col-span-2 rounded-lg' 
         type="submit">
       {lang[lan].search}
         </button>
        </form>
    </div>
  )
}

export default GptSearchBar
