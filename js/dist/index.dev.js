"use strict";

window.onload = function () {
  var firebaseConfig = {
    apiKey: "AIzaSyDYU9qIR6NuCeV_GGBRUOzpUuCw6PoIDTU",
    authDomain: "chat-app-14525.firebaseapp.com",
    databaseURL: "https://chat-app-14525.firebaseio.com",
    projectId: "chat-app-14525",
    storageBucket: "chat-app-14525.appspot.com",
    messagingSenderId: "1000197750512",
    appId: "1:1000197750512:web:d052221c45b63568594c35",
    measurementId: "G-XPM3RRNYG6"
  };
  firebase.initializeApp(firebaseConfig); // firebase.analytics();

  console.log(firebase.app());
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      };

      if (user.emailVerified) {
        view.setActiveScreen('chatPage');
      } else {
        alert('Please verify your email!');
        firebase.auth().signOut();
        view.setActiveScreen('loginPage');
      }
    } else {
      view.setActiveScreen('registerPage');
    }
  });
};