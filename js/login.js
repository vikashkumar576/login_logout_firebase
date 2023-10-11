// module
import { login } from "../modules/firebase.js";

// selectors
const loginForm = document.querySelector("#loginForm");

// functions

loginForm.onsubmit = async (e) => {

    e.preventDefault();
    const user = {
        email : e.target[0].value.trim(),
        password : e.target[1].value.trim()
    }

    const {success} = await login(user);
    if(success) return (
        location.href = "index.html"
    )

    alert("invalid credentials")

}