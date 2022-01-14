import React,{useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    // const cat=['One Punch','samuray ', 'dragon ball'];
const [categories, setCategories] = useState(['One Punch'])
//  const handleAdd=()=>{
//     setCategories(['hunter',...categories]);
//  }

return (
        <>
           <h2>GifExpertApp</h2>
            <hr/> 
            {/* <button onClick={handleAdd}>Agregar</button> */}
           <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category=>
                        // <li key={category}>{category}</li>
                        
                        <GifGrid
                        key={category}
                        category={category}/>
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
