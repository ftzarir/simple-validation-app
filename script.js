var emailbtn = document.querySelector(".emailbtn")
emailbtn.addEventListener("click", emailbtnclick)
var text = document.querySelector(".validation")
var phonebtn = document.querySelector(".phone")
phonebtn.addEventListener("click", phonebtnclick)
var codebtn = document.querySelector(".code")
codebtn.addEventListener("click", codebtnclick)
function emailbtnclick() {
    var email = prompt('please enter your email:')
    var emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.match(emailpattern)) {
        text.innerHTML = "Your email is valid"
    }
    else {
        text.innerHTML = "Your email is not valid"
    }

}
function phonebtnclick() {
    var phone = prompt('please enter your phone number:')
    var phonepattern = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
    if (phone.match(phonepattern)) {
        text.innerHTML = "Your phone number is valid"
    }
    else {
        text.innerHTML = "Your phone number is not valid"
    }

}
function codebtnclick() {
    var code = prompt('please enter your post code:')
    var codepattern = /^[0-9]{4}$/
    if (code.match(codepattern)) {
        text.innerHTML = "Your postal code is valid"
    }
    else {
        text.innerHTML = "Your postal code is not valid"
    }

}