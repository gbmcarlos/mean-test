var http = require('http');
var request = require('request');
var querystring = require('querystring');

module.exports = {
    get: function(req, res) {

        var options = {
            host: 'http://www.souqalmal.com',
            path: '/api/product'
        };

        request(options.host + options.path + '?' + querystring.stringify(req.query), function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(body);
            }
        })


    }
};