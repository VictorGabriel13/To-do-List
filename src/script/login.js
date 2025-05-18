 function login() {
        var loginButton = document.getElementById("Login-suap");
        loginButton.innerHTML = 'Carregando...'
        setTimeout(() => {
            window.location.href = suap.getLoginURL();
        }, 3000);
        if(loginButton.suap.getLoginURL() = true) {
            setTimeout(() => {
                loginButton.innerHTML = 'Autenticado';
            }, 3000);
        }
      }