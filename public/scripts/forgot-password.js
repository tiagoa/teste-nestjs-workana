document
  .getElementById('forgotPasswordForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.email.value;

    fetch('/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert('Reset link sent to email');
        } else {
          alert('Error sending reset link');
        }
      })
      .catch((error) => console.error('Error:', error));
  });
