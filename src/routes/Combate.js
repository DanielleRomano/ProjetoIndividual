var express = require("express");
var router = express.Router();

var combateController = require("../controllers/combateController");

router.get("/", function (req, res) {
    combateController.testar(req, res);
});

router.post("/inserirPoder", function (req, res) {
    combateController.inserirPoder(req, res);
})

router.get("/combate/:idCombatente", function (req, res) {
    combateController.combate(req, res);
})

module.exports = router;