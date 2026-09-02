const form = document.querySelector("#form-aluno");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const areaMensagem = document.querySelector("#area-mensagem");
    // limpa mensagens antigas
    areaMensagem.innerHTML = "";

    const nomeAluno = document.querySelector("#nomeAluno").value;
    const idadeAluno = document.querySelector("#idadeAluno").value;
    const emailAluno = document.querySelector("#emailAluno").value;
    const nivel = document.querySelector('input[name="pergunta1"]:checked');
    const experiencia = document.querySelector("#experienciaAluno").value;

    // Prepara mensagem 
    const mensagem = document.createElement("p");
    mensagem.classList.add("mensagem");
    areaMensagem.appendChild(mensagem);

    // Validação

    if (nomeAluno.trim() === "") {
        mensagem.textContent = "Preencha seu nome.";
        mensagem.classList.add("mensagem-erro");
        return;
    }

    if (idadeAluno < 8) {
        mensagem.textContent = "Aulas somente a partir de 8 anos. :(";
        mensagem.classList.add("mensagem-erro");
        return;
    }

    if (emailAluno.trim() === "") {
        mensagem.textContent = "Preencha seu email.";
        mensagem.classList.add("mensagem-erro");
        return;
    }

    if (!nivel) {
        mensagem.textContent = "Selecione seu nível!";
        mensagem.classList.add("mensagem-erro");
        return;
    }

    if (experiencia.trim() === "") {
        mensagem.textContent = "Preencha sua experiência!";
        mensagem.classList.add("mensagem-erro");
        return;
    }

    // Processamento
    if (nivel.value === "Iniciante") {
        mensagem.textContent = "Cadastro realizado! Você está começando a sua jornada.";
        mensagem.classList.add("mensagem-sucesso");
    }
    else if (nivel.value === "Intermediário") {
        mensagem.textContent = "Cadastro realizado! Ótimo, você já tem uma base de conhecimento.";
        mensagem.classList.add("mensagem-sucesso");
    }
    else {
        mensagem.textContent = "Cadastro realizado! Excelente, vamos aprofundar seus conhecimentos.";
        mensagem.classList.add("mensagem-sucesso");
    }

    setTimeout(() => {
        window.location.href = "obrigado.html";
    }, 2000);

});

