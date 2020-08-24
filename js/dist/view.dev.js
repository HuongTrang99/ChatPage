"use strict";

var view = {};

view.setActiveScreen = function (screenName) {
  switch (screenName) {
    case 'registerPage':
      document.getElementById('app').innerHTML = component.registerPage;
      var registerForm = document.getElementById('register-form');
      registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(registerForm.firstName.value);
        var data = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value
        };
        controller.register(data);
      });
      document.getElementById('redirect-to-login').addEventListener('click', function () {
        view.setActiveScreen('loginPage');
      });
      break;

    case 'loginPage':
      document.getElementById('app').innerHTML = component.loginPage;
      var loginForm = document.getElementById('login-form');
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {
          email: loginForm.email.value,
          password: loginForm.password.value
        };
        controller.login(data);
      });
      document.getElementById('redirect-to-register').addEventListener('click', function () {
        view.setActiveScreen('registerPage');
      });
      break;

    case 'chatPage':
      document.getElementById('app').innerHTML = component.chatPage;
      document.getElementById('user-display').innerHTML = " Welcome, ".concat(model.currentUser.displayName, "!!!");
      break;
  }
};

view.setUserName = function (elementId, content) {
  document.getElementById(elementId).innerHTML = content;
};

view.setErrorMessage = function (elementID, content) {
  document.getElementById(elementID).innerText = content;
};