const controller = {}
controller.register = (data) => {
  if (data.firstName === '') {
    view
      .setErrorMessage('first-name-error', 'Please input your first name')

  }
  else {
    view
      .setErrorMessage('first-name-error', '')

  }
  if (data.lastName === '') {
    view
      .setErrorMessage('last-name-error', 'Please input your last name')

  }
  else {
    view
      .setErrorMessage('last-name-error', '')
  }
  if (data.email === '') {
    view
      .setErrorMessage('email-error', 'Please input your email')

  }
  else {
    view
      .setErrorMessage('email-error', '')
  }
  view.setErrorMessage('password-error', data.password === '' ? 'Please input your password' : '')
  // view.setErrorMessage('confirm-password-error', data.confirmPassword===''?'Please input your confirm password':'')
  // view.setErrorMessage('password-error', data.confirmPassword !==data.password ? "password didn't match":'')
  if (data.confirmPassword === '') {
    view
      .setErrorMessage('confirm-password-error', 'Please input your confirm password')
  } else if (data.confirmPassword !== data.password) {
    view
      .setErrorMessage('confirm-password-error', "password didn't match")
  } else {
    view
      .setErrorMessage('confirm-password-error', " ")
  }
  if (data.firstName !== ''
    && data.lastName !== ''
    && data.email !== ''
    && data.password !== ''
    && data.confirmPassword === data.password) {
    model.register(data);
  }


}

controller.login = ({email, password}) => {
  view
  .setErrorMessage('email-error', email===''? 'Please input your email':'')
  view.setErrorMessage('password-error', password===''? 'Please input your password':'')
  if(email!=='' && password!==''){
    model.login({email, password})
  }

}