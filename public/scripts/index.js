document.addEventListener('DOMContentLoaded', function () {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
  } else {
    fetch('/home', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error();
        }
        return response.text()
      })
      .then((html) => {
        document.body.innerHTML = html;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = '/login';
      });
  }
});
