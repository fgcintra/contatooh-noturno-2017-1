// contatooh/server.js

/**
 * Versão SEM o express
 */
/*
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sou um	servidor criado	pelo Node.js!\n');
}).listen(3000, 'programacao-web.local');
*/

/**
 * Versão COM o express
 */
/*var	http = require('http');
var	app	= require('./config/express')();

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server escutando na porta ' + app.get('port'));
});*/

/**
 * Versão COM o express, mongose e passport
 */

var	http = require('http');
var express = require('express');
var	app	= require('./config/express')();

require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});