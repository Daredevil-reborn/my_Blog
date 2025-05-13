function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all required fields.');
    return false;
  }

  alert('Form submitted successfully!');
  return false; // prevent actual submission for demo
}
