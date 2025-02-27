// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkjVr92cGu1G5sKQhbACSkt2gqexgAjDw",
  authDomain: "filmes-livros.firebaseapp.com",
  projectId: "filmes-livros",
  storageBucket: "filmes-livros.firebasestorage.app",
  messagingSenderId: "94952236023",
  appId: "1:94952236023:web:9ba67ce8fd1c80ff6944f2",
  measurementId: "G-Y1J0FB8V7R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth= getAuth(app);
export const db= getFirestore(app);

export const addFavorite = async (userId, title, type, imageUrl) => {
  try {
    await addDoc(collection(db, "favoritos"), {
      userId,
      title,
      type,
      imageUrl,
    });
    console.log("Favorito adicionado com sucesso!");
  } catch (e) {
    console.error("Erro ao adicionar favorito: ", e);
  }
};
