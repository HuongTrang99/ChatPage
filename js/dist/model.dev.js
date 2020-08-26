"use strict";

//nhung gi tuong tac voi database
var model = {};
model.currentUser = undefined;

model.register = function _callee(data) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(firebase.auth().createUserWithEmailAndPassword(data.email, data.password));

        case 3:
          response = _context.sent;
          //firebase authen la dich vu cua fire base, khi su dung dich vu cua firebase phai import vao
          firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
          }); // console.log(response)

          firebase.auth().currentUser.sendEmailVerification();
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          alert(_context.t0.message);
          console.elog(error);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

model.login = function _callee2(_ref) {
  var email, password;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = _ref.email, password = _ref.password;

          // const respone = await firebase.auth().signInWithEmailAndPassword(data.email, dapassword)
          try {
            firebase.auth().signInWithEmailAndPassword(email, password); //firebase authen la dich vu cua fire base, khi su dung dich vu cua firebase phai import vao
            // console.log(response)
            // if (response && response.user.emailVerified){
            //     //vao man chat
            //     model.currentUser={
            //         email: response.user.email,
            //         displayName: response.user.displayName
            //     }
            //     view.setActiveScreen('chatPage')
            // }
            // else{
            //     alert('Please verify your email')
            // }
          } catch (err) {
            alert(err.message);
            console.log(err);
          }

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};