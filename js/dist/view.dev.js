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
      break;

    case 'chatPage':
      document.getElementById('app').innerHTML = component.chatPage;
      var sendMessageForm = document.getElementById('send-message-form');
      sendMessageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var message = {
          content: sendMessageForm.message.value,
          owner: model.currentUser.email
        };
        var messageFromBot = {
          content: sendMessageForm.message.value,
          owner: 'Bot'
        };

        if (sendMessageForm.message.value === '') {
          console.log('error message');
        } else {
          view.addMessage(message);
          view.addMessage(messageFromBot);
        }
      });
      break;
  }
};

view.setErrorMessage = function (elementId, content) {
  document.getElementById(elementId).innerText = content;
};

view.addMessage = function (message) {
  var messageWrapper = document.createElement('div');
  messageWrapper.classList.add('message');

  if (message.owner === model.currentUser.email) {
    messageWrapper.classList.add('mine');
    messageWrapper.innerHTML = "\n    <div class=\"content\">".concat(message.content, "</div>\n    ");
  } else {
    messageWrapper.classList.add('their');
    messageWrapper.innerHTML = "\n    <div class=\"owner\">".concat(message.owner, "</div>\n    <div class=\"content\">").concat(message.content, "</div>\n    ");
  }

  document.querySelector('.list-messages').appendChild(messageWrapper);
};