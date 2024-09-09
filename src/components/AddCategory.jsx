import { useState } from "react"

export const AddCategory = ({setCategories, onAddCategory}) => {
  const [inputValue, setInputValue ] = useState('');
  const onInputChange = ({target}) =>{
    setInputValue(target.value);
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    //console.log(inputValue);
    let value = inputValue.trim();
    if(value.length <= 1) return;
    //setCategories(categories => [...categories, inputValue]); esta una forma de comunicar data al padre
    onAddCategory(value);
    setInputValue('');
  }
  return (
      <form onSubmit={ onSubmit }>
        <input 
          type="text"
          placeholder="Buscar Gifts"
          value={ inputValue }
          onChange={ onInputChange }
        />
      </form>
  )
}

