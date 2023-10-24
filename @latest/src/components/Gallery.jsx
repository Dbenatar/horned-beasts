import Header from './Header'

export default function Gallery(props) {
  return (
    <>
        <h2>Horned Beasts</h2>
        {
          props.beasts.map((beast) => {
            return (
              <Header img={beast.image_url} />
            )
          })
        }
    </>
  )
}