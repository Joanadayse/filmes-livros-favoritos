import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "../../ultils/firebase";
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Login</h1>
      <button onClick={handleGoogleLogin} className="bg-blue-500 text-white p-2 rounded mb-2">
        Login com Google
      </button>
      <button onClick={handleFacebookLogin} className="bg-blue-700 text-white p-2 rounded">
        Login com Facebook
      </button>
    </div>
  );
};

