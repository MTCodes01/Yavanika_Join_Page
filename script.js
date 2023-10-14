// JavaScript code
// Get the elements by their IDs
const emailText = document.getElementById('email-text');
const emailInput = document.getElementById('email-input');
const registerButton = document.getElementById('register-button');

// Add a click event listener to the emailText element
emailText.addEventListener('click', function () {
  emailText.style.display = 'none'; // Hide the text
  emailInput.style.display = 'block'; // Show the input field
});

// You can add an event listener to the button for further actions, e.g., handling registration.
registerButton.addEventListener('click', function () {
  const userEmail = emailInput.value; // Get the entered email
  // Perform registration or any other action you need here.
});
