var wrapperService = require('./../Services/ApiWrapperService.js');

module.exports.controller = function(app) {

    /**
     * a home page route
     */
    app.get('/api-wrapper', function(req, res) {

        var response = wrapperService.get(req);
        res.json(response);

    });

};