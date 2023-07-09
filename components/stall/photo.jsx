import React from 'react'
import photos from "@/components/json/card"
const photo = () => {
  return (
    <div className='w-11/12 m-auto flex flex-wrap justify-around'>
   {photos.photo.map((val)=>{
    return(
        <img className="w-1/4 h-auto rounded-lg drop-shadow-lg m-5" src={val} alt="" />
    )
   })}
    
        
    </div>
  )
}

export default photo