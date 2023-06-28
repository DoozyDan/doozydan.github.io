// get the element #name, #email, #message, and #cform from the DOM
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const cform = document.querySelector('#cform');
const cinput = document.getElementsByTagName('input');

// listen for when a user submits the form
// cform.addEventListener('submit', (e) => {
//         e.preventDefault();
//         // if all the inputs are valid, add success message
//         if (checkName() && checkEmail() && checkMessage()) {
//             // add success message next to submit button that disappears after 3 seconds
//             cform.insertAdjacentHTML('beforeend', '<p>Thanks for reaching out!</p>');
//             // remove submit message after 3 seconds
//             setTimeout(() => {
//                     cform.removeChild(cform.lastChild);
//                 }
//                 , 5000);
//             // reset the form
//             cform.reset();
//         }
//     }
// );

// check if forms are blank for 5 seconds and remove error message
cform.addEventListener('input',(e) => {
    e.preventDefault();
    setTimeout(() => {
            if (name.value === '' && email.value === '' && message.value === '') {
                // remove error message
                clearForm();
            }
        }
        ,5000);
});

// listen for when a user inputs into the form and set timer for when to check inputs
name.addEventListener('input', (e) => {
    e.preventDefault();
    setTimeout(() => {
            checkName();
        }
        , 1000);
});

email.addEventListener('input', (e) => {
    e.preventDefault();
    setTimeout(() => {
            checkEmail();
        }
        , 1000);
}
);

message.addEventListener('input', (e) => {
        e.preventDefault();
    setTimeout(() => {
            checkMessage();
        }
        , 1000);
}
);

// check name input
function checkName() {
    // get the value from the input
    const nameValue = name.value.trim();

    if (nameValue === '') {
        // show error
        setErrorFor(name, 'Name cannot be blank');
    } else if (nameValue.length < 3) {
        setErrorFor(name, 'Name must be at least 3 characters');
    } else if (containsNumbers(nameValue.trim())){
        setErrorFor(name, 'Name must not have numbers')
    } else {
            // show success
            setSuccessFor(name);
            return true;
        }
    return false;
}

// check email input
function checkEmail() {
    // get the value from the input
    const emailValue = email.value.trim();

    if (emailValue === '') {
        // show error
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        // show success
        setSuccessFor(email);
        return true;
    }
    return false;
}

// check message input
function checkMessage() {
    // get the value from the input
    const messageValue = message.value.trim();

    if (messageValue === '') {
        // show error
        setErrorFor(message, 'Message cannot be blank');
    } else if (messageValue.length < 10) {
        setErrorFor(message, 'Message must be at least 10 characters');
    } else {
        // show success
        setSuccessFor(message);
        return true;
    }
    return false;
}

// check if string contains numbers
function containsNumbers(str) {
    return /[0-9]/.test(str);
}

// check email is valid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// set error message
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add error message inside small
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error field';
    // add red border to form box
    input.style.border = '1px solid red';
    input.style.boxShadow = '0 0 0 0.2rem rgba(255, 0, 0, 0.25)';
    input.style.borderRadius = '0.25rem';
    input.style.transition = 'all 0.3s ease-in-out';
    input.style.outline = '1px solid red';
}

// set success message
function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // remove error message inside small
    small.innerText = '';
    // add success class
    formControl.className = 'form-control success field';
    // add green border to form box
    input.style.border = '1px solid green';
    input.style.boxShadow = '0 0 0 0.2rem rgba(0, 255, 0, 0.25)';
    input.style.borderRadius = '0.25rem';
    input.style.transition = 'all 0.3s ease-in-out';
    input.style.outline = '1px solid green';
}

// clear the form
function clearForm() {
    for ( let i = 0; i < cinput.length; i++ ) {
        if(cinput[i].value === 'Send') {
            return;
        } else {
            cinput[i].value = '';
            cinput[i].parentElement.classList.remove('error');
            cinput[i].parentElement.classList.remove('success');
            cinput[i].parentElement.querySelector('small').innerText = '';
            cinput[i].style.border = 'none';
            cinput[i].style.boxShadow = 'none';
            cinput[i].style.borderRadius = '0.25rem';
            cinput[i].style.transition = 'all 0.3s ease-in-out';
            cinput[i].style.outline = 'none';

            message.value = '';
            message.parentElement.classList.remove('error');
            message.parentElement.classList.remove('success');
            message.parentElement.querySelector('small').innerText = '';
            message.style.border = 'none';
            message.style.boxShadow = 'none';
            message.style.borderRadius = '0.25rem';
            message.style.transition = 'all 0.3s ease-in-out';
            message.style.outline = 'none';
        }
    }
}

// clear the form when the user clicks the button
cform.addEventListener('reset', (e) => {
        e.preventDefault();
        clearForm();
    }
);