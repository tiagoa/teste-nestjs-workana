document
  .getElementById('registerForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data._id) {
          alert('Cadastro efetuado com sucesso!');
          window.location.href = '/login';
        } else {
          alert('Ocorreu um erro ao cadastrar!');
        }
      })
      .catch((error) => console.error('Error:', error));
  });
document.getElementById('zip').addEventListener('blur', function (e) {
  const cep = e.target.value;

  fetch(`/cep?cep=${cep}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert('CEP not found');
      } else {
        document.getElementById('street').value = data.street;
        document.getElementById('neighborhood').value = data.neighborhood;
        document.getElementById('city').value = data.city;
        document.getElementById('state').value = data.state;
      }
    })
    .catch((error) => console.error('Error:', error));
});
