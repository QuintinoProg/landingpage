const form = document.querySelector("#form-aluno");

// FUNÇÃO DE VALIDAÇÃO: será chamada após o submit
function validarDados(nomeAluno, idadeAluno, emailAluno, nivel, experiencia) {

    if (nomeAluno.trim() === "") {
        return "nome";
    }

    if (idadeAluno < 8) {
        return "idade";
    }

    if (emailAluno.trim() === "") {
        return "email";
    }

    if (!nivel) {
        return "nivel";
    }

    if (experiencia.trim() === "") {
        return "experiencia";
    }

    return true;
}

// CRIA ARRAY
const alunos = [];

// EVENTO DE SUBMIT: quando usuário clica em cadastrar
form.addEventListener("submit", function (event) {

    // impede o comportamento padrão do formulário
    event.preventDefault();

    // limpa mensagem anterior
    const areaMensagem = document.querySelector("#area-mensagem");
    areaMensagem.innerHTML = "";

    // PREPARA MSG VALIDAÇÃO
    const mensagem = document.createElement("p");
    mensagem.classList.add("mensagem");
    areaMensagem.appendChild(mensagem);

    // CAPTURA DOS DADOS
    const nomeAluno = document.querySelector("#nomeAluno").value;
    const idadeAluno = document.querySelector("#idadeAluno").value;
    const emailAluno = document.querySelector("#emailAluno").value;
    const nivel = document.querySelector('input[name="pergunta1"]:checked');
    const experiencia = document.querySelector("#experienciaAluno").value;

    // CHAMA A VALIDAÇÃO
    const dadosValidos = validarDados(
        nomeAluno,
        idadeAluno,
        emailAluno,
        nivel,
        experiencia
    );

    // SE NÃO FOR VÁLIDO, PARA AQUI
    if (dadosValidos === "idade") {
        mensagem.textContent = "Você precisa ter no mínimo 8 anos.";
        mensagem.classList.add("mensagem-erro");
        return;

    }

    // CRIA OBJETO ALUNO
    const aluno = {
        nome: nomeAluno,
        idade: idadeAluno,
        email: emailAluno,
        nivel: nivel.value
    };

    // ENVIA OBJETO ALUNO PARA ARRAY ALUNOS
    alunos.push(aluno);


    // CONSULTA DO ARRAY ALUNOS + EXIBIÇÃO NA TELA
    const listaAlunos = document.querySelector("#lista-alunos");
    listaAlunos.textContent = "";

    for (let i = 0; i < alunos.length; i++) {
        const paragrafo = document.createElement("p");

        paragrafo.textContent =
            alunos[i].nome + " — Nível: " + alunos[i].nivel;

        listaAlunos.appendChild(paragrafo);
    }

    // PROCESSAMENTO
    if (aluno.nivel === "Iniciante") {
        mensagem.textContent = "Cadastro realizado! Você está começando a sua jornada.";
        mensagem.classList.add("mensagem-sucesso");

    } else if (aluno.nivel === "Intermediário") {
        mensagem.textContent = "Cadastro realizado! Ótimo, você já tem uma base de conhecimento.";
        mensagem.classList.add("mensagem-sucesso");

    } else {
        mensagem.textContent = "Cadastro realizado! Excelente, vamos aprofundar seus conhecimentos.";
        mensagem.classList.add("mensagem-sucesso");
    }

    // REDIRECIONAMENTO
    /*setTimeout(() => {
        window.location.href = "obrigado.html";
    }, 2000); */

});

