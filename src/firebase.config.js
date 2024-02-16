import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import { fireStorage, getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDwgXzcQuQnoUzvVdazhbkqqUVKVeCKJYw",
  authDomain: "maltimart-eb3b9.firebaseapp.com",
  projectId: "maltimart-eb3b9",
  storageBucket: "maltimart-eb3b9.appspot.com",
  messagingSenderId: "794079521936",
  appId: "1:794079521936:web:158b228c1d710eb18f3c15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;