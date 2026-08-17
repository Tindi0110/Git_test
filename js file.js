const button = document.querySelector("button")

function greet(){
    const name = prompt("What is your name?")
    const greeting = document.querySelector("#greetings")
    greeting.textContent = `Hello ${name}, i hope you are doing so good`
}
button.addEventListener("click", greet)
