
// 1. IMPORTAÇÃO DO MÓDULO HTTP
const http = require("http");

// 2. DADOS UTILIZADOS PELA API
const alunos = [];

const dados = {
    mensagem: "Olá, Quintino! Dados enviados pelo backend.",
    status: "ok"
};

const erro = {
    mensagem: "Rota não encontrada.",
    status: "ERROR 404"
};

// 3. CABEÇALHOS DAS RESPOSTAS HTTP
const cabecalhos = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
};

// 4. CRIAÇÃO E CONFIGURAÇÃO DAS ROTAS
const servidor = http.createServer((req, res) => {

    // Permite a comunicação entre o frontend e a API
    if (req.method === "OPTIONS") {
        res.writeHead(204, {
            ...cabecalhos,
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        });
        res.end();
        return;
    }

    // CONSULTA: retorna a lista de alunos    
    if (req.method === "GET" && req.url === "/alunos") {
        res.writeHead(200, cabecalhos);
        res.end(JSON.stringify(alunos));
        return;
    }

    // CADASTRO: recebe um novo aluno
    if (req.method === "POST" && req.url === "/alunos") {
        let corpo = "";

        req.on("data", parte => {
            corpo += parte;
        });

        req.on("end", () => {
            try {
                const aluno = JSON.parse(corpo);

                alunos.push(aluno);

                res.writeHead(201, cabecalhos);
                res.end(JSON.stringify({
                    mensagem: "Aluno cadastrado com sucesso!",
                    aluno: aluno
                }));
            } catch (erro) {
                res.writeHead(400, cabecalhos);
                res.end(JSON.stringify({
                    mensagem: "Os dados enviados não são um JSON válido."
                }));
            }
        });

        return;
    }

    // ROTA NÃO ENCONTRADA
    res.writeHead(404, cabecalhos);
    res.end(JSON.stringify(erro));
});

// 5. INICIALIZAÇÃO DO SERVIDOR
servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
