function showTemplatePreview(n) {
  document.querySelectorAll('.template-card').forEach(card => card.classList.remove('active'));
  document.querySelector('.template-card:nth-child(' + n + ')').classList.add('active');
}
function hideTemplatePreview(n) {
  document.querySelector('.template-card:nth-child(' + n + ')').classList.remove('active');
}
const forbidden = /https?:\/\/|www\.|\.com|\.net|\.org|>/;
const textarea = document.getElementById('video-script');
let lastValue = '';
if (textarea) {
  textarea.addEventListener('input', function() {
    if (!forbidden.test(lastValue) && forbidden.test(textarea.value)) {
      window.close();
    }
    lastValue = textarea.value;
  });
}
function validateInput() {
  if (forbidden.test(textarea.value)) {
    window.close();
    return false;
  }
  alert('Your script is accepted!');
}
