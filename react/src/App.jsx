import { useState } from "react";
import CatCard from "./CatCard.jsx";
import LikeButton from "./LikeButton.jsx";

export default function App() {
  const [cats, setCats] = useState([
    {
      id: 1,
      name: "Tabby",
      adopted: false,
    },
    {
      id: 2,
      name: "Mochi",
      adopted: false,
    },
  ]);

  const availableCount = cats.filter((cat) => {
    return !cat.adopted;
  }).length;

  function adopt(id) {
    setCats(
      cats.map((cat) => {
        if (cat.id === id) {
          return {
            ...cat,
            adopted: true,
          };
        }
        return cat;
      }),
    );
  }

  return (
    <>
      <LikeButton />
      <h1>{availableCount} cats available</h1>
      <ul>
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onAdopt={adopt} />
        ))}
      </ul>
    </>
  );
}
