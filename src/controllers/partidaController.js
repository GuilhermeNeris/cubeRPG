var partidaModel = require("../models/partidaModel");

function receberMaiorPontuacao(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando partidas`);

    partidaModel.receberMaiorPontuacao(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas partidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function receberQtdPartidas(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando partidas`);

    partidaModel.receberQtdPartidas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas partidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function receberPartidas(req, res) {
    var idUsuario = req.params.idUsuario;

    partidaModel.receberPartidas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function atualizarPartidas(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando partidas`);

    partidaModel.atualizarPartidas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas partidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    receberMaiorPontuacao,
    receberQtdPartidas,
    receberPartidas,
    atualizarPartidas
}

