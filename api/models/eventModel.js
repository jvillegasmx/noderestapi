'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
    Location: {
        type: String,
        required: [true, 'Why no location?']
    },
    Title: {
        type: String,
        required: [true, 'Why no title?']
    },

    Category: {
        type: String,
        required: [false]
    },

    Start_date: {
        type: Date,
    },

    End_date: {
        type: Date,
    },

    Timing: {
        type: String,
    },
    Time_start: {
        type: String,
    },
    Time_end: {
        type: String,
    },

    Description: {
        type: String,
    },

    Price: {
        type: Number,
    },

    Phone: {
        type: String,
    },

    Email: {
        type: String,
    },

    Event_url: {
        type: String,
    },
    Ticket_url: {
        type: String,
    },

    Photo: {
        type: String,
    },

    Note_editor: {
        type: String,
    },


    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'active', 'inactive']
        }],
        default: ['active']
    }
});

module.exports = mongoose.model('Events', EventSchema);