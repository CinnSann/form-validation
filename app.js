// 1. get DOM element
const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')



form.addEventListener('submit', function (e) {
  e.preventDefault()

  validateEmpty(username)
  validateEmpty(email)
  // validateEmpty(password)
  // validateMinLength(username)
  // validateMinLength(username)
  // validateFirstName(firstName)
  validateIsEmail(email)

  //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

  //@TODO: add the validation for password (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  //@TODO: Code Challenge 5c: Starting from your refactored code,
   // 1. Implement and use the validatePassMatch() function to confirm both passwords match
   // 2. Implement and use the emailValidates() function to confirm it's a valid email. See: https://stackoverflow.com/a/46181

})

function validateEmpty(input) {
  const inputName = input.name
  if (input.value === '') {
    showError(input, `${inputName} is required` )
  } else {
    showSuccess(input)
  }
}

// input: HTMLInputElement (DOM) | msg: string
function showError(input, msg) {
  console.log(input)
  console.log(nextElementSibling)
  input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`
 
  // reverts the success border
  input.className='base-input'
}

function showSuccess (input, msg) {
  input.className = 'success-input'
  // removes the flash message
  input.nextElementSibling.innerHTML = '<small class="error">${msg}</small>'
}

function validatePassMatch(password1, password2){
  // password1.value === password2.value
  //@TODO: check if the passwords match
}

function validateIsEmail(email){
  if (emailValidates(email) {
    showSuccess(email)
  } else {
    showError(email, msg)
  }
}

// returns boolean
function emailValidates (email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return true
}

// input: HTMLInputElement
function validateMinLength(input) {
  // console.log(input.value.length)
  if (input.value.length < 7 || input.value.length > 15) {
    showError(input, msg:'Username is too short')
  } else {
    showSuccess(input)
  }
}

