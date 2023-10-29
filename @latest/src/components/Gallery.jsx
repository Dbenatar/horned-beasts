// import data from '../assets/Data.json'
import HornedBeast from './HornedBeast'

export default function Gallery({ data, handleShowModal, horns}) {
  const filteredHorns = data.filter(
    (beast) => beast.horns == horns || horns === ""
  );
  
  return (
    <>
    {data.map((beasts) => {
      return (
         
              <HornedBeast key={beasts._id} image_url={beasts.image_url} description={beasts.description}  title={beasts.title} handleShowModal={handleShowModal} /> 
            );
          })}
        
    </>
  );
}