document
  .getElementById('resetPasswordForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const token = this.getAttribute('data-token');
    const password = this.password.value;

    fetch(`/reset-password?token=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert('Password reset successful');
          window.location.href = '/login';
        } else {
          alert('Error resetting password');
        }
      })
      .catch((error) => console.error('Error:', error));
  });
