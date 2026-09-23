const form = document.querySelector("#form-aluno");

// FUNÇÃO DE VALIDAÇÃO: será chamada após o submit
function validarDados(nomeAluno, idadeAluno, emailAluno, nivel, experiencia) {

    if (nomeAluno.trim() === "") {
        return false;
    }

    if (idadeAluno < 8) {
        return false;
    }

    if (emailAluno.trim() === "") {
        return false;
    }

    if (!nivel) {
        return false;
    }

    if (experiencia.trim() === "") {
        return false;
    }

    return true;
}

// EVENTO DE SUBMIT: quando usuário clica em cadastrar
form.addEventListener("submit", function (event) {

    // impede o comportamento padrão do formulário
    event.preventDefault();

    // limpa mensagem anterior
    const areaMensagem = document.querySelector("#area-mensagem");
    areaMensagem.innerHTML = "";

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
    if (!dadosValidos) {
        return;
    }

    // PREPARA A MENSAGEM
    const mensagem = document.createElement("p");
    mensagem.classList.add("mensagem");
    areaMensagem.appendChild(mensagem);

    // PROCESSAMENTO
    if (nivel.value === "Iniciante") {
        mensagem.textContent = "Cadastro realizado! Você está começando a sua jornada.";
        mensagem.classList.add("mensagem-sucesso");

    } else if (nivel.value === "Intermediário") {
        mensagem.textContent = "Cadastro realizado! Ótimo, você já tem uma base de conhecimento.";
        mensagem.classList.add("mensagem-sucesso");

    } else {
        mensagem.textContent = "Cadastro realizado! Excelente, vamos aprofundar seus conhecimentos.";
        mensagem.classList.add("mensagem-sucesso");
    }

    // REDIRECIONAMENTO
    setTimeout(() => {
        window.location.href = "obrigado.html";
    }, 2000);

});