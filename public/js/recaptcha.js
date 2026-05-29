document.querySelector('form[name="EmailForm"]').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = this;
  grecaptcha.ready(function () {
    grecaptcha.execute('6LemOAMtAAAAADcfQGxLFMOa64Hp-RODtP_pV9F2', { action: 'submit' }).then(function (token) {
      document.getElementById('g-recaptcha-response').value = token;
      form.submit();
    });
  });
});
