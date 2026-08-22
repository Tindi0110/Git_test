const pwdInput = document.querySelector("#password");
const eyeIcon= document.querySelector("#eye-icon");

eyeIcon.addEventListener("click", toggleInput )
function toggleInput(){
    let currenttype = pwdInput.getAttribute("type");
    if (currenttype === 'password') {
        
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        pwdInput.setAttribute('type', 'text');


    }
    else {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        pwdInput.setAttribute('type', 'password')
    }
}