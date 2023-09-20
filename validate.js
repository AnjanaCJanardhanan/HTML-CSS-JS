function validateForm() {
    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get the values of username and password fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
// Check if both fields are filled
if (username === '' || password === '') {
if (username === '') {
document.getElementById('usernameError').textContent = 'Username is required';
}
if (password === '') {
document.getElementById('passwordError').textContent = 'Password is required';
}
return false; // Prevent form submission
}
// Check if the password is more than 4 characters long
if (password.length < 5) {
document.getElementById('passwordError').textContent = 'Password must be at least 5 characters long';
return false; // Prevent form submission
}

return true; // Allow form submission
}

// Enable the submit button when both fields are filled
document.getElementById('username').addEventListener('input', enableSubmitButton);
document.getElementById('password').addEventListener('input', enableSubmitButton);
function enableSubmitButton() {
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var submitButton = document.getElementById('submitButton');

if (username !== '' && password.length >= 5) {
submitButton.disabled = false;
} else {
submitButton.disabled = true;
}
}