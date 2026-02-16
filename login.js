const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let captcha = "";
for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
}
document.getElementById("captchaText").textContent = captcha;

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

  
    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();


    document.getElementById("nameerror").textContent = "";
    document.getElementById("emailerror").textContent = "";
    document.getElementById("passerror").textContent = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameerror").textContent = "Username required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailerror").textContent = "Email required";
        valid = false;
    }

    if (pass === "") {
        document.getElementById("passerror").textContent = "Password required";
        valid = false;
    } else if (pass.length < 6) {
        document.getElementById("passerror").textContent = "Minimum 6 characters";
        valid = false;
    }


    if (valid) {
        document.getElementById("msg").textContent = "Login Successful ✅";
    }
});
