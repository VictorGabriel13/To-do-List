function verificarRotina() {
    const msgAlert = document.getElementById("Alert");
    const checks = document.querySelectorAll('.todo-check');

    // Verifica se todos estão marcados
    const todosMarcados = Array.from(checks).every(check => check.checked);

    // Cria um array com o estado de cada checkbox
    const estados = Array.from(checks).map(check => check.checked);

    // Salva no localStorage
    localStorage.setItem('checksEstado', JSON.stringify(estados));

    // Exibe alerta com base nos estados
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

function rotinaText() {
    const text = document.querySelectorAll('.todo-text');

    // Verifica se todos estão com Anotação
    const InputText = Array.from(text).every(text => text.value);

    // Cria um array com o estado de cada Input de Texto
    const estados = Array.from(text).map(text => text.value);

    // Salva no localStorage
    localStorage.setItem('textEstado', JSON.stringify(estados));
}

function guardarRotina() {
    const checks = document.querySelectorAll('.todo-check');
    const estadosChecks = JSON.parse(localStorage.getItem('checksEstado'));

    if (estadosChecks) {
        checks.forEach((check, index) => {
            check.checked = estadosChecks[index];
        });
    }

    const textos = document.querySelectorAll('.todo-text');
    const estadosTextos = JSON.parse(localStorage.getItem('textEstado'));

    if (estadosTextos) {
        textos.forEach((input, index) => {
            input.value = estadosTextos[index];
        });
    }
}
function resetarRotina() {
    localStorage.clear();
    location.reload(); // recarrega a página para limpar os inputs visuais
}
