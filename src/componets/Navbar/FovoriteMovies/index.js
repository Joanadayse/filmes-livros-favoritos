// src/components/FavoriteMovies.js
import React, { useState } from "react";
import { db } from "../../../ultils/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function FavoriteMovies  ({ user })  {
  const [movie, setMovie] = useState("");

  const handleAddMovie = async () => {
    if (movie.trim()) {
      try {
        await addDoc(collection(db, "users", user.uid, "favorites"), {
          type: "movie",
          name: movie,
        });
        setMovie("");
      } catch (error) {
        console.error("Error adding movie: ", error);
      }
    }
  };

  return (
    <div>
      <h2>Adicionar Filme Favorito</h2>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Nome do filme"
        className="border p-2"
      />
      <button
        onClick={handleAddMovie}
        className="bg-green-500 text-white p-2 rounded"
      >
        Adicionar
      </button>
    </div>
  );
};


