document.documentElement.classList.add("js-enabled");
const ePasswordInput = document.querySelector("#password");
function fShowpass(event) {
    console.log(event);
    if (ePasswordInput.type === "text"){
        ePasswordInput.type = "password";
        event.currentTarget.textContent = "Montrer";

    }
    else {
        ePasswordInput.type = "text";
        event.currentTarget.textContent = "Masquer";
    }
}

document.querySelector(".showPass").addEventListener('click', fShowpass);

