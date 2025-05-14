// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  // Track dark mode toggle event
  gtag('event', 'dark_mode_toggle', {
   agement',
    'event_label': 'Dark Mode Toggle'
  });
}

// Function to validate form
function validateForm(event) {
  event.preventDefault(); // Prevent form submission for demo purposes
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all required fields.');
    return false;
  }

  alert('Form submitted successfully!');
  // Track form submission event
  gtag('event', 'form_submission', {
    'event_category': 'engagement',
    'event_label': 'Contact Form',
    'form_data': {
      'name': name,
      'email': email,
      'message': message
    }
  });
  return false;
}

// Event listeners
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
document.getElementById('contactForm').addEventListener('submit', validateForm);

// Track video play event
document.getElementById('sampleVideo').addEventListener('play', function() {
  gtag('event', 'video_play', {
    'event_category': 'engagement',
    'event_label': 'Sample Video'
  });
});

// Track scroll depth event
window.addEventListener('scroll', function() {
  const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
  if (scrollDepth >= 90) {
    gtag('event', 'scroll_depth', {
      'event_category': 'engagement',
      'event_label': 'Scroll Depth',
      'scroll_depth': scrollDepth
    });
  }
});
