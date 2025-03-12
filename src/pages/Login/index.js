import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "../../ultils/firebase";
import "./login.css";


export default function Login() {
const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="container">
      <div className="mask"></div>
      <h1 className="titulo">Meus filmes & livros favoritos</h1>
      <div className="div-button">
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 text-white p-2 rounded mb-2"
        >
          Login com Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className="bg-blue-700 text-white p-2 rounded"
        >
          Login com Facebook
        </button>
      </div>
    </div>
  );
};

