import firebase from 'firebase';
import 'firebase/auth';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD8_XCBljgQ_2ownZtTUGPcMpgAlp3KE8I",
    authDomain: "myapp-9f473.firebaseapp.com",
    databaseURL: "https://myapp-9f473.firebaseio.com",
    projectId: "myapp-9f473",
    storageBucket: "myapp-9f473.appspot.com",
    messagingSenderId: "844849873045",
    appId: "1:844849873045:web:7f968e7efe27ed5f6e9b9c",
    measurementId: "G-0J4TL027FH"
};

const firebaseApp =
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export const storage = firebase.storage();
export const auth = firebase.auth();
export const firestore= firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account",
  });

export default db;