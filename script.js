function toggleDarkMode() {
 document.body.classList.toggle('dark-mode');
}

// Button click
document.querySelectorAll('button').forEach(button => {
 button.addEventListener('click', () => {
   gtag('event', 'button_click', {
     event_category: 'engagement',
     event_label: button.innerText || button.id || 'unknown_button',
   });
 });
});
// Form submit
document.querySelectorAll('form').forEach(form => {
 form.addEventListener('submit', (e) => {
   e.preventDefault();
   gtag('event', 'form_submit', {
     event_category: 'engagement',
     event_label: form.id || form.name || 'unknown_form',
   });
   form.submit();
 });
});
// Video playback
const video = document.getElementById('myVideo');
if (video) {
 video.addEventListener('play', () => {
   gtag('event', 'video_play', {
     event_category: 'media',
     event_label: 'myVideo',
   });
 });
}
/*// Scroll depth
let scrollTracked = new Set();
window.addEventListener('scroll', () => {
 const scrollPosition = window.scrollY + window.innerHeight;
 const pageHeight = document.documentElement.scrollHeight;
 const scrollPercent = Math.round((scrollPosition / pageHeight) * 100);
 [25, 50, 75, 100].forEach(threshold => {
   if (scrollPercent >= threshold && !scrollTracked.has(threshold)) {
     scrollTracked.add(threshold);
     gtag('event', 'scroll_depth', {
       event_category: 'engagement',
       event_label: `${threshold}%`,
     });
   }
 });
});*/
// Outbound link clicks
document.querySelectorAll('a[href^="http"]').forEach(link => {
 if (link.hostname !== window.location.hostname) {
   link.addEventListener('click', () => {
     gtag('event', 'outbound_link_click', {
       event_category: 'engagement',
       event_label: link.href,
     });
   });
 }
});
// File downloads
document.querySelectorAll('a[href$=".pdf"], a[href$=".zip"], a[href$=".docx"]').forEach(link => {
 link.addEventListener('click', () => {
   gtag('event', 'file_download', {
     event_category: 'engagement',
     event_label: link.href,
   });
 });
});
