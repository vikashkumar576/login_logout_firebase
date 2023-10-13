// module 
import { signup } from "../modules/firebase.js";


// selectors
const signupForm = document.querySelector("#signupForm");
const result = document.querySelector("#result");
const regLogin = document.querySelector("#regLogin");
const generatePasswordBtn = document.querySelector("#generate_password");
const genPassword = document.querySelector("#genPassword");
const passShow = document.querySelector("#passShow");
const loader = document.querySelector("#loader");

// functions

// form function
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

// register page function

regLogin.onclick = () => {
    location.href = "login.html"
}

// genetate password function

generatePasswordBtn.onclick = async () => {
    try {
        loader.style.display = "inline-block";
        const {data:{password}} = await axios.get("http://localhost:8080/generate-password")
        genPassword.value = password;
    } 
    catch (error) {
        alert(error.message);

    }
    finally
    {
        loader.style.display = "none";
        
    }
}

// show/hide password function

passShow.onclick = function () {

    const parent = this.nextElementSibling
    if(parent.type == "password"){
        this.classList.add("bx-show-alt");
        this.classList.remove("bx-hide");
        parent.type = "text"
    } 
    else{
        parent.type = "password"
        this.classList.remove("bx-show-alt");
        this.classList.add("bx-hide");
    }
}