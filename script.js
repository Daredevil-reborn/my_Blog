// Function to toggle dark mode
function toggleDarkMode() {
 document.body.classList.toggle('dark-mode');
 // GA4 custom event
 gtag('event', 'dark_mode_toggle', {
   event_category: 'engagement',
   event_label: document.body.classList.contains('dark-mode') ? 'Enabled' : 'Disabled'
 });
}
// Function to validate form
function validateForm(event) {
 event.preventDefault();
 const name = document.getElementById('name').value.trim();
 const email = document.getElementById('email').value.trim();
 const message = document.getElementById('message').value.trim();
 if (!name || !email || !message) {
   alert('Please fill all required fields.');
   return false;
 }
 // GA4 custom event
 gtag('event', 'form_submitted', {
   event_category: 'engagement',
   event_label: 'Contact Form',
   name: name,
   email: email,
   message_length: message.length
 });
 alert('Form submitted successfully!');
 return true;
}
// Track YouTube video play (if used)
window.addEventListener('load', function () {
 const player = new YT.Player('iframe', {
   events: {
     'onStateChange': function (event) {
       if (event.data === YT.PlayerState.PLAYING) {
         gtag('event', 'video_play', {
           event_category: 'engagement',
           event_label: 'Introduction Video'
         });
       }
     }
   }
 });
});
// Track scroll depth (50% page view)
window.addEventListener('scroll', function () {
 const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
 if (scrollDepth >= 50) {
   gtag('event', 'scroll_depth', {
     event_category: 'engagement',
     event_label: 'Scrolled 50% or more'
   });
 }
});
// Track click on a specific button
document.querySelector('.fancy-button')?.addEventListener('click', function () {
 gtag('event', 'fancy_button_click', {
   event_category: 'engagement',
   event_label: 'Fancy Button Clicked'
 });
});
// Add event listeners
document.getElementById('darkModeToggle')?.addEventListener('click', toggleDarkMode);
document.querySelector('form')?.addEventListener('submit', validateForm);
