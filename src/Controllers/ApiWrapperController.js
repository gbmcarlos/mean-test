var wrapperService = require('./../Services/ApiWrapperService.js');

module.exports.controller = function(app) {

    /**
     * a home page route
     */
    app.get('/api-wrapper', function(req, res) {

        wrapperService.get(req, res);

    });

};