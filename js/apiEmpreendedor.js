document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário por padrão
  
    // Obtém os valores dos campos do formulário
    const nome = document.getElementsByName("nome")[0].value;
    const cnpj = document.getElementsByName("cnpj")[0].value;
    const senha = document.getElementsByName("senha")[0].value;
    
  
    // Cria um objeto com os dados do empreendedor
    const empreendedor = {
        nome: nome,
        cnpj: cnpj,
        senha: senha,
    };
  

    // Envia a requisição para a API
   fetch('http://localhost:8080/empreendedor/verificar-cnpj', {
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ cnpj: cnpj }),
  })
    .then(response => {
      if (response.ok) {
        // O email não está em uso, então você pode prosseguir com o cadastro
        // Envia a requisição para criar o usuário
        fetch('http://localhost:8080/empreendedor', {
          headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(empreendedor),
        })
        .then(response => {
            if (response.ok) {
              alert('Usuário criado com sucesso!');
              // Exiba a mensagem de sucesso para o usuário
              window.location.href = "logincadastroempreendedor.html";
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
        alert('Cnpj já está em uso.');
      }
    })
    .catch(error => {
      console.error('Erro na solicitação.', error);
    });
});

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário por padrão
  
    // Obtém os valores dos campos do formulário
    const cnpj = document.getElementsByName("cnpj")[0].value;
    const senha = document.getElementsByName("senha")[0].value;
  
    // Cria um objeto com os dados de login
    const dadosLogin = {
      cnpj: cnpj,
      senha: senha
    };
  
    // Envia a requisição para fazer o login
    fetch('http://localhost:8080/empreendedor/login', {
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
          window.location.href = "sucesso.html";
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
  