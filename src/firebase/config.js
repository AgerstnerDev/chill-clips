import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0vvG6KlEQCd1A4g3eCusAsEi0b35vV3A",
  authDomain: "chill-clips.firebaseapp.com",
  projectId: "chill-clips",
  storageBucket: "chill-clips.appspot.com",
  messagingSenderId: "78615656616",
  appId: "1:78615656616:web:21b41f18373d76c8256a9d",
  measurementId: "G-ZDZYCKLB99"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth };