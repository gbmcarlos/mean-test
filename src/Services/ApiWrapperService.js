var http = require('http');
var request = require('request');
var querystring = require('querystring');
var Stats = require('./../Models/Stats');

module.exports = {
    get: function(req, res) {

        var options = {
            host: 'http://www.souqalmal.com',
            path: '/api/product',
            query: querystring.stringify(req.query)
        };

        request(options.host + options.path + '?' + options.query, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                Stats.newStat(options.query);

                res.json(body);
            }
        })


    }
};