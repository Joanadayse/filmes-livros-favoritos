import AddFavorite from "../../componets/AddFavorite";
import { useAuth } from "../../Hooks/AuthContext";
import Favorites from "../Favorites";
import "./home.css";

export default function Home() {
  const { user, logout } = useAuth();
  return (
    <div className="container">
      <h1>Adicionar Favoritos</h1>
      {user && <button onClick={logout}>Sair</button>}
      <AddFavorite />
      <Favorites />
    </div>
  );
}
