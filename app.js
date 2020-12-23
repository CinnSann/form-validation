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

  //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

  //@TODO: add the validation for password (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
})

function validateEmpty(input) {
  if (input.value === '') {
    showError(input)
    return true
  } else {
    showSuccess(input)
    return false
  }
}

function showError(input) {
  input.nextElementSibling.innerHTML = '<small class="error">Field is required!</small>'
}

function showSuccess (input) {
  input.nextElementSibling.innerHTML = '<small class="success">Thank you!</small>'
    console.log('you are ready to submit')
}

// function validatePassMatch(password1, password2){
//   //@TODO: check if the passwords match
// }

// function validateIsEmail(email){
//   //@TODO: check if input is an email
// }


// function validateMinLength(input){
//   //@TODO: check length
// }

// function checkIfNameExists(){
//  @TODO check username
// }
