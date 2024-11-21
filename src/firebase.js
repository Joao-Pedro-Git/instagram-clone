import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB48M30e29srLw1EhVTj_JwEpuPv1xKpEQ",
  authDomain: "instagram-55606.firebaseapp.com",
  projectId: "instagram-55606",
  storageBucket: "instagram-55606.firebasestorage.app",
  messagingSenderId: "846014866195",
  appId: "1:846014866195:web:cbad90b281b707315130e6",
  measurementId: "G-6R8KG79YRT"
};

// Inicializando o Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicializando os serviços
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage, ref, uploadBytesResumable, getDownloadURL };
