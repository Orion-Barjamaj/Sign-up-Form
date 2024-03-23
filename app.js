const submitButton = document.querySelector("#submit");
const passHolder = document.querySelector("#confirmPassHolder");
const text = document.createElement("div");

submitButton.addEventListener("click", (event) => {
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    passHolder.appendChild(text);
    if(confirm_password === password){;
        submitButton.setAttribute('type', 'submit');
        text.remove();
    }else if(confirm_password != password){
        submitButton.setAttribute('type', 'button');
        text.textContent = "* Password Does Not Match!";
        text.style.cssText = "color: red; font-size: 15px; letter-spacing: 1px;";
    }
});