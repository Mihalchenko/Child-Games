const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBD8RoAyORdLYtLb02lPT8HeznCBj9xCwI",
    authDomain: "mihalchenko-fd2-project.firebaseapp.com",
    databaseURL: "https://mihalchenko-fd2-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mihalchenko-fd2-project",
    storageBucket: "mihalchenko-fd2-project.appspot.com",
    messagingSenderId: "322918586460",
    appId: "1:322918586460:web:ac6ca626b44df3992d6e99"
});

const myAppDB = firebaseApp.database();
const auth = firebaseApp.auth();
