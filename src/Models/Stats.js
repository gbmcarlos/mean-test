/**
 * Created by gbmcarlos on 3/3/16.
 */
var mongoose = require('mongoose');

var Stat = mongoose.model('Stat', {

    timestamp: Date,
    category: String,
    sort: {
        filter: String,
        direction: String
    },
    resultsNumber: Number,
    pageNum: Number,
    quickFilters: [String],
    userSalary: Number,
    email_address: String

}, 'statistics');

module.exports = {

    newStat: function(query, body) {

        var components = query.split('&');
        var _components = {};
        for (var i in components) {
            var parts = components[i].split('=');
            _components[parts[0]] = decodeURIComponent(parts[1]);
        }
        _components.filter = JSON.parse(_components.filter);

        var stat = new Stat({
            timestamp: Date.now(),
            resultsNumber: JSON.parse(body).data.count,
            category: _components.categoryName,
            sort: {
                filter: _components.filter.sort,
                direction: _components.filter.order
            },
            pageNum: _components.pageNum,
            quickFilters: _components.filter.quickFilter,
            userSalary: _components.filter.userSalary,
            emailAddress: _components.filter.email_address
        });

        stat.save(function (err) {
            if (err) {
                console.log("ERROR");
            }
        });

    }

};