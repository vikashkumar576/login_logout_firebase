// modules
import { guard, logout } from "../modules/firebase.js";

// protectors
guard("login.html");

// selectors 
const logoutBtn = document.querySelector("#logout");

// functions 
logoutBtn.onclick = async () => {
    const isLogged = await logout()
    console.log(isLogged);
}