// module 
import { signup } from "../modules/firebase.js";


// selectors
const signupForm = document.querySelector("#signupForm");
const result = document.querySelector("#result");
const regLogin = document.querySelector("#regLogin");

// functions
signupForm.onsubmit = async (e) => {
    e.preventDefault()
    const user = {
        email : e.target[0].value,
        password : e.target[1].value
    }

    const {success , error} = await signup(user);
    console.log(success);

    if (success) return (
        result.innerHTML = "register successful !",
        result.className = "text-green-400 font-semibold text-end capitalize",
        signupForm.classList = "p-8 bg-white border-2 rounded-lg shadow-lg border-green-200 flex flex-col gap-3 w-[350px]",
        
        setTimeout(() => {
            window.location.href = "index.html"
        }, 800)
        
    )

    result.innerHTML = "register unsuccessful !"
    result.className = "text-red-400 font-semibold text-end capitalize"
    signupForm.classList = "p-8 bg-white border-2 rounded-lg shadow-lg border-red-200 flex flex-col gap-3 w-[350px]"
}

regLogin.onclick = () => {
    location.href = "login.html"
}