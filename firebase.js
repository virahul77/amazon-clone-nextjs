
// import firebsas from 'firebase';
import firebase from 'firebase/compat/app';
import firebaseApp from 'firebase/compat/app';
// import  {initializeApp} from 'firebase/app';
import "firebase/compat/firestore";
// import 'firebase/compat/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyBscwKyH4NSOqkjdC85-ItzAa36n_ZbWyQ",
    authDomain: "amzn-clone-480c1.firebaseapp.com",
    projectId: "amzn-clone-480c1",
    storageBucket: "amzn-clone-480c1.appspot.com",
    messagingSenderId: "129675135916",
    appId: "1:129675135916:web:0940414fd221a55b0e4809"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  // const db = app.firestore();
  const db = firebaseApp.firestore();
  // const db  = getFirestore(app);
  export default db;