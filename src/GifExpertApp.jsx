import { useState } from "react"



export const GifExpertApp = () => {
  const [categories, setCategories] = useState([{id: 1 , name: 'One Punch'}, {id: 2, name: 'Dragon Ball'}])
  const onAddCategory = () =>{
     setCategories([...categories, 'Valorant'])
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
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
            categories.map(category => {
              return <li key={category.id}>{category.name}</li>
            })
          }
          {/* <li>ABC</li>
          <li>123</li>
          <li>xyz</li> */}
        </ol>
    </>
  )
}
