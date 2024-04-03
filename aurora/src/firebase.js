import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWmwYvKq_qdrUzlclCMiSDqSLRHSDOyQ0",
  authDomain: "aurora-60caf.firebaseapp.com",
  projectId: "aurora-60caf",
  storageBucket: "aurora-60caf.appspot.com",
  messagingSenderId: "674018179742",
  appId: "1:674018179742:web:66b00439a13b614bbd998f",
  measurementId: "G-8DTDT87B7B"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
