
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyATIudDSFza0QRTGBkYviRhR-CXXpACzcg",
      authDomain: "kwitter-e172b.firebaseapp.com",
      projectId: "kwitter-e172b",
      storageBucket: "kwitter-e172b.appspot.com",
      messagingSenderId: "514822933740",
      appId: "1:514822933740:web:391ae8d64307cf678229c9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
import { initializeApp } from "firebase/app";
var firebaseConfig = {
    apiKey: "AIzaSyATIudDSFza0QRTGBkYviRhR-CXXpACzcg",
    authDomain: "kwitter-e172b.firebaseapp.com",
    databaseURL: "https://kwitter-e172b-default-rtdb.firebaseio.com",
    projectId: "kwitter-e172b",
    storageBucket: "kwitter-e172b.appspot.com",
    messagingSenderId: "514822933740",
    appId: "1:514822933740:web:391ae8d64307cf678229c9"
};
    function addUser(){
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
        });
    }
    
