import React from 'react'

/**
 * 
 * @param {id,title,url} 
 * @returns una tarjeta con los datos de la llamada
 */
const GifGridItem = ({id,title,url}) => {
    
    return (
        <div className='card animate__animated  animate__fadeIn'>
          <img src={url} alt={title} />
          <p>{title}</p>
        </div>
    )
}

export default GifGridItem
