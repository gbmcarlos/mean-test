/**
 * Created by gbmcarlos on 3/3/16.
 */
var mongoose = require('mongoose');

var StatsSchema = new mongoose.Schema({

    timestamp: Date,
    category: String,
    sort: {
        filter: String,
        direction: String
    },
    pageNum: Number,
    quickFilters: [String],
    userSalary: Number,
    email_address: String

});

mongoose.model('Stat', StatsSchema);

module.exports = {

    newStat: function(query, results) {

        var components = query.split('&');
        var _components = {};
        for (var i in components) {
            var parts = components[i].split('=');
            _components[parts[0]] = decodeURIComponent(parts[1]);
        }
        _components.filter = JSON.parse(_components.filter);

        var stat = {
            category: _components.categoryName,
            sort: {
                filter: _components.filter.sort,
                direction: _components.filter.order
            },
            pageNum: _components.pageNum,
            quickFilters: _components.filter.quickFilter,
            userSalary: _components.filter.userSalary,
            emailAddress: _components.filter.email_address
        };

        //mongoose.model('Stat').create({

        //}, function (err, stat) {
        //    if (err) {
        //        console.log("ERROR");
        //    } else {
        //        console.log('SUCCESS');
        //    }
        //});

    }

};