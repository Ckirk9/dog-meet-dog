import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCF5X2dgxTIRHxDa06IINZVwlBEOU2PJVI",
    authDomain: "doggie-tinder-6f075.firebaseapp.com",
    databaseURL: "https://doggie-tinder-6f075.firebaseio.com",
    projectId: "doggie-tinder-6f075",
    storageBucket: "doggie-tinder-6f075.appspot.com",
    messagingSenderId: "694168625489",
    appId: "1:694168625489:web:b90046f96bf35b9fb03370",
    measurementId: "G-QWBCXEFVB2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database
