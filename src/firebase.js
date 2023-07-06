import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5TtqoxQ_UoxZyQ0WxUykQV_87lv7XHtc",
  authDomain: "tweeverse-11432.firebaseapp.com",
  projectId: "tweeverse-11432",
  storageBucket: "tweeverse-11432.appspot.com",
  messagingSenderId: "816617026259",
  appId: "1:816617026259:web:a7829eafed0ff003669a26",
  measurementId: "G-5E8RPWLF6B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export { storage, auth, provider };
export default db;
