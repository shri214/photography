import React from 'react'

export const ImageSize = ({size, val,ind}) => {
  return (
    <div className={`mb ${size}`} key={ind}>
        <img className='images' src={val.img} alt={`imageIs ${ind}`} />
        <img src={val.logo} alt={`logo ${ind}`}  className='imagesLogo'/>
    </div>
  )
}

