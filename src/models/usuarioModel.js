var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar():", email, senha)
    var instrucaoSql = `
        SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de" +
        "'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(email) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de" +
        "'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():", email);

    var instrucaoSql = `SELECT email FROM Usuario WHERE email = '${email}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function enviar(autor, assunto, textoFeedback, idUsuario){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de" +
        "'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", autor, assunto, textoFeedback, idUsuario);
    
    var instrucaoSql = `INSERT INTO Feedback (autor, assunto, textoFeedback, fkUsuario) VALUES ('${autor}','${assunto}','${textoFeedback}',${idUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function RegistrarQuiz(idUsuario, score){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de" +
        "'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function RegistrarQuiz():", idUsuario, score);

    var instrucaoSql = `INSERT INTO PartidaQuiz (fkUsuario, fkQuiz, pontuacao, dataJogada) VALUES (${idUsuario}, 1, ${score}, NOW());
    `;  

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function receberFeedback(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function receberFeedback():", idUsuario);
    var instrucao = `
        SELECT COUNT(idFeedback) as qtdFeedbacks FROM Feedback WHERE fkUsuario = ${idUsuario};
     `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    listar,
    enviar,
    RegistrarQuiz,
    receberFeedback
};
