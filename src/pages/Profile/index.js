import FavoriteMovies from "../../componets/Navbar/FovoriteMovies";
import { useAuth } from "../../Hooks/AuthContext";

export default function Profile() {
 const { user } = useAuth();

 return (
   <div className="p-4">
     <h1>Perfil de {user.displayName}</h1>
     <FavoriteMovies user={user} />
     {/* Adicione outros componentes como FavoriteBooks, etc. */}
   </div>
 );
}
