var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Event = require('./api/models/eventModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://url-to-connect');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});*/

var routes = require('./api/routes/eventRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
