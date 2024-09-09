import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs"

export const GifGrid = ({category}) => {
  const [counter,setCounter] = useState(0);  
  useEffect(()=>{
    getGifs(category);
  }, [] );
  //getGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {/* <h5>{counter}</h5>
      <button onClick={()=>setCounter(counter + 1)}>+1</button> */}
    </>
  )
}
