var express = require('express');
var passport = require('passport');
var lowdb = require('lowdb');
var uuid = require('uuid');

var LocalStrategy = require('passport-local').Strategy;

var db = lowdb('db.json', {
    storage: require('lowdb/lib/file-sync')
});

db.defaults({
    users: [
        {
            id: uuid(),
            username: 'admin',
            password: 'admin'
        }
    ]
}).value();

passport.use(new LocalStrategy(function (username, password, cb) {
    // Find the user
    var user = db.get('users')
        .find({ username: username })
        .value();
    // If no user was found, or the password was incorrect
    if (!user || user.password !== password) {
        return cb(null, false);
    }
    // User was found
    return cb(null, user);
}));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

var app = express();

app.use(require('body-parser')());
app.use(require('express-session')({
    secret: 'honey badger don\'t care',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/build'));

// API endpoints are authenticated with this function. If the client recieves
// a 401 response, it can redirect itself to the login page.
function auth(req, res, next) {
    if (!req.isAuthenticated()) {
        res.sendStatus(401);
    } else {
        next();
    }
}

/**
 * Authentication endpoints
 */

app.post('/auth/login', passport.authenticate('local', {
    failureRedirect: '/'
}), function (req, res) {
    res.json(req.user);
});

app.delete('/auth/login', auth, function (req, res) {
    req.logOut();
    res.sendStatus(202);
});

app.get('/auth/check', auth, function (req, res) {
    res.json(req.user);
});

/**
 * REST API endpoints
 */

app.get('/users', auth, function (req, res) {
    var users = db.get('users').value();
    res.json(users);
});

app.post('/users', function (req, res) {
    var existing = db.get('users')
        .find({ username: req.body.username })
        .value();

    if (existing) {
        res.sendStatus(409);
        return;
    }

    var user = {
        id: uuid(),
        username: req.body.username,
        password: req.body.password
    };

    db.get('users')
        .push(user)
        .value();

    res.json(user);
});

app.get('/users/:id', auth, function (req, res) {
    var user = db.get('users')
        .find({ id: req.params.id })
        .value();

    if (!user) {
        res.sendStatus(404);
        return;
    }

    res.json(user);
});

app.listen(8000);