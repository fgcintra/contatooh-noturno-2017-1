// app/controllers/contato.js

/*var contatos = [
    {
        _id: 1, nome: 'João Silva',
        email: 'cont1@empresa.com.br',
        telefone: '16-3722-0000'
    },
    {
        _id: 2, nome: 'João Plenário',
        email: 'cont2@empresa.com.br',
        telefone: '16-3722-0000'
    },
    {
        _id: 3, nome: 'Maria Ferreira',
        email: 'cont3@empresa.com.br',
        telefone: '16-3722-0000'
    }
];*/

module.exports = function(app) {

    var Contato = app.models.contato;
    var	controller = {};

    /**
     * Ação de listagem dos contatos
     */
    controller.listaContatos = function(req, res) {
        
        //res.json(contatos);

        //Contato.find().exec().then(
        Contato.find().populate('emergencia').exec().then(
            function(contatos) {
                res.json(contatos);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );

    };

    /**
     * Ação de obtenção de um contato especifico
     */
    controller.obtemContato = function(req, res) {

        /*var idContato = req.params.id;

        var	contato = contatos.filter(function(contato)	{
            return contato._id == idContato;
        })[0];

        contato	? res.json(contato)	: res.status(404).send('Contato	não	encontrado');

        console.log(req.params.id);*/

        /*var filtrados = contatos.filter(function(contato) {
            return contato._id == req.params.id;
        });

        if (filtrados.length > 0) {
            res.json(filtrados[0]);
        } else {
            res.status(404).send('Contato ' + req.params.id + ' Não encontrado.');
        }*/

        var _id = req.params.id;
        
        Contato.findById(_id).exec().then(
            function(contato) {
                if (!contato) {
                    throw new Error("Contato não encontrado");
                }
                res.json(contato);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );

    };

    /**
     * Ação para exclusão de um contato
     */
    controller.removeContato = function(req, res) {

        /*var idContato = req.params.id;

        contatos = contatos.filter(function(contato) {
            return contato._id != idContato;
        });

        res.status(204).end();

        console.log('API: removeContato: ' + idContato);*/

        /*contatos = contatos.filter(function(contato) {
            return contato._id != req.params.id;
        });

        res.status(204).end();*/

        var _id = req.params.id;
        
        Contato.remove({"_id" : _id}).exec().then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        );

    };

    // var ID_CONTATO_INC = 3;

    /**
     * Ação para criação ou alteração de um contato
     */
    controller.salvaContato = function(req, res) {

        /*var contato = req.body;

        contato = contato._id ? atualiza(contato) : adiciona(contato);

        res.json(contato);*/

        var _id = req.body._id;

        /**
         * testando por undefined
         */
        req.body.emergencia = req.body.emergencia || null;

        if(_id) {
            Contato.findByIdAndUpdate(_id, req.body).exec().then(
                function(contato) {
                    res.json(contato);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Contato.create(req.body).then(
                function(contato) {
                    res.status(201).json(contato);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }

    }

    /*function adiciona(contatoNovo) {

        contatoNovo._id = ++ID_CONTATO_INC;

        contatos.push(contatoNovo);

        return contatoNovo;

    }*/

    /*function atualiza(contatoExistente) {

        contatos = contatos.map(function(contato) {

            if (contato._id == contatoExistente._id) {
                contato = contatoExistente;
            }

            return contato;

        });

        return contatoExistente;

    }*/

    return controller;

};
