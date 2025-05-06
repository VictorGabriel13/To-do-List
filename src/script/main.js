function verificarRotina() {
    const msgAlert = document.getElementById("Alert");
    const checks = document.querySelectorAll('.todo-check');

    // Verifica se todos estão marcados
    const todosMarcados = Array.from(checks).every(check => check.checked);

    if (todosMarcados) {
        msgAlert.innerHTML = 'Rotina Concluída';
        msgAlert.classList.remove('erro'); // remove fundo vermelho
    } else {
        msgAlert.innerHTML = 'Rotina não Concluída';
        msgAlert.classList.add('erro'); // aplica fundo vermelho
    }

    msgAlert.style.display = 'block';

    setTimeout(() => {
        msgAlert.innerHTML = '';
        msgAlert.style.display = 'none';
        msgAlert.classList.remove('erro'); // volta para cor padrão
    }, 10000);
    
}