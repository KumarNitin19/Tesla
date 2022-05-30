import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyD_G6twXokTZrU68o48AiudUnoVE24C3y4",
    authDomain: "tesla-clone-6c411.firebaseapp.com",
    projectId: "tesla-clone-6c411",
    storageBucket: "tesla-clone-6c411.appspot.com",
    messagingSenderId: "888364548266",
    appId: "1:888364548266:web:7891524f652978b00e10d3",
    measurementId: "G-4PWVBLKRBQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();

  export {auth}