import beastArr from '../Data'
import HornedBeast from './HornedBeast'

export default function Gallery(props) {
  return (
    <>
        <h2>Horned Beasts</h2>
        {
          props.beasts.map((beastArr) => {
            return (
              <HornedBeast img={beastArr.image_url} description={beastArr.description}  title={beastArr.title} />
              
            )
          })
        }
    </>
  )
}