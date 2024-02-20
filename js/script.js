let btn = document.querySelector(".btn")
let full_name = document.querySelector(".name")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let confirm_password = document.querySelector(".confirm_password")
let name_error = document.querySelector(".name_error")
let email_error = document.querySelector(".email_error")
let password_error = document.querySelector(".password_error")
let confirm_password_error = document.querySelector(".confirm_password_error")
let validate_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let validate_password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!full_name.value){
        name_error.innerHTML ="Enter your name" 
    }else{
        name_error.innerHTML =""
    }
    if(!email.value){
        email_error.innerHTML ="Enter your email" 
    }else{
        if (email.value.match(validate_email)) {
            email_error.innerHTML =""
            
        }else{
            email_error.innerHTML ="Format thik koro"
        }
    }
    if (!password.value) {
        password_error.innerHTML ="password deo"
        
    }else{
        
        if (password.value.match(validate_password)) {
            password_error.innerHTML =""
        }else{
            password_error.innerHTML ="weak password"
        }
    }
    if(!confirm_password.value){
    confirm_password_error.innerHTML = "Confirm Password dite hobe"
    }else{
        if (password.value == confirm_password.value) {
            confirm_password_error.innerHTML = ""
            
        }else{
            confirm_password_error.innerHTML = "Don't Match"
        }
    }
}
)
/*let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let main = document.querySelector(".main")
let arr = []
btn.addEventListener("click",()=>{
    arr.push(input.value)
    ele()
})
let ele = () => {
    arr.map(item=>{
    const li = document.createElement("li")
    li.textContent = item
    main.appendChild(li)
}
)
}*/