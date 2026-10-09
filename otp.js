// Static OTP demo. No email delivery or real authentication.
var emailForm = document.getElementById('email-form');
var otpStep = document.getElementById('otp-step');
var otpInput = document.getElementById('otp-code');
var error = document.getElementById('otp-error');
var code, expires;
emailForm.addEventListener('submit', function (event) {
  event.preventDefault();
  code = String(100000 + crypto.getRandomValues(new Uint32Array(1))[0] % 900000);
  expires = Date.now() + 120000;
  document.getElementById('demo-code').textContent = code;
  document.getElementById('otp-message').textContent = 'Demo code for ' + document.getElementById('client-email').value.trim();
  emailForm.hidden = true;
  otpStep.hidden = false;
  error.hidden = true;
  otpInput.value = '';
  otpInput.focus();
});
document.getElementById('otp-form').addEventListener('submit', function (event) {
  event.preventDefault();
  if (Date.now() <= expires && otpInput.value === code) window.location.href = 'client.html';
  else { error.textContent = Date.now() > expires ? 'Code expired. Get a new demo code.' : 'Incorrect code. Enter the demo OTP shown above.'; error.hidden = false; }
});
document.getElementById('change-email').addEventListener('click', function () {
  code = null;
  otpStep.hidden = true;
  emailForm.hidden = false;
  document.getElementById('client-email').focus();
});
