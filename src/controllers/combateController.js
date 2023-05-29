var combateModel = require("../models/combateModel");

function testar(req, res) {
    console.log("ENTRAMOS No COMBATE CARAI");
    res.json("ESTAMOS FUNCIONANDO!");
}

function inserirPoder(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var poder = req.body.poderServer;

    // Faça as validações dos valores
    if (poder == undefined) {
        res.status(400).send("Seu poder está indefinido!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        combateModel.inserirPoder(poder)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function combate(req, res) {

    var idCombatente = req.params.idCombatente;

    console.log(`Recuperando medidas em tempo real`);

    combateModel.combate(idCombatente).then(function (resultado) {
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

module.exports = {
    testar,
    combate,
    inserirPoder
}