//nhung gi tuong tac voi database
const model = {}
model.currentUser = undefined

model.register = async (data) => {
    try {
        const response = await firebase.auth()
            .createUserWithEmailAndPassword(data.email, data.password)//firebase authen la dich vu cua fire base, khi su dung dich vu cua firebase phai import vao
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        // console.log(response)
        firebase.auth().currentUser.sendEmailVerification()
    } catch (err) {
        alert(err.message)
        console.elog(error)
    }
}
model.login = async ({ email, password }) => {
    // const respone = await firebase.auth().signInWithEmailAndPassword(data.email, dapassword)
    try {
        const response = await firebase.auth()
            .signInWithEmailAndPassword(email, password)//firebase authen la dich vu cua fire base, khi su dung dich vu cua firebase phai import vao
        console.log(response)
        if (response && response.user.emailVerified){
            //vao man chat
            model.currentUser={
                email: response.user.email,
                displayName: response.user.displayName
            }
            view.setActiveScreen('chatPage')
        }
        
        else{
            alert('Please verify your email')

        }

    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}