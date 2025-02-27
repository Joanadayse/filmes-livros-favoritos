import AddFavorite from "../../componets/AddFavorite";
import Favorites from "../Favorites";


export default function Home (){
    return (
      <div>
        <h1>Adicionar Favoritos</h1>
        <AddFavorite />
        <Favorites />
      </div>
    );
}