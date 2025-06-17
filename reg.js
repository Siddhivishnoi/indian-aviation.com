const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Simple validation
  if (!fullname || !email || !username || !password || !confirmPassword) {
    message.style.color = 'red';
    message.textContent = 'Please fill all fields.';
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = 'red';
    message.textContent = 'Passwords do not match.';
    return;
  }

  // Simulate success
  message.style.color = 'green';
  message.textContent = 'Registration successful! 🎉';

  // Clear form
  form.reset();
});
