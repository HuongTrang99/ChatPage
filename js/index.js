window.onload = () => {
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
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  console.log(firebase.app());

  firebase.auth().onAuthStateChanged((user)=>{
    if (user){
      console.log(user)
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      }
      if(user.emailVerified){
        view.setActiveScreen('chatPage')
      }
      else{
        alert('Please verify your email!')
        firebase.auth().signOut()
        view.setActiveScreen('loginPage')
      }


    }else{
      view.setActiveScreen('registerPage')
    }
  })
  // templateFirestore()

}
const templateFirestore = async () => {
  // get one
  const docId = '4azNLtD7jL3zTZuWuXAH'
  const response = await firebase.firestore().collection('users').doc(docId).get() //tra ve object co function doc, sau do tra ra ob co function get
  const user = getOneDocument(response)
  // console.log (user)

  // get many
  const responseMany = await firebase.firestore().collection('users').where('address', 'array-contains', 'Hoàng').get()
  const users = getManyDocument(responseMany)
  // const firstUser = responseMany.docs[0].data()
  // console.log(users)

  //create
  const dataToCreate = {
    age: 100,
    name: 'Nguyen Thi N'
  }
  // firebase.firestore().collection('users').add(dataToCreate)

  //update

  const idToUpdate = 'dyexbHsCkHTqZ4SV1w8A'
  const dataToUpdate = {
    name: 'Updated',
    phone: firebase.firestore.FieldValue.arryUnion ('0986')
  }
  // firebase.firestore().collection('users').doc(idToUpdate).update(dataToUpdate)

//delete
const idToDelete = 'dyexbHsCkHTqZ4SV1w8A'
firebase.firestore().collection('users').doc(idToDelete).delete()
}
const getManyDocument = (response) => {
  const listData = []
  for (const doc of response.docs) {
    listData.push(getOneDocument(doc))
    // console.log(getOneDocument(doc))//for of la for cua array
  }
  return listData
}

const getOneDocument = (response) => {
  const data = response.data()
  data.id = response.id
  return data
}