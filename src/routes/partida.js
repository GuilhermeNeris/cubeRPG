var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");


router.get("/receberMaiorPontuacao/:idUsuario", function (req, res) {
    partidaController.receberMaiorPontuacao(req, res);
});

router.get("/receberQtdPartidas/:idUsuario", function (req, res) {
    partidaController.receberQtdPartidas(req, res);
});

router.get("/receberPartidas/:idUsuario", function (req, res) {
    partidaController.receberPartidas(req, res);
});

router.get("/atualizarPartidas/:idUsuario", function (req, res) {
    partidaController.atualizarPartidas(req, res);
});

module.exports = router;