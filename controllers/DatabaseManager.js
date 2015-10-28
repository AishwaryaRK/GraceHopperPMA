var mongoose = require('mongoose');
var Project = require('./project');
var config = require('./../config/config.json');

module.exports = {
    connect: function connect() {
        mongoose.connect(config.database.url);
    },

    save: function save(project) {
        project.save(function(error) {
            if (error) throw error;
            console.log('project saved');
        });
    }
};
