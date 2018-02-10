var es6Renderer = require('express-es6-template-engine');
var express = require('express');
var path = require('path');
var mysql = require('mysql');

var app = express();

app.engine('html', es6Renderer);
app.set('view engine', 'html');

app.use('/static', express.static(path.join(__dirname, 'public')))


// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function (req, res) {
	res.render('main', { partials: { template:  'index' }});
	// res.render('main', { partials: { template: path.join(__dirname, 'views/index') }});
});

// app.listen(3000, () => console.log('Example app listening on port 3000!'))


// var index = require('./routes/index');
// var users = require('./routes/users');

var models = require("./server/models/allModels.js");


// // app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/views');
// // app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');



// // var engines = require('consolidate');
// // app.set('views', __dirname + '/views');
// // app.engine('html', engines.mustache);
// // app.set('view engine', 'html');


// // // view engine setup
// // // app.use(express.static(path.join(__dirname, 'public')));
// // // app.set('views', path.join(__dirname, 'views'));
// // // app.set('view engine', 'html');
// // // app.set('view engine', 'pug');


// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// // app.use('/', index);
// app.get('/', function (req, res) {
// 	res.render('main', { partials: { template: path.join(__dirname, 'views/index') }});
// });
// app.use('/users', users);

// // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   // var err = new Error('Not Found');
// //   // err.status = 404;
// //   next();
// // });

// // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });

module.exports = app;
