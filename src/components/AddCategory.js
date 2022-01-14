import React ,{useState}from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const hadleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            //funcion con callback sin mandar categories por props
            setCategories(cat=>
                [inputValue,...cat]);
                setInputValue('');
        }
        
        
       // console.log(setCategories);
        
    }
    return (
    
        <form onSubmit={handleSubmit}>
        <h2>Add Category</h2>
            <input
                value={inputValue}
                type='text'
                onChange={hadleInputChange}

            />
        </form>
            
    )
}
AddCategory.propTypes={
setCategories: PropTypes.func.isRequired
}

export default AddCategory
