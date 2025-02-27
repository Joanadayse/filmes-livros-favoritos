import { useState } from "react";
import { useAuth } from "../../Hooks/AuthContext";
import { addFavorite, db } from "../../ultils/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function AddFavorite (){
const { user } = useAuth();
const [title, setTitle] = useState("");
const [imageUrl, setImageUrl] = useState("");
const [type, setType] = useState("filme"); // ou "livro"
const [comment, setComment] = useState("");

const handleAddFavorite = async (e) => {
  e.preventDefault();
  if (!user) return;

  await addDoc(collection(db, "favoritos"), {
    title,
    imageUrl,
    type,
    comment,
    userId: user.uid,
  });

  // Limpar campos após adicionar
  setTitle("");
  setImageUrl("");
  setComment("");
};

return (
  <form onSubmit={handleAddFavorite}>
    <input
      type="text"
      placeholder="Título"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
    <input
      type="text"
      placeholder="URL da Imagem"
      value={imageUrl}
      onChange={(e) => setImageUrl(e.target.value)}
      required
    />
    <select value={type} onChange={(e) => setType(e.target.value)}>
      <option value="filme">Filme</option>
      <option value="livro">Livro</option>
    </select>
    <textarea
      placeholder="Comentário"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />
    <button type="submit">Adicionar Favorito</button>
  </form>
);

}