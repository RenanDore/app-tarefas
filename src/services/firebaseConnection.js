import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyB-ZnQA6UfkaO8-87G2is7CvcpR4J4kkf8",
    authDomain: "tarefas-cac7d.firebaseapp.com",
    projectId: "tarefas-cac7d",
    storageBucket: "tarefas-cac7d.appspot.com",
    messagingSenderId: "745463693782",
    appId: "1:745463693782:web:0ad685227d165cf327e477"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;