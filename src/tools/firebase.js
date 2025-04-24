import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWURt2-polGT4YdQ8iI72jEFgNaGgAdN8',
  authDomain: 'earthy-flowers.firebaseapp.com',
  projectId: 'earthy-flowers',
  storageBucket: 'earthy-flowers.appspot.com', 
  messagingSenderId: '712550937427',
  appId: '1:712550937427:web:587269c676b66fc206a7a6',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);