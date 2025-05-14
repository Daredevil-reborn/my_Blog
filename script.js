// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  // Track dark mode toggle event
  gtag('event', 'dark_mode_toggle', {
    'event_category': 'engagement',
    'event_label': 'Dark Mode Toggle',
    'page_section': 'Header',
    'button_type': 'Dark Mode Toggle'
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
    'page_section': 'Get In Touch',
    'form_field': 'Name, Email, Message'
  });
  return false;
}

// Event listeners
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
document.getElementById('contactForm').addEventListener('submit', validateForm);

// Track video play event
document.querySelector('iframe').addEventListener('load', function() {
  const iframe = this;
  const player = new YT.Player(iframe, {
    events: {
      'onStateChange': function(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          gtag('event', 'video_play', {
            'event_category': 'engagement',
            'event_label': 'Introduction Video',
            'page_section': 'Introduction Video'
          });
        }
      }
    }
  });
});

// Track scroll depth event
window.addEventListener('scroll', function() {
  const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
  if (scrollDepth >= 90) {
    gtag('event', 'scroll_depth', {
      'event_category': 'engagement',
      'event_label': 'Scroll Depth',
      'scroll_depth': scrollDepth,
      'page_section': 'Entire Page'
    });
  }
});

// Track "Click Me" button event
document.querySelector('.fancy-button').addEventListener('click', function() {
  gtag('event', 'button_click', {
    'event_category': 'engagement',
    'event_label': 'Fancy Button',
    'page_section': 'Fancy Button',
    'button_type': 'Fancy Button'
  });
});
