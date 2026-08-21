const pwdInput = document.querySelector("#password");
const eyeIcon= document.querySelector("#eye-icon");

eyeIcon.addEventListener("click", toggleInput )
function toggleInput(){
    let currenttype = pwdInput.getAttribute("type");
    if (currenttype === 'password') {
        pwdInput.setAttribute('type', 'text')

    }
    else {
        pwdInput.setAttribute('type', 'password')
    }
}