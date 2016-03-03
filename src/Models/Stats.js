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
    filters: [String],
    results_number: Number,
    results: [Schema.Types.Mixed],
    email_address: ''

});

mongoose.model('Stat', StatsSchema);

module.exports = {

    newStat: function(stat) {

        mongoose.model('Stat').create(stat, function (err, stat) {
            if (err) {
                console.log("ERROR");
            } else {
                console.log('SUCCESS');
            }
        });

    }

};