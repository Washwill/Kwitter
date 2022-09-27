const firebaseConfig = {
    apiKey: "AIzaSyANl_OEeY_TkOQH42xAh9JPudJa2a1jMWw",
    authDomain: "kwitter-d1136.firebaseapp.com",
    databaseURL: "https://kwitter-d1136-default-rtdb.firebaseio.com",
    projectId: "kwitter-d1136",
    storageBucket: "kwitter-d1136.appspot.com",
    messagingSenderId: "40000085657",
    appId: "1:40000085657:web:7984c0c2658b7a90fca208"
  };

  firebase.initializeApp(firebaseConfig);

  function addUser(){
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        chave:"valor"
    });
    document.getElementById("userName").value = "";
  }