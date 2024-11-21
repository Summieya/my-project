document.getElementById('create-account').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get password values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Reset error message
    const passwordError = document.getElementById('wrong-password');
    passwordError.textContent = '';

    // Check if passwords match
    if (password !== confirmPassword) {
      passwordError.textContent = 'Passwords do not match.';
    } else {
      // Passwords match, proceed with form submission
      // You can add additional logic here to handle form submission
      alert('Passwords match! Form submitted.');
      // Uncomment below line to actually submit the form
      // document.getElementById('password-form').submit();
    }
  });