import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDuPq5H1jlFWCEINRagmSkuYqJmFFCs1fU",
    authDomain: "dog-meet-dog-tinder.firebaseapp.com",
    databaseURL: "https://dog-meet-dog-tinder.firebaseio.com",
    projectId: "dog-meet-dog-tinder",
    storageBucket: "dog-meet-dog-tinder.appspot.com",
    messagingSenderId: "517658342661",
    appId: "1:517658342661:web:cca7afeba9943a99fef36c",
    measurementId: "G-BNXFZB9B05"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
