import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(likes + 1);
  }

  return (
    <button onClick={addLike}>Like ({likes})</button>
  );
}
