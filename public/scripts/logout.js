document.addEventListener('click', function (e) {
  if (e.target.id !== 'logout') {
    return;
  }
  e.preventDefault();
  localStorage.removeItem('token');
  window.location.reload();
});
