import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
  // const [images, setImages] = useState([]);
  // const getImages = async() =>{
  //    const newImages =  await getGifs(category);
  //    setImages(newImages);
  // } 
  // useEffect(()=>{
  //   getImages();
  // }, [] );
  const {images, isLoading} = useFetchGifs(category);
  console.log(isLoading);
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          images.map( image =>(
            <GifItem key={ image.id } {...image} />
          ))
        }
      </div>
    </>
  )
}
