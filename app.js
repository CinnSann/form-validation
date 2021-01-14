// 1. get DOM element
const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')



form.addEventListener('submit', function (e) {
  e.preventDefault()

  validateEmpty(username)
  validateEmpty(email)
  validateEmpty(password)
  validateMinLength(username, password, password2)
  // validatePassMatch(password, password2)
  ValidateisEmail(email)

  //@TODO: Code Challenge 5c: Starting from your refactored code,
   // 1. Implement and use the validatePassMatch() function to confirm both passwords match
   // 2. Implement and use the emailValidates() function to confirm it's a valid email. See: https://stackoverflow.com/a/46181

})

function validateEmpty(input) {
  const inputName = input.name
  if (input.value === '') {
    showError(input, `${input.name} is required`) // establish msg as a variable w. const @ 2:37
  } else {
    showSuccess(input)
  }
}


// input: HTMLInputElement (DOM) | msg: string
function showError(input, msg) {
  // console.log(input)
  // console.log(nextElementSibling)
  input.nextElementSibling.innerHTML = `<small class="error">${input.name} is required!</small>`
  input.className='base-input'
}

function showSuccess (input) {
  input.className = 'success-input'
  input.nextElementSibling.innerHTML = `<small class="success">accepted!</small>`
}

// function validatePassMatch(password, password2) {
//   password.value === password2.value
  
//   //@TODO: check if the passwords match
// }



function validateIsEmail(email){
const emailName = email.value
  if (emailValidates(email.value.match)) {
    showSuccess(email + `is valid`)
  } else {
    showError(email + `email is invalid`)
  }

}
// return boolean
function emailValidates (email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return true
}


// // input: HTMLInputElement
function validateMinLength(input) {
  console.log(input.value.length)
  if (input.value.length < 7) {
    showError(input)
  } else {
    showSuccess(input)
  }
}

