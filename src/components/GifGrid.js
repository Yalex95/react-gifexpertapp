import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

/**
 * Yeris Alejandra Aguilar Gordillo
 * componente con argumento category, usefecth es un custom hook que se utiliza para hacer llamadas al enpoint 
 * @returns la categoria escrita y una coleccion de datos que envia el endpoint, se mapean los datos 
 */
const GifGrid = ({category}) => {
//custom hook
    const {data:images,loading}=useFetchGifs(category);
  
    return (
        <>
        <h3 className='animate__animated  animate__fadeIn'>{category}</h3>
        {/* validacion */}
        {loading && <p className='animate__animated  animate__flash'>Loading</p>}
        <div className='card-grid'>
         
                 {images.map(img=>(
                     <GifGridItem 
                     key={img.id}
                     {...img}/>
                 )
                 )}
           
            
        </div>
        </>
    )
}

export default GifGrid
