'use strict';
module.exports = function(app) {
    var eventController = require('../controllers/eventController');


    // todoList Routes
    app.route('/events')
        .get(eventController.list_all_events)
        .post(eventController.create_a_event);


    app.route('/events/:eventId')
        .get(eventController.read_a_event)
        .put(eventController.update_a_event)
        .delete(eventController.delete_a_event);
};