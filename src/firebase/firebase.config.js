// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGB-X59Cz26M1C-vk574OhMYasTDEj7xI",
  authDomain: "react-dragon-news-with-auth.firebaseapp.com",
  projectId: "react-dragon-news-with-auth",
  storageBucket: "react-dragon-news-with-auth.appspot.com",
  messagingSenderId: "532033393267",
  appId: "1:532033393267:web:39af421c0086e2dd1c1006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;