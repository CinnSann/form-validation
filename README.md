# Javascript play - Form Validation
## This challenge containing 3 parts (abc) solves the problem of having empty values in a form by adding validation to those empty fields that alert the user to fill them in.

### In 5a portion of this challenge:
    - I was able to experience running yarn and using it run the tailwind build command. This allowed me to add custom css to my form in javascript. This form validation repo can be used to explore conditionals. For example:

    // conditionals 
    
    if (usernameValue === "" ) { 
        // what should happen 
        console.log('Please enter your username!')

        alert("Please enter your username")
        
 ### In 5b portion of this challenge:
    I was instructed to refactor my code and add validations for email and password using a new blueprint discussed in lecture.
    
    //@TODO: add the validation for email (Code Challenge 5a)
    //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

    //@TODO: add the validation for password (Code Challenge 5a)
    //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
    })
    
    function validateEmpty(input) {
       console.log(input)
       if (input.value === '') {
           showError(input)
       } else {
         console.log('Sending to server')
           showSuccess(input)
       }
       //@TODO: add the validation for email
     }

       //@TODO: add the validation for password
     })
     function showError(input){
       // steps to do this...
       console.log('input is empty')
     }

     function showSuccess () {
         console.log('you are ready to submit')
     }


### happy coding <3 (;
