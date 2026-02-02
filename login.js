function returnValidationForm() {

    // Input values
    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    // Correct credentials
    let correctUser = "admin";
    let correctEmail = "admin@lostfound.com";
    let correctPass = "admin123";

    let valid = true;

    // Clear errors
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("passerror").innerHTML = "";

    // Empty validations
    if (name === "") {
        document.getElementById("nameerror").innerHTML = "Username required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailerror").innerHTML = "Email required";
        valid = false;
    }

    if (pass === "") {
        document.getElementById("passerror").innerHTML = "Password required";
        valid = false;
    } else if (pass.length < 6) {
        document.getElementById("passerror").innerHTML = "Minimum 6 characters";
        valid = false;
    }

    // Credential check
    if (valid) {
        if (name === correctUser && email === correctEmail && pass === correctPass) {
            alert("Login Successful ✅");
            return true; // allow submit
        } else {
            alert("Invalid login credentials ❌");
            return false; // stop submit
        }
    }

    return false;
}
