//nhung gi tuong tac voi database
const model = {}
model.currentUser = undefined
model.conversations = [] //list cuoc tro chuyen
model.currentConversation = undefined //cuoc tro chuyen hien tai

model.register = async (data) => {
    try {
        const response = await firebase.auth()
            .createUserWithEmailAndPassword(data.email, data.password) //firebase authen la dich vu cua fire base, khi su dung dich vu cua firebase phai import vao
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        console.log(response)
        firebase.auth().currentUser.sendEmailVerification()
    } catch (err) {
        alert(err.message)
        console.elog(error)
    }
}
model.login = async ({
    email,
    password
}) => {
    const respone = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    try {
        firebase.auth().signInWithEmailAndPassword(email, password) //firebase authen la dich vu cua fire base, khi su dung dich vu cua firebase phai import vao
        console.log(response)
        if (response && response.user.emailVerified) {
            //vao man chat
            model.currentUser = {
                email: response.user.email,
                displayName: response.user.displayName
            }
            view.setActiveScreen('chatPage')
        } else {
            alert('Please verify your email')

        }

    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}
model.getConversations = async () => {
    const response = await firebase.firestore().collection('conversations').
    where('users', 'array-contains', model.currentUser.email).get()

    model.conversations = getManyDocument(response)
    if (model.conversations.length > 0) {
        model.currentConversation = model.conversations[0] // lay tin nhan o vi tri dau tien
        view.showCurrentConversation()
        for (message of model.currentConversation.messages) {
            view.addMessage(message)
        }
    }
}
model.addMessage=(message)=>{
    dataToUpdate ={
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    }
    firebase.firestore().collection('conversations').doc(model.currentConversation.id).update(dataToUpdate)
}
model.listenConversationChange=()=>{
    let isFirstRun = true
    firebase.firestore().collection('conversations').where('users', 'array-contains', model.currentUser.email).
    onSnapshot((snapshot) =>{
        if (isFirstRun){
            isFirstrun = false
            return
        }
        console.log(snapshot.docChanges())
        for (oneChange of snapshot.docChanges()){
            console.log(getOneDocument(oneChange.doc))
            if (docData.id === model.currentConversation.id){
                model.currentConversation=docData
                view.addMessage(model.currentConversation.messages[model.currentConversation.messages.length-1])
            }
        } 
    })//moi lan onSnapshot se truyen len 1 function
}