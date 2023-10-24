
import HornedBeast from './HornedBeast'

export default function Gallery(props) {
  return (
    <>
        <h2>Horned Beasts</h2>
        {
          props.beasts.map((beast) => {
            return (
              <HornedBeast img={beast.image_url} />
            )
          })
        }
    </>
  )
}