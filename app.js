// Demo forms show a message only. No data is sent or saved.
document.querySelectorAll('.demo-form').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var message = form.querySelector('.notice');
    message.hidden = false;
    message.focus();
  });
});
