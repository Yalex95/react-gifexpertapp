import { useState,useEffect } from "react"
import {getGifs} from '../helpers/getGifs'
/**
 * Custom hook useFetch , estado array y un booleano para la bandera del loading
 * @param {category}
 * @returns el estado del hook, dentro del estado estan los datos del fetch
 */
export const useFetchGifs=(category)=>{
    const [state, setState] = useState({
        data:[],
        loading: true
    });
     //para disparar una sola vez la funcion fetch, 
     //componente renderizado 
     //por primera vez
     useEffect(()=>{
         //funcion get gifs es una promesa
         getGifs(category).then(
             imgs=>{
                    setState({

                        data:imgs,
                        loading:false
                    })
        }
         )
     },[category])

    return state; 
}