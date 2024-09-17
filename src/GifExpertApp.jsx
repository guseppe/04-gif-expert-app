import { useState } from "react"
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from "./components/GifGrid"



export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])
  const onAddCategory = ( inputValue ) =>{
     if(categories.includes(inputValue)) return;
     setCategories([inputValue, ...categories])
    //  setCategories(c => { //hay que cambiar el estado con setCategories
    //    c = [...categories]
    //    let lastId = 0
    //    categories.map(c => {
    //      if(c.id > lastId)
    //         lastId = c.id
    //    })
    //    c.push({id: lastId + 1, name: 'valorant'})
    //    return c
    //  })
  }
  //console.log(categories)
  return (
    <>
        <h1>Gift Expert App</h1>
        <AddCategory setCategories={ setCategories } onAddCategory={ onAddCategory }/>
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        {
          categories.map(category => 
            <GifGrid key={category} category={category}/>
          )
        }
    </>
  )
}
