const email = document.querySelector(".email-input");
const btn = document.querySelector(".btn");
const emailError = document.querySelector(".email-error")
const inputWrapper = document.querySelector(".input-wrapper")

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let emailValue = email.value;
    if(emailValue){
    }else{
        emailError.style.display="block";
        emailError.style.color="red";
        inputWrapper.classList.add("error")
    }
})



function checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}