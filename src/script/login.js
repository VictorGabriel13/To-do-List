function login() {
    var loginButton = document.getElementById("Login-suap");
    loginButton.innerHTML = 'Carregando...';
    setTimeout(() => {
        window.location.href = suap.getLoginURL();
    }, 3000);
  /*  if (loginButton.suap.getLoginURL()) {
        setTimeout(() => {
            loginButton.innerHTML = 'Autenticado';
            loginButton.style.backgroundColor = '#dc143c';
        }, 3000);
    }  Código em desenvolvimento*/
}

// Precisa Melhora esse Botão de Login, Adicionar um localStorage e Melhora esse códigos;