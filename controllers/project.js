var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name : String,
    head : String,
    startDate : Date,
    endDate : Date,
    locations : [{
        locationName : String,
        locationHead : String,
        totalFund : Number,
        resources : [{
            resourceName : String,
            fund : Number
        }]
    }],
    tasks : [{
        taskName : String,
        isDone : Boolean
    }]
});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;
