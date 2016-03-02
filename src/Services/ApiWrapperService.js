var http = require('http');
var request = require('request');

module.exports = {
    get: function(req, res) {

        var options = {
            host: 'http://www.souqalmal.com',
            path: '/api/product?apiCountry=ae&apiLanguage=en&categoryId=543857a388de100000ae90bb&categoryName=credit-cards&filter=%7B%22category%22:%22credit-cards%22,%22userSalary%22:%220%22%7D&limit=25&order=false&pageNum=1&skip=0'
        };

        request(options.host + options.path, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(body);
            }
        })


    }
};