import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/AuthContext";
import { db } from "../../ultils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Favorites  (){
     const { user } = useAuth();
     const [movies, setMovies] = useState([]);
     const [books, setBooks] = useState([]);

     useEffect(() => {
       const fetchFavorites = async () => {
         const q = query(
           collection(db, "favoritos"),
           where("userId", "==", user.uid)
         );
         const querySnapshot = await getDocs(q);
         const favs = querySnapshot.docs.map((doc) => ({
           id: doc.id,
           ...doc.data(),
         }));

         // Separar filmes e livros
         const moviesList = favs.filter((fav) => fav.type === "filme");
         const booksList = favs.filter((fav) => fav.type === "livro");

         setMovies(moviesList);
         setBooks(booksList);
       };

       if (user) {
         fetchFavorites();
       }
     }, [user]);

     const handleShare = (type) => {
       const list = type === "filme" ? movies : books;
       const shareContent = list
         .map((item) => `${item.title} - ${item.comment}`)
         .join("\n");

       // Usar a API de Clipboard para copiar o conteúdo
       navigator.clipboard
         .writeText(shareContent)
         .then(() => {
           alert(`Lista de ${type}s compartilhada com sucesso!`);
         })
         .catch((err) => {
           console.error("Erro ao copiar para a área de transferência: ", err);
           alert("Falha ao compartilhar a lista.");
         });
     };

     return (
       <div>
         <h1>Favoritos</h1>

         <h2>Filmes</h2>
         <button onClick={() => handleShare("filme")}>
           Compartilhar Filmes
         </button>
         <ul>
           {movies.map((movie) => (
             <li key={movie.id}>
               <h3>{movie.title}</h3>
               <img
                 src={movie.imageUrl}
                 alt={movie.title}
                 style={{ width: "100px" }}
               />
               <p>Comentário: {movie.comment}</p>
             </li>
           ))}
         </ul>

         <h2>Livros</h2>
         <button onClick={() => handleShare("livro")}>
           Compartilhar Livros
         </button>
         <ul>
           {books.map((book) => (
             <li key={book.id}>
               <h3>{book.title}</h3>
               <img
                 src={book.imageUrl}
                 alt={book.title}
                 style={{ width: "100px" }}
               />
               <p>Comentário: {book.comment}</p>
             </li>
           ))}
         </ul>
       </div>
     );
}