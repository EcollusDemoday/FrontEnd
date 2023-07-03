document.getElementById("registro-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio do formulário por padrão

  // Obtém os valores dos campos do formulário
  const nome = document.getElementsByName("nome")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const senhaemp = document.getElementsByName("senhaemp")[0].value;

  // Cria um objeto com os dados do usuário
  const usuario = {
    nome: nome,
    email: email,
    senhaemp: senhaemp
  };

  // Envia a requisição para verificar se o email já está em uso
  fetch('http://localhost:8080/usuario/verificar-email', {
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ email: email }),
  })
    .then(response => {
      if (response.ok) {
        // O email não está em uso, então você pode prosseguir com o cadastro
        // Envia a requisição para criar o usuário
        fetch('http://localhost:8080/usuario', {
          headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(usuario),
        })
          .then(response => {
            if (response.ok) {
              alert('Usuário criado com sucesso!');
              // Exiba a mensagem de sucesso para o usuário
              window.location.href = "logincadastrocliente.html";
            } else {
              // Ocorreu um erro ao criar o usuário
              console.log('Erro desconhecido ao criar usuário.');
            }
          })
          .catch(error => {
            console.error('Erro na solicitação.', error);
          });
      } else {
        // O email já está em uso
        alert('Email já está em uso.');
      }
    })
    .catch(error => {
      console.error('Erro na solicitação.', error);
    });
});


document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio do formulário por padrão

  // Obtém os valores dos campos do formulário
  const email = document.getElementsByName("email")[0].value;
  const senha = document.getElementsByName("senha")[0].value;

  // Cria um objeto com os dados de login
  const dadosLogin = {
    email: email,
    senha: senha
  };

  // Envia a requisição para fazer o login
  fetch('http://localhost:8080/usuario/login', {
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(dadosLogin),
  })
    .then(response => {
      if (response.ok) {
        // Login bem-sucedido, redireciona para a página de sucesso
        window.location.href = "index.html";
      } else {
        // Credenciais inválidas
        alert('Credenciais inválidas.');
      }
    })
    .catch(error => {
      alert('Erro na solicitação.', error);
      alert('Erro ao fazer a solicitação.');
    });
});
