import firebase from 'firebase/app'

{/* <script src="https://www.gstatic.com/firebasejs/6.0.4/firebase.js"></script> */ }

const firebaseConfig = {
  apiKey: "AIzaSyACZQVNeCu-QT8qyi4uKoW7_wsMHK1qLlk",
  authDomain: "normanproyect.firebaseapp.com",
  databaseURL: "https://normanproyect.firebaseio.com",
  projectId: "normanproyect",
  storageBucket: "normanproyect.appspot.com",
  messagingSenderId: "741488960941",
  appId: "1:741488960941:web:dea020396c8b49e8"
};
// Initialize Firebase
const init = () => firebase.initializeApp(firebaseConfig);

init()
