// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCA4Xim6nqDITOArbOS63mdK8GDB6967rs",
//   authDomain: "waqqly-9b88d.firebaseapp.com",
//   databaseURL: "https://waqqly-9b88d-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "waqqly-9b88d",
//   storageBucket: "waqqly-9b88d.appspot.com",
//   messagingSenderId: "254373012174",
//   appId: "1:254373012174:web:c957179694e21417d3669f",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// function writeWalkerData(walkerID, name, email, Town, County) {
//   const db = getDatabase(app);
//   const reference = ref(db, 'Walkers/' + walkerID)

//   set(reference, {
//     walkername: name,
//     email: email,
//     town: Town,
//     county: County
//   });
// }

// writeWalkerData("walker1", "walker", "walker@walk.com", "Camberley");
