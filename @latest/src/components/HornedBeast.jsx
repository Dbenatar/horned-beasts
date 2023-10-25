

export default function HornedBeast({img, title, description}) {
  return (
    <>
        <h2>{title}</h2>
        <img src={img} />
        <p>{description}</p>
    </>
  )
}