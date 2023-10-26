import { useState } from "react";

export default function HornedBeast({image_url, title, description, handleShowModal}) {

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
        <h2>{title}</h2>
        <img src={image_url} onClick={() => handleShowModal({title, image_url})} />
        <p>{description}</p>
        <p onClick={handleClick}>❤{likes}</p>
    </>
  );
  }