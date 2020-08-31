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

  console.log(firebase.app()); // firebase.auth().onAuthStateChanged((user)=>{
  //   if (user){
  //     console.log(user)
  //     model.currentUser = {
  //       displayName: user.displayName,
  //       email: user.email
  //     }
  //     if(user.emailVerified){
  //       view.setActiveScreen('chatPage')
  //     }
  //     else{
  //       alert('Please verify your email!')
  //       firebase.auth().signOut()
  //       view.setActiveScreen('loginPage')
  //     }
  //   }else{
  //     view.setActiveScreen('registerPage')
  //   }
  // })
  // templateFirestore()
};

var templateFirestore = function templateFirestore() {
  var docId, response, user, responseMany, users, dataToCreate, idToUpdate, dataToUpdate, idToDelete;
  return regeneratorRuntime.async(function templateFirestore$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // get one
          docId = '4azNLtD7jL3zTZuWuXAH';
          _context.next = 3;
          return regeneratorRuntime.awrap(firebase.firestore().collection('users').doc(docId).get());

        case 3:
          response = _context.sent;
          //tra ve object co function doc, sau do tra ra ob co function get
          user = getOneDocument(response); // console.log (user)
          // get many

          _context.next = 7;
          return regeneratorRuntime.awrap(firebase.firestore().collection('users').where('address', 'array-contains', 'Hoàng').get());

        case 7:
          responseMany = _context.sent;
          users = getManyDocument(responseMany); // const firstUser = responseMany.docs[0].data()
          // console.log(users)
          //create

          dataToCreate = {
            age: 100,
            name: 'Nguyen Thi N'
          }; // firebase.firestore().collection('users').add(dataToCreate)
          //update

          idToUpdate = 'dyexbHsCkHTqZ4SV1w8A';
          dataToUpdate = {
            name: 'Updated',
            phone: firebase.firestore.FieldValue.arryUnion('0986')
          };
          firebase.firestore().collection('users').doc(idToUpdate).update(dataToUpdate); //delete

          idToDelete = 'dyexbHsCkHTqZ4SV1w8A';
          firebase.firestore().collection('users').doc(idToDelete)["delete"]();

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getManyDocument = function getManyDocument(response) {
  var listData = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = response.docs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var doc = _step.value;
      listData.push(getOneDocument(doc)); // console.log(getOneDocument(doc))//for of la for cua array
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return listData;
};

var getOneDocument = function getOneDocument(response) {
  var data = response.data();
  data.id = response.id;
  return data;
};