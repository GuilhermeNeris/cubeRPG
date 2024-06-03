var database = require("../database/config");

function receberMaiorPontuacao(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function receberMaiorPontuacao():", idUsuario);
    var instrucao = `
        SELECT MAX(pontuacao) as recorde FROM PartidaQuiz WHERE fkUsuario = ${idUsuario};
     `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function receberQtdPartidas(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function receberQtdPartidas():", idUsuario);
    var instrucao = `
        SELECT COUNT(idPartida) as qtdPartidas FROM PartidaQuiz WHERE fkUsuario = ${idUsuario};
     `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function receberPartidas(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function receberPartidas():", idUsuario);
    var instrucao = `
        SELECT * FROM PartidaQuiz WHERE fkUsuario = ${idUsuario};
     `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function atualizarPartidas(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarPartidas():", idUsuario);
    var instrucao = `
        SELECT idPartida, pontuacao FROM PartidaQuiz WHERE fkUsuario = ${idUsuario};
     `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    receberMaiorPontuacao,
    receberQtdPartidas,
    receberPartidas,
    atualizarPartidas
}
