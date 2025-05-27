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
        msgAlert.style.animation = 'none'
        msgAlert.classList.remove('erro'); // remove fundo vermelho
    } else {
        msgAlert.innerHTML = '⚠️ Rotina não Concluída ⚠️';
        msgAlert.style.animation = 'AnimationAlert 1s infinite ease-in'; // Animação de Erro
        msgAlert.classList.add('erro'); // aplica fundo vermelho
    }

    msgAlert.style.display = 'block';

    setTimeout(() => {
        msgAlert.innerHTML = '';
        msgAlert.style.display = 'none';
        msgAlert.classList.remove('erro'); // volta para cor padrão
    }, 1000000000); // 11 dias
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
    const hoje = new Date().toLocaleDateString(); // Ex: "17/05/2025"
    const ultimaData = localStorage.getItem('ultimaData');
    const limpar = document.getElementById("resetRotina");

    // Essa Função compara a data de hoje com a última data salva. Se for um novo dia, ele limpa o localStorage, atualiza a data e recarrega a página.

    if (ultimaData !== hoje) {
        localStorage.clear();
        localStorage.setItem('ultimaData', hoje); // Salva a nova data
        location.reload(); // Recarrega a página para limpar inputs visuais
    }
    else if(limpar.click = true) { // Botão de Limpeza;
        localStorage.clear();
        location.reload();
    }
}
 
/* function mostrarHoras() {
    const idTime = document.getElementById("time");
    const horaAtual = new Date();

    // Formata a hora no estilo HH:MM:SS
    const horaFormatada = horaAtual.toLocaleTimeString();

    // Insere a hora formatada no span
     
        idTime.textContent = horaFormatada + "AM";

}

// Chama a função uma vez ao carregar
mostrarHoras();

Código Anterior da Função de resetar a Rotina;

// Atualiza a cada segundo
setInterval(mostrarHoras, 1000); */

function mostrarHoras() {
    const idTime = document.getElementById("time");
    const horaAtual = new Date().toLocaleString();
    let hora = horaAtual // pega a hora atual (0-23)
    let horaFormatada = hora > 12 ? hora - 12 : (hora === 0 ? 12 : hora); // converte para 12h
    let periodo = hora >= 12 ? " PM" : " AM"; // define AM ou PM


    // Insere a hora formatada no span
    idTime.textContent = horaFormatada + periodo;

}

// Chama a função uma vez ao carregar
mostrarHoras();

// Atualiza a cada segundo
setInterval(mostrarHoras, 1000);

// Avaliar automaticamente ao carregar a página
function produtividade() {
  const checkboxes = document.getElementsByClassName('todo-check');
  let marcados = 0;

  Array.from(checkboxes).forEach(checkbox => {
    if (checkbox.checked) {
      marcados++;
    }
  });

  let mensagem = document.getElementById("idProdut");
  let msgRendimento = document.getElementById("idRendimento")
  if (marcados === 0) {
    mensagem.innerHTML = '<span style="color: #099452;">0%</span> 😴';
    msgRendimento.innerHTML = 'Nada Produtivo 👎🏼'
  } else if (marcados == 1) {
    mensagem.innerHTML = '<span style="color: #099452;">50%</span>😐';
    msgRendimento.innerHTML = 'Pouco Produtivo ☹️'
  } else if (marcados == 2) {
    mensagem.innerHTML = '<span style="color: #099452;">100%</span>😄';
    msgRendimento.innerHTML = 'Super produtivo 🚀'
  } else {
    mensagem.innerHTML = "Super produtivo 🚀";
  }
}

setInterval(produtividade, 500); // Atualiza o Texto a cada meio segundo